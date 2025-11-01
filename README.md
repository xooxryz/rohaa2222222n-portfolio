# Rohan's Portfolio (React + Vite + Tailwind)

A clean, responsive portfolio for **Flutter Developer | Social Media Specialist | Content Writer** with dark/light mode, project grid, QR code, and GitHub Pages deploy.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173/

## 🧩 Tech
- React (Vite)
- Tailwind CSS
- Framer Motion
- lucide-react (icons)
- qrcode.react (QR code)
- gh-pages (deploy)

## 🌗 Dark / Light
Toggle is in the top-right. Theme persists in localStorage and respects system preference initially.

## 🧪 Customize
- Edit `src/data/projects.js` to add your projects (image, title, description, tags, links).
- Replace SVG placeholders in `/public` with your images.
- Put your resume file at `/public/Rohan-Resume.pdf` and the button will download it.

## 🔎 SEO
Edit meta tags in `index.html` (title, description, keywords, author).

## 📨 Contact
The "Email Me" button opens your email client. For a working form, connect to an API like Formspree.

## 📦 Deploy to GitHub Pages

1. Create a **public** repo, e.g. `rohan-portfolio`.
2. In `vite.config.js`, set:
   ```js
   base: '/rohan-portfolio/'   // repo name
   ```
   If deploying to `<username>.github.io`, use `base: '/'`.
3. Commit & push. Then:
   ```bash
   npm run deploy
   ```
   This builds and publishes to the `gh-pages` branch.

On GitHub, enable **Pages** → **Deploy from branch** → **gh-pages**.
