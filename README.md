# ENGXLABS Website

Marketing website for ENGXLABS built with Next.js App Router, React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Overview

This project is a single-page, section-based website focused on AI-native engineering and transformation services.

Core sections in the homepage flow:

- Navbar
- Hero
- Problem
- AI Native Enterprise
- Services
- Solutions
- Framework
- Why ENGXLABS
- Founder
- CTA
- Footer

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 3
- Framer Motion
- ESLint (Next.js config)

## Project Structure

```text
.
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── AINativeEnterprise.tsx
│       ├── CTA.tsx
│       ├── Footer.tsx
│       ├── Founder.tsx
│       ├── Framework.tsx
│       ├── Hero.tsx
│       ├── Navbar.tsx
│       ├── Problem.tsx
│       ├── Services.tsx
│       ├── Solutions.tsx
│       └── WhyENGXLABS.tsx
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18.18+ (or Node.js 20+ recommended)
- npm

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open http://localhost:3000.

## Available Scripts

- `npm run dev` - Start local dev server
- `npm run build` - Create production build
- `npm run start` - Run production build locally
- `npm run lint` - Run ESLint

## Styling and UI Notes

- Global styles and design tokens are defined in `src/app/globals.css`.
- The app uses a dark, grid-based visual system with custom utility classes.
- Motion and entrance animations are implemented with Framer Motion in section components.

## SEO Metadata

Site metadata (title, description, OpenGraph, Twitter card, metadata base URL) is configured in `src/app/layout.tsx`.

## Deployment

Recommended platforms:

- Vercel
- Any Node.js hosting that supports Next.js standalone/server mode

Typical production flow:

```bash
npm run build
npm run start
```

## Repository Notes

- This repo includes a `.gitignore` for Next.js, Node modules, local editor files, and environment files.
