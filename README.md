# Khalil Belharir — Personal website

An English-language professional portfolio focused on software engineering, systems and machine learning. Built with semantic HTML, CSS and a small JavaScript enhancement layer. No installation, framework, build step, external font request or runtime dependency is required.

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

The deployment target is the owner's existing Cloudflare Workers Builds integration with the GitHub repository. The production branch is `main`; a push triggers the integration. `wrangler.jsonc` selects the existing `personal-website` Worker and configures the repository root as a static asset directory. The build command can remain empty and the deployment command is `npx wrangler deploy`. No Worker script or new Cloudflare project is required.

`.assetsignore` explicitly permits only the public HTML, CSS, JavaScript, icon assets and header configuration. Git metadata, documentation, local configuration and future unrelated files are excluded from asset uploads. `_headers` configures browser security headers for static responses, including a self-only content security policy and disabled network requests from the page. See [Cloudflare's static asset configuration](https://developers.cloudflare.com/workers/static-assets/binding/) and [header configuration](https://developers.cloudflare.com/workers/static-assets/headers/).

Publish the repository root as a static site. All internal URLs are relative, so the portfolio also works under a path such as `/personal-website/`. There is no build command. Serve `index.html` as the entry point and keep `cv.html`, `styles.css`, `script.js` and `assets/` at their existing relative paths. `.nojekyll` allows direct static hosting on GitHub Pages.

## Maintenance and privacy

Keep all public copy in English, including metadata, accessibility labels, project details, interactive messages and the printable CV. Official company and institution names retain their spelling. Edit public copy in the two HTML files and keep experience dates, availability and technologies consistent between them. Update the email address in both documents together; the clipboard control reads the visible address. Update this README for observable behavior or deployment changes.

No analytics, cookies, local storage, forms, API requests or third-party scripts are used. Email links open the visitor's email application; they do not submit a message automatically. Clipboard permission failures produce a fixed English console warning without personal data, and the page retains a direct email link. No navigation, filtering, copied data or visitor identifiers are logged. Static hosting may produce its own access logs outside this application's control.

## Verification

Check desktop and mobile layouts, keyboard navigation, all section anchors, filters, expandable project details, email links, clipboard success/failure, the printable resume and operation without JavaScript. Check JavaScript syntax with `node --check script.js`. No PowerShell scripts are included.

The initial release was visually checked at desktop, tablet and mobile sizes, including overflow checks at 320, 390, 768 and 1440 pixels. Project category counts (6/4/2), native detail expansion, mobile menu dismissal, Escape handling and clipboard success were verified in the browser. Static checks validated local asset paths, anchor targets, unique IDs, a single primary heading per document and exclusion of grades and private identifiers. The embedded preview browser opened a native print dialog; final PDF pagination should be verified in the recipient's browser. Cloudflare's build check confirmed the initial deployment succeeded.

The English edition translates all public text, including search and social metadata, document language declarations, accessible labels, project-filter announcements and clipboard messages. This copy-only update introduces no new operational flow or external call; existing privacy-safe failure logging remains unchanged.
