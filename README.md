# Karan Veer Thakur — Portfolio

Personal portfolio website built with React, featuring a liquid glass UI theme.

## Tech Stack

- **React 19** with React Router
- **Liquid Glass UI** — custom glassmorphism + liquid glass effects
- **react-icons** for iconography
- **Devicon** for tech stack icons

## Pages

| Page | Description |
|------|-------------|
| Home | Hero, about summary, tools, featured projects, testimonials |
| About | Bio, education, skills, research, coding profiles, certifications |
| Portfolio | All projects with filters and live preview |
| Services | What I offer + work process |
| Contact | Contact form and social links |
| Hire Me | Hiring process and availability |

## Getting Started

```bash
npm install
npm start
```

## Build for Production

```bash
npm run build
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `build` and pushes the output to the `gh-pages` branch. Make sure GitHub Pages is set to serve from the `gh-pages` branch in your repo settings.

## Deploy to cPanel

1. Run the cPanel-specific build (uses root `/` as base path):

```bash
npm run build:cpanel
```

2. Upload the entire contents of the `build/` folder to your cPanel `public_html` directory (or subdomain folder).

3. The `.htaccess` file included in the build handles SPA routing and enables gzip compression + caching automatically.

## Author

**Karan Veer Thakur**
- GitHub: [@karanveerthakur1122](https://github.com/karanveerthakur1122)
- LinkedIn: [karanveerthakur1122](https://linkedin.com/in/karanveerthakur1122)
- Email: karanveerthakur1122@gmail.com
