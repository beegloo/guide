import { createHash } from "node:crypto";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const toolDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(toolDirectory, "../..");

function parseArguments(argv) {
  const options = { config: null, execute: false, output: null, printPrompt: false };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--execute") {
      options.execute = true;
    } else if (argument === "--print-prompt") {
      options.printPrompt = true;
    } else if (argument === "--config" || argument === "--output") {
      const value = argv[index + 1];
      if (!value) throw new Error(`Informe um valor após ${argument}.`);
      options[argument === "--config" ? "config" : "output"] = value;
      index += 1;
    } else if (argument === "--help") {
      console.log(`
Uso:
  npm run creative -- --config <arquivo>
  npm run creative -- --config <arquivo> --execute

Opções:
  --config <arquivo>  Solicitação JSON da geração.
  --output <pasta>    Pasta da rodada; por padrão usa creative-runs/<timestamp>.
  --print-prompt      Exibe o prompt compilado durante o dry-run.
  --execute           Envia os assets e realiza a chamada paga.
`);
      process.exit(0);
    } else {
      throw new Error(`Opção desconhecida: ${argument}`);
    }
  }

  if (!options.config) throw new Error("Use --config para informar a solicitação JSON.");
  return options;
}

function parseSize(value) {
  const match = /^(\d+)x(\d+)$/.exec(value);
  if (!match) throw new Error(`Dimensão inválida: ${value}`);
  const size = { width: Number(match[1]), height: Number(match[2]) };
  if (size.width <= 0 || size.height <= 0) throw new Error(`Dimensão inválida: ${value}`);
  return size;
}

function validateGenerationSize(value) {
  const size = parseSize(value);
  if (size.width % 16 !== 0 || size.height % 16 !== 0) {
    throw new Error(`A dimensão da API precisa usar múltiplos de 16: ${value}`);
  }
  if (Math.max(size.width, size.height) > 3840) {
    throw new Error(`A maior dimensão não pode ultrapassar 3840 px: ${value}`);
  }
  const pixels = size.width * size.height;
  if (pixels < 655_360 || pixels > 8_294_400) {
    throw new Error(`A área precisa ficar entre 655.360 e 8.294.400 pixels: ${value}`);
  }
  return size;
}

function validateConfig(config) {
  for (const field of ["model", "size", "finalSize", "quality", "prompt"]) {
    if (typeof config[field] !== "string" || !config[field].trim()) {
      throw new Error(`O campo ${field} é obrigatório.`);
    }
  }
  validateGenerationSize(config.size);
  const generated = parseSize(config.size);
  const final = parseSize(config.finalSize);
  if (final.width > generated.width || final.height > generated.height) {
    throw new Error("A dimensão final não pode ser maior que a dimensão gerada.");
  }
  if (!Array.isArray(config.assets) || config.assets.length === 0) {
    throw new Error("A solicitação precisa incluir pelo menos um asset visual.");
  }
  if (!["low", "medium", "high", "auto"].includes(config.quality)) {
    throw new Error(`Qualidade inválida: ${config.quality}`);
  }
  if (config.allowedText !== undefined && (!Array.isArray(config.allowedText) || config.allowedText.some((item) => typeof item !== "string" || !item.trim()))) {
    throw new Error("allowedText precisa ser uma lista de textos não vazios.");
  }
  for (const [index, asset] of config.assets.entries()) {
    if (!asset || typeof asset.role !== "string" || typeof asset.path !== "string" || typeof asset.description !== "string") {
      throw new Error(`O asset ${index + 1} precisa de role, path e description.`);
    }
  }
}

function safeName(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function hash(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

async function pathExists(candidate) {
  try {
    await access(candidate);
    return true;
  } catch {
    return false;
  }
}

async function resolveInputPath(inputPath, configDirectory) {
  if (path.isAbsolute(inputPath)) return inputPath;
  const relativeToConfig = path.resolve(configDirectory, inputPath);
  if (await pathExists(relativeToConfig)) return relativeToConfig;
  return path.resolve(repositoryRoot, inputPath);
}

async function prepareAsset(asset, configDirectory) {
  const absolutePath = await resolveInputPath(asset.path, configDirectory);
  const source = await readFile(absolutePath);
  const extension = path.extname(absolutePath).toLowerCase();
  const filenameBase = safeName(asset.role) || "asset";

  if (extension === ".svg") {
    const submitted = await sharp(source, { density: 300 })
      .resize({ width: 1024, height: 1024, fit: "inside", withoutEnlargement: false })
      .png()
      .toBuffer();
    return {
      ...asset,
      absolutePath,
      filename: `${filenameBase}.png`,
      mimeType: "image/png",
      sourceHash: hash(source),
      submittedHash: hash(submitted),
      submitted,
      convertedFrom: "image/svg+xml",
    };
  }

  if (![".png", ".jpg", ".jpeg", ".webp"].includes(extension)) {
    throw new Error(`Formato de imagem não suportado: ${asset.path}`);
  }

  const mimeType = extension === ".png" ? "image/png" : extension === ".webp" ? "image/webp" : "image/jpeg";
  return {
    ...asset,
    absolutePath,
    filename: `${filenameBase}${extension === ".jpeg" ? ".jpg" : extension}`,
    mimeType,
    sourceHash: hash(source),
    submittedHash: hash(source),
    submitted: source,
    convertedFrom: null,
  };
}

function buildPrompt(config, assets) {
  const assetContract = assets
    .map((asset, index) => `${index + 1}. ${asset.role}: ${asset.description}`)
    .join("\n");
  const allowedText = Array.isArray(config.allowedText) && config.allowedText.length > 0
    ? `\nO único texto visível permitido é:\n${config.allowedText.map((text) => `- ${text}`).join("\n")}\n\nNão acrescente, traduza, complete ou varie esse conteúdo.\n`
    : "";

  return `
Imagens de entrada, na ordem enviada:
${assetContract}
${allowedText}
${config.prompt.trim()}
`.trim();
}

async function prepareMask(config, assets) {
  if (!config.maskRect) return null;
  if (assets.length !== 1) throw new Error("Edições com máscara exigem exatamente uma imagem de entrada.");

  const { width, height } = await sharp(assets[0].submitted).metadata();
  const { left, top, width: maskWidth, height: maskHeight } = config.maskRect;
  if (![left, top, maskWidth, maskHeight].every(Number.isInteger)) {
    throw new Error("maskRect precisa conter left, top, width e height inteiros.");
  }
  if (left < 0 || top < 0 || maskWidth <= 0 || maskHeight <= 0 || left + maskWidth > width || top + maskHeight > height) {
    throw new Error("maskRect está fora dos limites da imagem de entrada.");
  }

  return sharp({
    create: { width, height, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } },
  })
    .composite([{
      input: { create: { width: maskWidth, height: maskHeight, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } } },
      left,
      top,
      blend: "dest-out",
    }])
    .png()
    .toBuffer();
}

async function writeRunFiles({ runDirectory, prompt, config, assets, response, sourceImage, mask }) {
  await mkdir(runDirectory, { recursive: true });
  await writeFile(path.join(runDirectory, "prompt.txt"), `${prompt}\n`);
  await writeFile(path.join(runDirectory, "request.json"), `${JSON.stringify(config, null, 2)}\n`);
  await writeFile(path.join(runDirectory, "source.png"), sourceImage);
  if (mask) await writeFile(path.join(runDirectory, "mask.png"), mask);

  const generatedSize = parseSize(config.size);
  const finalSize = parseSize(config.finalSize);
  const left = Math.floor((generatedSize.width - finalSize.width) / 2);
  const top = Math.floor((generatedSize.height - finalSize.height) / 2);
  await sharp(sourceImage)
    .extract({ left, top, width: finalSize.width, height: finalSize.height })
    .png()
    .toFile(path.join(runDirectory, "output.png"));

  const metadata = {
    createdAt: new Date().toISOString(),
    requestId: response.requestId,
    model: config.model,
    size: config.size,
    finalSize: config.finalSize,
    quality: config.quality,
    usage: response.usage ?? null,
    maskRect: config.maskRect ?? null,
    assets: assets.map((asset, index) => ({
      order: index + 1,
      role: asset.role,
      path: asset.path,
      sourceHash: asset.sourceHash,
      submittedHash: asset.submittedHash,
      convertedFrom: asset.convertedFrom,
    })),
  };
  await writeFile(path.join(runDirectory, "generation.json"), `${JSON.stringify(metadata, null, 2)}\n`);
}

async function main() {
  const options = parseArguments(process.argv.slice(2));
  const configPath = path.resolve(process.cwd(), options.config);
  const config = JSON.parse(await readFile(configPath, "utf8"));
  validateConfig(config);

  const configDirectory = path.dirname(configPath);
  const assets = await Promise.all(config.assets.map((asset) => prepareAsset(asset, configDirectory)));
  const mask = await prepareMask(config, assets);
  const prompt = buildPrompt(config, assets);
  const summary = {
    mode: options.execute ? "execute" : "dry-run",
    model: config.model,
    size: config.size,
    finalSize: config.finalSize,
    quality: config.quality,
    assets: assets.map((asset, index) => `${index + 1}. ${asset.role} — ${asset.path}`),
    allowedText: config.allowedText ?? null,
    maskRect: config.maskRect ?? null,
  };

  if (!options.execute) {
    console.log("Validação concluída. Nenhuma chamada paga foi realizada.\n");
    console.log(JSON.stringify(summary, null, 2));
    if (options.printPrompt) console.log(`\n--- PROMPT ---\n${prompt}\n--- FIM DO PROMPT ---`);
    console.log("\nUse --execute somente após revisar o payload e autorizar a chamada paga.");
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("OPENAI_API_KEY não está configurada no ambiente local.");

  const form = new FormData();
  form.append("model", config.model);
  form.append("prompt", prompt);
  form.append("size", config.size);
  form.append("quality", config.quality);
  form.append("output_format", "png");
  form.append("background", "opaque");
  for (const asset of assets) {
    form.append("image[]", new Blob([asset.submitted], { type: asset.mimeType }), asset.filename);
  }
  if (mask) form.append("mask", new Blob([mask], { type: "image/png" }), "mask.png");

  console.log(`Enviando ${assets.length} asset(s) para ${config.model}...`);
  const apiResponse = await fetch("https://api.openai.com/v1/images/edits", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}` },
    body: form,
    signal: AbortSignal.timeout(180_000),
  });
  const requestId = apiResponse.headers.get("x-request-id");
  const payload = await apiResponse.json();

  if (!apiResponse.ok) {
    const error = new Error(payload?.error?.message ?? `Falha HTTP ${apiResponse.status}`);
    error.cause = { status: apiResponse.status, requestId, code: payload?.error?.code ?? null };
    throw error;
  }

  const encoded = payload?.data?.[0]?.b64_json;
  if (!encoded) throw new Error("A API respondeu sem uma imagem em base64.");

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const runDirectory = options.output
    ? path.resolve(process.cwd(), options.output)
    : path.join(repositoryRoot, "creative-runs", timestamp);
  await writeRunFiles({
    runDirectory,
    prompt,
    config,
    assets,
    response: { requestId, usage: payload.usage },
    sourceImage: Buffer.from(encoded, "base64"),
    mask,
  });

  console.log(`Geração concluída: ${path.join(runDirectory, "output.png")}`);
  if (requestId) console.log(`Request ID: ${requestId}`);
}

main().catch((error) => {
  console.error(`Erro: ${error.message}`);
  if (error.cause) console.error(JSON.stringify(error.cause));
  process.exitCode = 1;
});
