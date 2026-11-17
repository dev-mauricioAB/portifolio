# M/AB Portfolio

A bilingual portfolio built with Next.js, TypeScript, Tailwind CSS and shadcn/ui. The homepage and public design reference follow the approved Figma design.

## Development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. The middleware redirects to an English or Portuguese locale. The routes are `/en-US`, `/pt-BR`, and their respective `/style-guide` pages.

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Updating the site

- Portfolio copy, project cards and skill groups: `locales/content.ts`.
- Shared portfolio components: `components/`; shadcn primitives: `components/ui/`.
- Colors, layouts and responsive rules: `app/[locale]/globals.css`.
- Images and localized résumé PDFs: `public/`.

The Figma Make preview is the reference for interactive states: mission cards lift and zoom their images, and their arrow links lead to the contact section. Primary and conversation buttons share the clipped-corner shape and hover feedback. These effects, the homepage entrance, navigation feedback and mobile menu use CSS rather than a motion library, and respect reduced-motion preferences.
