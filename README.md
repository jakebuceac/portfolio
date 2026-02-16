# Jake Buceac's Portfolio

A modern, interactive portfolio website showcasing full-stack and backend development experience. Built with Next.js, featuring smooth animations, responsive design, and a polished user experience.

## Overview

This personal portfolio demonstrates expertise in building scalable applications and robust APIs. It features a curated selection of projects spanning full-stack development, frontend optimization, and backend infrastructure, with detailed case studies and GitHub links.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Motion (Framer Motion)
- **Icons**: React Icons
- **Deployment**: Vercel
- **Font Optimization**: Geist (via next/font)

## Features

- ✨ Smooth scroll animations and transitions
- 📱 Fully responsive design (mobile-first)
- 🎨 Modern, clean UI with Tailwind CSS
- 🔗 Integrated social links (GitHub, LinkedIn)
- 📄 CV download functionality
- 📧 Contact form section
- 🛠️ Skills showcase
- 💼 Featured projects with case studies

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

The page auto-updates as you edit files in `app/`.

## Project Structure

```
app/
├── page.tsx                 # Main landing page
├── layout.tsx              # Root layout
├── globals.css             # Global styles
├── lib/
│   └── actions.ts          # Server actions
└── ui/                      # Reusable components
    ├── nav.tsx             # Navigation
    ├── about.tsx           # About section
    ├── skills.tsx          # Skills section
    ├── featured-projects.tsx # Projects showcase
    ├── project-card.tsx    # Individual project card
    ├── contact.tsx         # Contact section
    └── ...other components
```

## Customization

Edit project data in `app/ui/featured-projects.tsx` to update the featured projects list.

## Deploy

Deploy to Vercel with one click:

```bash
pnpm run build
```

The easiest way to deploy is using the [Vercel Platform](https://vercel.com) from the creators of Next.js.
