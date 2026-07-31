# International Institute of Tourism and Hospitality (IITH) Yenagoa — Official Website

Modern, production-ready website for the International Institute of Tourism and Hospitality, Yenagoa, Bayelsa State, Nigeria.

**Superior to both the existing iithyenagoa.edu.ng and ndu-eface.edu.ng sites.**

## Features

- Fully responsive, mobile-first design
- Dark / Light mode with system preference detection
- WCAG 2.2 AA accessibility foundations (semantic HTML, ARIA, focus states, skip link)
- SEO-ready (meta tags, Open Graph, canonical, semantic structure)
- Clean design system (teal brand + gold accents, Inter + Playfair Display typography)
- Smooth micro-interactions and scroll reveals
- Complete content drawn from official IITH sources
- Multi-page architecture covering all key institutional needs

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Homepage — Hero, Why IITH, Schools, Rector message, Mission/Vision/Values, CTA |
| `about.html` | History, full Rector message, Mission, Vision, Core Values |
| `academics.html` | Overview of all schools and programmes |
| `ssmtt.html` | School of Social Sciences, Management & Tourism Technology |
| `sset.html` | School of Science and Engineering Technology |
| `cves.html` | Centre for Vocational and Entrepreneurial Studies |
| `admissions.html` | 2026/2027 admissions — requirements, process, payment details |
| `news.html` | News & events |
| `contact.html` | Contact information, form, location |

## Technology

- HTML5 + Tailwind CSS (CLI build or CDN fallback)
- Vanilla JavaScript (theme, mobile menu, scroll effects)
- Google Fonts (Inter, Playfair Display)
- Optional Tailwind CLI build for production (purged, minified CSS)

## Tailwind CLI Setup (Recommended for Production)

The project is pre-configured for the official Tailwind CLI.

### 1. Install dependencies (requires network)

```bash
cd iith-website
npm install
```

### 2. Development (watch mode)

```bash
npm run dev
```

Watches `src/input.css` + HTML/JS and rebuilds `css/styles.css` on change.

### 3. Production build (minified)

```bash
npm run build
```

### Project structure for Tailwind

```
iith-website/
├── src/input.css          # @tailwind directives + @apply components
├── css/styles.css         # Compiled output
├── tailwind.config.js     # Content paths, brand colours, fonts
├── package.json
└── *.html
```

After a successful CLI build you can remove the Tailwind CDN `<script>` tags from the HTML files and rely solely on the generated `css/styles.css`.

## How to Run Locally (no build required)

```bash
# Option 1: Open directly
open index.html

# Option 2: Simple static server
npx serve .
# or
python3 -m http.server 8000
```

Then visit `http://localhost:8000`

## Deployment

Deploy the entire `iith-website` folder to any static host:

- Netlify / Vercel / Cloudflare Pages
- GitHub Pages
- Traditional web hosting (cPanel, etc.)
- Nginx / Apache

No server-side code or database required for the public site.

## Content Sources

All institutional information is based on:

- Official website: https://iithyenagoa.edu.ng/
- Public announcements and social channels of IITH Yenagoa
- Verified leadership, programme and contact details

## Future Enhancements (Recommended)

1. Connect contact form to backend / email service
2. Online application portal integration
3. CMS for news (e.g. headless CMS or simple Markdown)
4. Real campus photography and video
5. Student portal / result checking module
6. Analytics (privacy-respecting)
7. Progressive Web App (PWA) capabilities

---

© 2026 International Institute of Tourism and Hospitality, Yenagoa  
Built to production standards.
