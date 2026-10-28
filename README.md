# WEDE-POE-Repo
My repository for my web development POE

**SITEMAP**
<img width="2720" height="800" alt="baked_by_sihle_sitemap" src="https://github.com/user-attachments/assets/c99aefb0-d6f4-408b-8eaf-2406661e7218" />
# Baked By Sihle – Website Project

## Student Information
- **Name:** Siphesihle Dlamini
- **Module:** Web Development (Introduction) – WEDE5020
- **Live Website Link:**https://bakedbysihle.netlify.app]

---

## Project Overview
Baked By Sihle is a family-owned artisan bakery established in 2023. This website serves as our digital storefront, showcasing our fresh sourdough, pastries, and custom cakes. The site allows customers to browse our menu, learn about our baking process, and easily send enquiries for custom celebration cakes. It is built using HTML5, CSS3, and Vanilla JavaScript.

## Website Goals and Objectives
- Showcase our daily baked goods and seasonal specials.
- Establish a strong, community-focused brand presence online.
- Provide a seamless way for customers to enquire about custom cakes.
- **KPIs:** Number of custom cake enquiries, time spent on the products page, and local delivery orders.

## Key Features and Functionality
- **5 Pages:** Home, About, Products, Enquiry, Contact.
- **Responsive Design:** Adapts to desktop, tablet, and mobile using CSS Grid, Flexbox, and media queries.
- **Semantic HTML5:** Uses `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- **Interactive Elements (JavaScript):** 
  - Accordion for baking secrets (About page).
  - Real-time product search filter (Products page).
  - Image Lightbox popup (Products page).
- **Interactive Map:** Leaflet.js map with custom markers for our Johannesburg and Polokwane locations (Contact page).
- **Form Validation:** Custom JavaScript validation with inline error messages and simulated AJAX responses (Enquiry & Contact pages).
- **SEO:** Meta descriptions, keywords, and titles on all pages. Includes `robots.txt` and `sitemap.xml`.

## Timeline and Milestones
| Phase | Weeks | Tasks |
|-------|-------|-------|
| Part 1 | 1–2 | Proposals, research, basic HTML structure, GitHub setup |
| Part 2 | 3–4 | External CSS, styling, responsive design, media queries |
| Part 3 | 5–6 | JavaScript interactivity, Leaflet map, SEO, form validation, deployment |

---

## Feedback Implementation (Crucial for Marks)

### Part 2 Feedback Fixed (For Part 3 Submission)
After receiving my Part 2 marks, I carefully reviewed the lecturer's feedback and made the following fixes to ensure a perfect score for Part 3:

1. **Layout Structure (Fixed):** 
   - *Feedback:* "Layout structure is incomplete or incorrect. Elements are positioned, but there are significant issues with alignment or spacing."
   - *Fix:* I fixed the broken `<ul>` list in `products.html` by wrapping each product in a `<div class="product-card">`. I then applied **CSS Grid** to make the products align perfectly in 1, 2, or 3 columns depending on the screen size. I also used CSS Grid for the Contact page to separate the form and the map cleanly.
2. **External Stylesheet Implemented Correctly (Fixed):**
   - *Feedback:* "External stylesheet created but not implemented correctly in all pages."
   - *Fix:* I realized I had `target="_blank"` on all my internal navigation links, which forced pages to open in new tabs. I removed this so the website flows correctly on one tab.
3. **Pseudo-Classes (Fixed):**
   - *Feedback:* "Pseudo-classes are used correctly but could be improved."
   - *Fix:* I added comprehensive `:hover`, `:focus`, and `:active` states to the navigation links, buttons, and input fields so users get clear visual feedback when interacting with the site.
4. **Media Queries & Typography (Fixed):**
   - *Feedback:* "Typography adjustments are present but could be improved."
   - *Fix:* I added specific `@media` breakpoints for tablets (768px) and desktops (1024px). I also used `rem` units to scale the `h1`, `h2`, and `h3` tags so the text doesn't look too big on mobile phones.

---

## Changelog (Record of Development)

### Part 1 – Initial Development
- **2026-08-10:** Created project folder structure (`index.html`, `about.html`, `products.html`, `enquiry.html`, `contact.html`, `css/`, `images/`, `js/`).
- **2026-08-11:** Added semantic HTML structure to all pages, navigation, and content.
- **2026-08-12:** Added images, logo placeholder, and social media links.
- **2026-08-13:** Set up GitHub repository and pushed initial code. Added README.md.

### Part 2 – CSS Styling & Initial Fixes
- **2026-09-01:** Reviewed Part 1 feedback. Added phone number fields to forms and fixed social media links.
- **2026-09-04:** Created `css/style.css` with CSS reset, base styles, and the warm bakery-themed colour scheme.
- **2026-09-05:** Applied Flexbox layout to header and navigation.
- **2026-09-06:** Implemented `@media` queries for mobile, tablet, and desktop.

### Part 3 – Part 2 Fixes, JavaScript, SEO & Deployment
- **2026-09-15:** **Fixed Part 2 Feedback:** Removed `target="_blank"` from internal links and fixed the broken `<ul>` layout on the Products page using CSS Grid.
- **2026-09-16:** **Fixed Part 2 Feedback:** Added comprehensive `:hover` and `:focus` pseudo-classes to buttons and input fields.
- **2026-09-17:** Added `js/script.js` and implemented the interactive Accordion (About page).
- **2026-09-18:** Implemented the Search Filter and Lightbox gallery features on the Products page.
- **2026-09-19:** Replaced the static Google Maps iframes with an interactive Leaflet.js map containing two custom markers.
- **2026-09-20:** Wrote custom JavaScript validation for the Enquiry and Contact forms. Added inline red error messages and simulated AJAX responses to prevent page reloads.
- **2026-09-21:** Added SEO meta tags (`description`, `keywords`) to the `<head>` of all 5 HTML pages. Created `robots.txt` and `sitemap.xml`.
- **2026-09-22:** Deployed the final website to Netlify. Updated the README with the live link and final Harvard references.

---

## References
- Google. (2026). *Search Engine Optimization (SEO) Starter Guide*. [Online]. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 21 September 2026).
- Leaflet. (2026). *Leaflet - a JavaScript library for interactive maps*. [Online]. Available at: https://leafletjs.com/ (Accessed: 19 September 2026).
- MDN Web Docs. (2026). *Client-side form validation*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation (Accessed: 20 September 2026).
- Netlify. (2026). *Deploy your website*. [Online]. Available at: https://www.netlify.com/ (Accessed: 22 September 2026).
- Unsplash. (2026). *Free High-Resolution Bakery Images*. [Online]. Available at: https://unsplash.com/s/photos/bakery (Accessed: 10 August 2026).
- W3Schools. (2026). *How To - CSS Accordion*. [Online]. Available at: https://www.w3schools.com/howto/howto_js_accordion.asp (Accessed: 17 September 2026).
- W3Schools. (2026). *How To - Lightbox*. [Online]. Available at: https://www.w3schools.com/howto/howto_js_lightbox.asp (Accessed: 18 September 2026).
- The Independent Institute of Education. (2026). *WEDE5020 Module Guide*. IIE.
