# syedawais-website

The personal website of Syed Awais, built with [Astro](https://astro.build).

The site is statically generated — Astro renders every page to plain HTML at build
time and ships no JavaScript to the browser by default, so the output is a folder
of static files that can be hosted anywhere.

## Requirements

- Node.js `>=22.12.0`
- npm

## Getting started

```sh
npm install
npm run dev
```

The dev server runs at http://localhost:4321 with hot module reloading.

## Commands

All commands are run from the root of the project.

| Command                   | Action                                             |
| :------------------------ | :------------------------------------------------- |
| `npm install`             | Install dependencies                               |
| `npm run dev`             | Start the local dev server at `localhost:4321`     |
| `npm run build`           | Build the production site to `./dist/`             |
| `npm run preview`         | Preview the production build locally               |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`   |
| `npm run astro -- --help` | Get help using the Astro CLI                       |

## Project structure

```text
/
├── public/              # Static assets served as-is at the site root
├── src/
│   └── pages/           # Each file becomes a route
│       └── index.astro  # → /
├── astro.config.mjs     # Astro configuration
├── tsconfig.json        # Extends astro/tsconfigs/strict
└── package.json
```

Astro uses file-based routing: any `.astro` or `.md` file in `src/pages/` is
exposed as a route matching its filename. Shared UI belongs in `src/components/`,
and reusable page shells in `src/layouts/` — neither directory exists yet, so
create them as the site grows.

Anything in `public/` is copied to the build output untouched and is served from
the site root, so `public/favicon.svg` is available at `/favicon.svg`.

## Deploying

`npm run build` writes a fully static site to `dist/`. Point any static host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages) at that directory, using
`npm run build` as the build command. See Astro's
[deployment guides](https://docs.astro.build/en/guides/deploy/) for
host-specific setup.

## License

[MIT](LICENSE)
