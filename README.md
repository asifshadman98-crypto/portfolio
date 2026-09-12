# Asif Shadman Khan — Personal Portfolio

A clean, modern single-page portfolio for **Asif Shadman Khan**, a third-year Software Engineering student at Metropolitan University. Built with Next.js, TypeScript, and Tailwind CSS.

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

## Publishing to GitHub

```bash
# Initialize git (first time only)
git init
git add .
git commit -m "Initial portfolio commit"

# Create the repo on github.com first, then:
git branch -M main
git remote add origin https://github.com/asifshadman98-crypto/portfolio.git
git push -u origin main
```

## Deploying to Vercel

1. Push the repository to GitHub (commands above).
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
