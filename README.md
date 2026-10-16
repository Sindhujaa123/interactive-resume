# Sindhujaa Reddy Vadde — Portfolio

A static portfolio built with Astro, TypeScript, Tailwind CSS, and GSAP. The content is based on the supplied resume; Astro renders static HTML and GSAP adds restrained scroll and reveal motion. No server runtime is required.

## Run locally

Requires Node.js 22.22.0 or newer. The included `.nvmrc` pins Node 24.20.0 for Cloudflare Pages builds.

```sh
npm ci
npm run dev
npm run check
npm run build
```

`tailwind.config.mjs` contains the project’s theme extensions and is loaded through Tailwind 4’s legacy config compatibility directive.

The production site is written to `dist/`. Connect this repository to Cloudflare Pages with build command `npm run build` and output directory `dist`. The `public/_headers` file supplies basic security and cache headers. The resume PDF is served from `public/resume.pdf`.

Edit `src/data/profile.ts` to update contact details and skills. Its `linkedinUrl` is `null` because no LinkedIn URL was supplied. The Financial Risk Analytics Dashboard live demo and the three AWS Credly badge links are included in the project and credentials sections; source-code repository links and a Google Analytics verification URL were not supplied.

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
│   ├── favicon.svg
│   └── resume.pdf
└── src/
    ├── components/
    │   ├── BentoGrid.astro
    │   ├── Contact.astro
    │   ├── Credentials.astro
    │   ├── ExperienceTimeline.astro
    │   ├── Hero.astro
    │   ├── Navigation.astro
    │   └── Projects.astro
    ├── layouts/
    │   └── SiteLayout.astro
    ├── data/
    │   ├── profile.ts
    │   └── projects.ts
    ├── pages/
    │   └── index.astro
    ├── styles/
    │   └── global.css
    └── env.d.ts
```

Motion respects `prefers-reduced-motion`, and the page remains readable and navigable without JavaScript. The contact card uses the email address in the supplied resume and links to the supplied GitHub profile.
