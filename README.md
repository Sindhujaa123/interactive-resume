# Sindhujaa — Portfolio

A static, dark editorial portfolio built with Astro, TypeScript, Tailwind CSS, and GSAP. Astro renders the page to static HTML; GSAP adds scroll, reveal, and cursor motion in a small browser script. No server runtime is required.

## Run locally

Requires Node.js 22.22.0 or newer. The included `.nvmrc` pins Node 24.20.0 for Cloudflare Pages builds.

```sh
npm ci
npm run dev
npm run check
npm run build
```

`tailwind.config.mjs` contains the project’s theme extensions and is loaded through Tailwind 4’s legacy config compatibility directive.

The production site is written to `dist/`. Connect this repository to Cloudflare Pages with build command `npm run build` and output directory `dist`. The `public/_headers` file supplies basic security and cache headers.

## Structure

```text
.
├── .nvmrc
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tailwind.config.mjs
├── tsconfig.json
├── public/
│   ├── _headers
│   └── favicon.svg
└── src/
    ├── components/
    │   ├── BentoGrid.astro
    │   ├── Contact.astro
    │   ├── ExperienceTimeline.astro
    │   ├── Hero.astro
    │   ├── Navigation.astro
    │   └── Projects.astro
    ├── layouts/
    │   └── SiteLayout.astro
    ├── pages/
    │   └── index.astro
    ├── styles/
    │   └── global.css
    └── env.d.ts
```

Motion respects `prefers-reduced-motion`, and the page remains readable and navigable without JavaScript. The contact card links to the supplied GitHub profile because no email address or form endpoint was provided.
