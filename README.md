# Khalil Belharir — Personal website

A French-language professional portfolio focused on software engineering, systems and machine learning. Built with semantic HTML, CSS and a small JavaScript enhancement layer. No installation, framework, build step, external font request or runtime dependency is required.

## Preview

Open `index.html` directly, or serve the repository with a local static HTTP server. With Python installed:

```console
python -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173/`. `cv.html` is a separate, printable resume. Its print button uses the browser's print dialog, which can save a PDF; this does not upload any information. Printing is also available through the browser without JavaScript.

## Content and structure

- `index.html`: profile, professional experience, six academic projects, education, languages and email contact.
- `cv.html`: a concise resume, without grades, rankings or transcript attachments.
- `styles.css`: responsive layouts, accessible focus states, reduced-motion support and A4 resume print styles.
- `script.js`: mobile navigation, project filters, optional clipboard copying and resume printing.
- `assets/favicon.svg`: local monogram icon.

The page content is intentionally present in HTML. With JavaScript disabled, navigation, project details, email links and all profile information remain usable; enhancement-only controls are hidden. Project details use native `details` elements. Project filtering announces the result count to assistive technology. The mobile menu supports Escape and keeps its expanded state synchronized.

The portfolio is based on the CVs and academic documents supplied by its owner. Recent CVs take precedence over older inconsistent dates: Amazon is June–September 2025, the Sorbonne licence year is 2022–2023, and Ensimag is listed as 2023–2026 without an unverified exact graduation date. Academic projects and employer work are clearly distinguished. The Amazon efficiency figure concerns test-resource creation and deletion time only. No personal address, telephone number, student identifier, grades, ranking or original source document is published.

## Hosting

The deployment target is the owner's existing Cloudflare integration with the GitHub repository. For Cloudflare Pages, choose no framework, leave the build command empty and use the repository root (`/`) as the build output directory. The production branch is `main`. A push to that branch triggers the existing integration. `_headers` configures browser security headers on Cloudflare Pages, including a self-only content security policy and disabled network requests from the page. No new Cloudflare project is required by this repository.

Publish the repository root as a static site. All internal URLs are relative, so the portfolio also works under a path such as `/personal-website/`. There is no build command. Serve `index.html` as the entry point and keep `cv.html`, `styles.css`, `script.js` and `assets/` at their existing relative paths. `.nojekyll` allows direct static hosting on GitHub Pages.

## Maintenance and privacy

Edit public copy in the two HTML files and keep experience dates, availability and technologies consistent between them. Update the email address in both documents together; the clipboard control reads the visible address. Update this README for observable behavior or deployment changes.

No analytics, cookies, local storage, forms, API requests or third-party scripts are used. Email links open the visitor's email application; they do not submit a message automatically. Clipboard permission failures produce a fixed English console warning without personal data, and the page retains a direct email link. No navigation, filtering, copied data or visitor identifiers are logged. Static hosting may produce its own access logs outside this application's control.

## Verification

Check desktop and mobile layouts, keyboard navigation, all section anchors, filters, expandable project details, email links, clipboard success/failure, the printable resume and operation without JavaScript. Check JavaScript syntax with `node --check script.js`. No PowerShell scripts are included.
