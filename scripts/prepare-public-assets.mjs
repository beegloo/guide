import { copyFile, mkdir } from 'node:fs/promises'
import path from 'node:path'

const publicRoot = path.join(process.cwd(), 'public')
const brandLogoRoot = path.join(publicRoot, 'brand', 'logos')

const logoAliases = {
  'primary.svg': 'Padrão.svg',
  'on-color.svg': 'Sobre.svg',
  'icon-blue.svg': 'Ícone Azul.svg',
  'icon-pink.svg': 'Ícone Rosa.svg',
}

await mkdir(brandLogoRoot, { recursive: true })
await Promise.all(Object.entries(logoAliases).map(([alias, source]) => copyFile(
  path.join(publicRoot, 'logos', 'display', source),
  path.join(brandLogoRoot, alias),
)))
