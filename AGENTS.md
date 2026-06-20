# Eveline Website

A Next.js marketing/business website for Eveline, with pages for services, about, products, contact, partnership, ethics, FAQ, and who-we-serve sections.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **Deployment**: Vercel (vercel.json present)
- **Package Manager**: npm

## Setup

```bash
npm install
```

## Build / Run / Test

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## Project Structure

```
src/
  app/              # Next.js App Router pages
    layout.tsx      # Root layout
    page.tsx        # Homepage
    about/          # About page
    contact/        # Contact page
    ethics/         # Ethics page
    faq/            # FAQ page
    partnership/    # Partnership page
    products/       # Products page
    services/       # Services page
    who-we-serve/   # Who we serve page
    globals.css     # Global styles
  components/       # Shared UI components
    Header.tsx
    Footer.tsx
    Button.tsx
    SectionHeading.tsx
public/             # Static assets
```

## Architecture & Key Files

- `src/app/layout.tsx` — root layout shared across all pages
- `src/app/page.tsx` — homepage entry
- `src/components/` — shared components used across multiple pages
- Each subdirectory in `src/app/` is a Next.js route with its own page
- `vercel.json` — Vercel deployment configuration

## Conventions & Notes for Agents

- Uses Next.js App Router; new pages go in `src/app/<route>/page.tsx`.
- Server Components by default; add `"use client"` only when needed.
- A `.docx` file (`UMM Final Website Content.docx`) exists in root — this is content source material, not code.
- TypeScript strict mode; type all new components and props.
- No environment variables required unless adding backend integrations.
- No test suite configured.
