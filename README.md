# Vedamit Solutions website

Marketing site for Vedamit, built with [Astro](https://astro.build), [React](https://react.dev) islands, and [Tailwind CSS](https://tailwindcss.com) v4.

## Requirements

- **Node.js** 22.12 or newer (see `package.json` → `engines`)

## Local setup

```sh
npm install
npm run dev
```

The dev server defaults to [http://localhost:4321](http://localhost:4321).

## Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start the dev server with hot reload             |
| `npm run build`   | Production build into `./dist/`                  |
| `npm run preview` | Serve `./dist/` locally to verify the build      |
| `npm run astro`   | Astro CLI (e.g. `npm run astro -- check`)        |

## Project layout

- `src/pages/` — Routes (`index.astro`, `about.astro`, `contact.astro`, etc.)
- `src/layouts/` — Shared page shell
- `src/components/` — Astro and React UI
- `src/data/` — Static content (services, case studies, home copy)
- `src/styles/` — Global CSS (Tailwind entry)
- `public/` — Static assets served as-is (favicons, etc.)

## Deploying

This project builds a **static site** (`output: 'static'` is Astro’s default). There is no server runtime or required environment variables for the current pages.

1. Install dependencies and build: `npm ci && npm run build`
2. Publish the **`dist`** directory as the site root.

That matches common hosts (Vercel, Netlify, Cloudflare Pages, S3 + CDN, etc.). Use their Astro or “static site” preset when offered; set the build command to `npm run build` and the publish/output directory to `dist`.

## Docs

- [Astro documentation](https://docs.astro.build)
