# Chosen Uche John — Professional Portfolio

## Included
- Dark/light mode with saved preference
- Smooth reveal animations + reduced-motion support
- Mobile navigation and responsive layouts
- Project category filtering
- CV download slot
- Contact form integration point
- Honeypot anti-spam field + browser validation
- Semantic HTML, metadata, Open Graph basics
- Lazy-loaded project images and minimal dependencies
- Accessible focus states and skip link

## Activate the contact form
1. Create a form at Formspree (or another form backend).
2. Replace `https://formspree.io/f/YOUR_FORM_ID` in `index.html` with your endpoint.
3. Replace `chosen@example.com` with your real email.
4. Replace the demo CV file with your actual PDF.
5. The project cards now use your uploaded work photos, cropped and enhanced for the portfolio.

## Security note
The static site includes a honeypot field, validation and no secrets in client-side JavaScript. A real backend should additionally apply rate limiting, server-side validation, spam protection and safe handling of submitted data.

## Deploy
Upload the folder to GitHub Pages, Netlify, Vercel or another static host.
