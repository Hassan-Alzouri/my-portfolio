# Hassan Alzourei — Portfolio

A 3D, interactive personal portfolio built to showcase my work as a full-stack software engineer — featuring a real-time 3D scene, smooth scroll-based animations, and a fully responsive design.

**Live site:** [hassan-alzouri.github.io/my-portfolio](https://hassan-alzouri.github.io/my-portfolio/)

## Overview

This portfolio consolidates my projects, professional experience, and hackathon achievements into a single interactive site — built as an alternative to a static resume page. It features a 3D animated hero scene, an interactive work experience timeline with photos and certificates, a filterable project showcase, and a working contact form.

## Features

- 🖥️ **Interactive 3D hero scene** — built with React Three Fiber and Three.js, reacts to cursor movement
- 📱 **Fully responsive** — optimized layouts for mobile, tablet, and desktop
- 💼 **Work Experience carousel** — click through roles and hackathons to view related photos and certificates
- 🚀 **Project showcase** — browse featured projects with live demos, GitHub links, and image galleries
- ✉️ **Working contact form** — powered by EmailJS, no backend required
- 🎬 **Smooth animations** — GSAP-powered scroll and interaction animations throughout
- 🌐 **Deployed via GitHub Actions** — automatic build and deploy to GitHub Pages on every push to `main`

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React, Vite |
| 3D / Animation | React Three Fiber, Three.js, GSAP, @react-three/drei |
| Styling | Tailwind CSS |
| Contact Form | EmailJS |
| Deployment | GitHub Pages, GitHub Actions (CI/CD) |

## Project Structure
```text
my-portfolio/
├── .github/workflows/
│   └── deploy.yml          # Automated CI/CD pipeline
├── public/
│   └── assets/             # Images, static icons, CV, and media assets
├── src/
│   ├── components/         # Reusable UI elements (Buttons, Loader, Navbar)
│   ├── sections/           # Modular page sections (Hero, About, Projects, Experience, Contact)
│   └── constants/          # Static content catalogs (Project data, experiences, links)
├── index.html
└── package.json

## Getting Started

### Prerequisites

- Node.js 18+

### Setup

```bash
git clone https://github.com/Hassan-Alzouri/my-portfolio.git
cd my-portfolio
npm install --legacy-peer-deps
```

Create a `.env` file in the root with your EmailJS credentials (used by the Contact form):
VITE_EMAILJS_SERVICE_ID=your-service-id
VITE_EMAILJS_TEMPLATE_ID=your-template-id
VITE_EMAILJS_PUBLIC_KEY=your-public-key

Run the dev server:

```bash
npm run dev
```

The app will be running at `http://localhost:5173`.

### Build & Deploy

```bash
npm run build
```

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`) — every push to `main` triggers a build and deploy to GitHub Pages.

## Author

**Hassan Mohammed Alzourei**
[Portfolio](https://hassan-alzouri.github.io/my-portfolio/) · [GitHub](https://github.com/Hassan-Alzouri) · [LinkedIn](https://www.linkedin.com/in/hassan-alzourei-2001b1324/) · Hassan-Alzourei@outlook.com
