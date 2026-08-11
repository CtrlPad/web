# Ctrlpad-web

![GitHub stars](https://img.shields.io/github/stars/ctrlPad/firmware?style=for-the-badge&logo=github) ![GitHub issues](https://img.shields.io/github/issues/ctrlPad/firmware?style=for-the-badge&logo=github) ![Last commit](https://img.shields.io/github/last-commit/ctrlPad/firmware?style=for-the-badge&logo=github)

The website and documentation for [CtrlPad](https://github.com/CtrlPad) - built with [Next.js](https://nextjs.org) and [Nextra](https://nextra.site).

It serves the landing page, the documentation under `/docs`, and a small API route that proxies the latest firmware binary for the browser flasher.

> [!WARNING]
> This project is still in development. Content, structure and setup can change at any time.

## Requirements

[devenv](https://devenv.sh) is required. It provides Node.js and pnpm in the versions this project is developed against. Install it together with [Nix](https://nixos.org/download/), then everything else comes from `devenv.nix`.

## Getting Started

```sh copy
devenv shell
pnpm install
next:dev
```

The dev server runs on [http://localhost:3000](http://localhost:3000).

## pnpm Scripts

| Script              | What it does                                     |
| ------------------- | ------------------------------------------------ |
| `pnpm dev`          | Start the dev server with Turbopack on port 3000 |
| `pnpm build`        | Production build (`output: "standalone"`)        |
| `pnpm start`        | Serve a previously created production build      |
| `pnpm lint`         | Run ESLint                                       |
| `pnpm format`       | Format the repository with Prettier              |
| `pnpm format:check` | Check formatting without writing — used in CI    |

## devenv Scripts

`devenv.nix` wraps the pnpm scripts so they are available as plain commands inside the shell:

| Command             | Runs                    |
| ------------------- | ----------------------- |
| `next:dev`          | `pnpm run dev`          |
| `next:build`        | `pnpm run build`        |
| `next:start`        | `pnpm run start`        |
| `next:lint`         | `pnpm run lint`         |
| `next:format`       | `pnpm run format`       |
| `next:format:check` | `pnpm run format:check` |

## Docker

The image is a three-stage build (dependencies → build → runtime) that ships the Next.js standalone output and runs as the non-root `node` user.

```sh copy
docker compose -f docker/docker-compose.yaml up --build -d
```

The site is then reachable on port 3000. Set `PORT` to publish it somewhere else:

```sh copy
PORT=8080 docker compose -f docker/docker-compose.yaml up --build -d
```

Building the image on its own:

```sh copy
docker build -f docker/Dockerfile -t ctrlpad-web .
```

## Project Structure

```
app/
  (home)/         landing page
  _sections/      landing page sections
  docs/           Nextra catch-all route for the guides
  api/firmware/   proxies the latest firmware release for the web flasher
components/       shared and UI components
content/          the documentation itself, as MDX
docker/           Dockerfile and compose file
patches/          pnpm patch for nextra-theme-docs
```

## Writing Docs

Pages live in `content/` and are served under `/docs` (`contentDirBasePath` in `next.config.ts`). Every directory has a `_meta.ts` that controls the sidebar titles and their order.

Nextra components such as `<Callout>` and `<Steps>` have to be imported at the top of the page:

```mdx
import { Callout, Steps } from "nextra/components";
```

Code blocks take extra meta: `filename="..."` labels the block (and gives it a copy button), and `copy` adds the copy button on its own.

````mdx
```sh copy
sudo snap install ctrlpad-desktop
```
````

## Notes

- `nextra-theme-docs` is patched via pnpm to make the layout's `children` prop optional. This is only a workaround for [nextra#5036](https://github.com/shuding/nextra/issues/5036) and can be dropped once that is fixed upstream. See `patches/` and `pnpm-workspace.yaml`.
