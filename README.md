# Asif Shadman Khan — Personal Portfolio

A clean, modern single-page portfolio for **Asif Shadman Khan**, a third-year Software Engineering student at Metropolitan University. Built with Next.js, TypeScript, and Tailwind CSS.

**Live site:** [https://asifshadman98-crypto.github.io/portfolio/](https://asifshadman98-crypto.github.io/portfolio/)

## Sections

- **Navbar** — sticky, compacts on scroll, mobile hamburger menu
- **Hero** — introduction, photo, and calls to action
- **About** — short introduction with quick info cards
- **Education** — academic timeline
- **Skills** — categorized technologies (no fake percentages)
- **Projects** — AI Thesis Analyzer & Flames Musical Club website design
- **Contact** — email + GitHub links
- **Footer**

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) icons

Animations are lightweight — CSS transitions plus a small `IntersectionObserver`-based reveal component, and `prefers-reduced-motion` is respected.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.9 or later
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/asifshadman98-crypto/portfolio.git
cd portfolio

# 2. Install dependencies
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm run start
```

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css      # Global styles, theme, reduced-motion support
│   ├── layout.tsx       # Root layout, fonts, SEO metadata
│   └── page.tsx         # Home page (assembles all sections)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Education.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Reveal.tsx       # Scroll-reveal wrapper (IntersectionObserver)
│   └── SectionHeading.tsx
├── lib/
│   └── profile.ts       # Email + GitHub URL constants
└── public/
    └── profile.png
```

## Deployment

The site is deployed to **GitHub Pages** via GitHub Actions. Every push to `main` automatically rebuilds the site and republishes it — no manual steps needed.

**Live URL:** https://asifshadman98-crypto.github.io/portfolio/

### How it works

- [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds a fully static export of the site (`next.config.mjs` enables `output: "export"` and the `/portfolio` base path only when `DEPLOY_TARGET=github-pages`, so local development is unaffected) and publishes the `out/` directory to GitHub Pages.
- One-time setup in GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

### Manual deploy

```bash
git add .
git commit -m "Update portfolio"
git push   # GitHub Actions handles the rest
```

## Deploying to Vercel (alternative)

1. Push the repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project** and import the repository.
4. Vercel auto-detects Next.js — just click **Deploy**.

Alternatively, from the terminal:

```bash
npm i -g vercel
vercel
```

## License

This project is for personal and educational use.
