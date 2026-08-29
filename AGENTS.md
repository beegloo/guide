# AGENTS.md

## Project

Beegloo Guide is a React application built with Vite. GitHub is the source of truth.

## Working conventions

- Use `npm install` to install dependencies.
- Use `npm run dev` for local development.
- Use `npm run build` before handing off changes.
- Keep source code in `src/` and static files in `public/`.
- Keep official logos in `public/logos/`.
- Preserve official SVG assets byte-for-byte. Do not reformat, optimize, minify, or otherwise modify their internal content when copying them.
- Never commit secrets, `.env` files, `node_modules/`, `dist/`, or `.vercel/`.
- Do not deploy unless explicitly requested.
- Keep changes focused, accessible, responsive, and suitable for deployment on Vercel.

## Verification

Run the production build after code or configuration changes:

```sh
npm run build
```
