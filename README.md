# 🪐 Hassan Alzourei — 3D Interactive Portfolio

<div align="center">
  <p align="center">
    A 3D, interactive personal portfolio built to showcase my work as a full-stack software engineer — featuring a real-time 3D scene, smooth scroll-based animations, and a fully responsive design.
  </p>
  
  [![Live Site](https://img.shields.io/badge/Live_Demo-View_Site-brightgreen?style=for-the-badge&logo=google-chrome&logoColor=white)](https://hassan-alzouri.github.io/my-portfolio/)
  [![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github)](https://github.com/Hassan-Alzouri)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/hassan-alzourei-2001b1324/)
</div>

---

## 📌 Overview

This portfolio consolidates my projects, professional experience, and hackathon achievements into an immersive, interactive digital space — built as a dynamic alternative to a static resume. 

It features a custom **3D animated hero scene**, an **interactive work experience timeline** highlighting key milestones and certificates, a **filterable project showcase**, and a **fully integrated contact system**.

---

## ✨ Features

*   🖥️ **Interactive 3D Hero Scene** – Rendered with React Three Fiber & Three.js, responding dynamically to cursor movement.
*   🎬 **Fluid Motion Graphics** – GSAP-powered scroll triggers and physics-based interactions throughout the page.
*   💼 **Dynamic Work Timeline** – Carousel-based project and career log showcasing verifiable photos, milestones, and certificates.
*   🚀 **Interactive Project Showcase** – Filterable project cards with live demos, code repositories, and asset galleries.
*   ✉️ **Direct Messaging** – Serverless contact form powered by EmailJS, delivering client messages straight to my inbox.
*   📱 **Fully Responsive** – Tailored, performant layouts built for smooth experiences on mobile, tablet, and ultra-wide screens.
*   🌐 **Automated CI/CD** – Built and instantly deployed to GitHub Pages via GitHub Actions on every push to `main`.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Core Framework** | `React` • `Vite` • `TypeScript` |
| **3D & Animation** | `React Three Fiber` • `Three.js` • `GSAP` • `@react-three/drei` |
| **Styling** | `Tailwind CSS` |
| **Integrations** | `EmailJS` |
| **CI / CD** | `GitHub Actions` • `GitHub Pages` |

---

## 📂 Project Structure

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
```

---

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have **Node.js 18+** installed on your system.

### ⚙️ Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Hassan-Alzouri/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and append your EmailJS keys:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Launch the Development Server:**
   ```bash
   npm run dev
   ```
   > 🌐 Your local environment will be up and running at `http://localhost:5173`.

---

## 📦 Deployment & Build

* **Compile optimized production build:**
  ```bash
  npm run build
  ```

> ⚙️ **Note:** Manual deployments are unnecessary. The integrated **GitHub Actions pipeline** automatically triggers, builds, and pushes live updates to GitHub Pages on every commit directly to the `main` branch.

---

## ✉️ Let's Connect

Feel free to reach out via any of the platforms below!

*   **Email:** [Hassan-Alzourei@outlook.com](mailto:Hassan-Alzourei@outlook.com)
*   **LinkedIn:** [Hassan Alzourei](https://www.linkedin.com/in/hassan-alzourei-2001b1324/)
*   **GitHub:** [@Hassan-Alzouri](https://github.com/Hassan-Alzouri)
*   **Live Portfolio:** [hassan-alzouri.github.io/my-portfolio](https://hassan-alzouri.github.io/my-portfolio/)
