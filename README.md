# Punith Manthri — Portfolio

Professional portfolio site for job search. Built with **Next.js 15**, **TypeScript**, and **Tailwind CSS v4**. Content lives in a single file: [`src/data/resume.ts`](src/data/resume.ts).

## Quick start

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Local development server             |
| `npm run build` | Static export to `out/`              |
| `npm run start` | Not used for static export           |
| `npm run lint`  | ESLint                               |

## Update your content

Edit [`src/data/resume.ts`](src/data/resume.ts) — name, summary, skills, experience, projects, social links, etc. The whole site updates from that file.

Replace [`public/resume.pdf`](public/resume.pdf) with your real resume PDF (keep the same filename).

## Deploy

The project uses `output: "export"` in [`next.config.ts`](next.config.ts), so `npm run build` produces a static site in `out/`.

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: Next.js — leave defaults.
4. Deploy. Optional: set `NEXT_PUBLIC_SITE_URL` to your production URL for correct Open Graph metadata.

### GitHub Pages

1. In [`next.config.ts`](next.config.ts), uncomment and set `basePath` / `assetPrefix` to your repo name (e.g. `/portfolio`).
2. Build: `npm run build`.
3. Publish the `out/` folder (GitHub Actions `peaceiris/actions-gh-pages` or Pages from a `gh-pages` branch).

Example workflow snippet:

```yaml
- run: npm ci && npm run build
- uses: peaceiris/actions-gh-pages@v4
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./out
```

## Stack

- Next.js 15 (App Router) + static export
- TypeScript
- Tailwind CSS v4
- Framer Motion
- react-icons

## License

Personal portfolio — feel free to fork and adapt for your own use.
