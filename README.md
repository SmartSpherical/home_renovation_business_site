HomeWorks — Home Renovation & HVAC (Heat Pump) Focus

Quick start

- Open the site locally: Open `index.html` in your browser.
- Deploy: This is a static site — upload the folder to any static host (Netlify, Vercel, GitHub Pages).

What I added

- `index.html` — modern responsive homepage with hero, services, heat-pump focused content, testimonials, and a contact form.
- `css/styles.css` — responsive styles and components.
- `js/main.js` — small JS for form handling and nav toggle.
- `assets/` — place for images and logos.

Next steps (optional)

- Add high-quality photos to `assets/` and update the hero visual.
- Connect the contact form to a backend or form provider (Formspree, Netlify Forms).
- Add SEO metadata, structured data, and analytics.
- Create a `pages/` folder for About, Projects, and Pricing pages.

Formspree setup

- Create a free Formspree account and add a new form to get a form ID (looks like `f/abc123xy`).
- In `index.html` replace the placeholder action URL `https://formspree.io/f/your_form_id` with your real Formspree endpoint.
- Alternatively, put your form ID into `js/main.js` by replacing `https://formspree.io/f/your_form_id` with the endpoint provided by Formspree.
- Formspree accepts JSON submissions; the site already uses `fetch()` to POST JSON so no further changes are required.
- To receive email notifications and enable spam protections, follow Formspree's dashboard instructions after creating the form.

Google Forms setup (embed)

- Create a new Google Form at https://forms.google.com with fields you want to collect (name, email, phone, message).
- Click the Send button in Google Forms, choose the embed (< >) option and copy the iframe src. The embedded URL looks like `https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true`.
- In `index.html` replace `FORM_ID` in the iframe src with your form's ID. You can also keep a direct link (already present) to open the form in a new tab.
- Embedding via iframe keeps submissions inside Google Forms and uses Google's spam protections and response collection; no backend required.
- If you prefer to submit directly from the page fields to Google Forms (POST), Google assigns input names like `entry.123456789` — that approach requires mapping your inputs to those entry names and is more error-prone than embedding.

Notes

- I replaced the on-site JSON POST code with a Google Forms embed to keep things simple and reliable. If you want the on-site fields to POST directly to a Google Form endpoint instead, provide the Google Form field entry IDs and I will wire them up.
