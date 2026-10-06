# Khalil Belharir — Personal website

An English-language professional portfolio focused on software engineering, systems and machine learning. Built with semantic HTML, CSS and a small JavaScript enhancement layer. No framework, build step, external fonts or runtime dependencies are required.

## Preview

Open `index.html` directly, or serve the repository with a local static HTTP server:

```console
python -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173/`. Main-page CV links open the supplied PDF directly. The contact section also offers a download link. The browser's PDF viewer handles viewing, printing and saving. `cv.html` remains a small landing page for existing bookmarks, with view and download links that work without JavaScript.

## Content and structure

- `index.html`: profile, professional experience, six academic projects, education, languages and email contact.
- `assets/Khalil-Belharir-CV.pdf`: a byte-for-byte copy of the owner's supplied `CV_G.pdf`.
- `cv.html`: a PDF access page, replacing the previously generated HTML resume.
- `styles.css`: responsive layouts, accessible focus states and reduced-motion support.
- `script.js`: mobile navigation, project filters and optional clipboard copying.
- `assets/favicon.svg`: local monogram icon.

Page content is present in HTML. With JavaScript disabled, navigation, project details, PDF access and email links remain usable. Enhancement-only controls are hidden. Project details use native `details` elements. Project filtering announces the result count to assistive technology. The mobile menu supports Escape and keeps its expanded state synchronized.

The website narrative uses the more recent CVs where dates differ: Amazon is June–September 2025, the Sorbonne licence year is 2022–2023, and Ensimag is listed as 2023–2026 without an exact graduation date. Academic projects and employer work are clearly distinguished. The Amazon efficiency figure concerns test-resource creation and deletion time only.

The owner explicitly requested publication of the supplied PDF unchanged, including its contact details, academic results and original dates. The portfolio HTML does not repeat those grades or rankings. The PDF must not be silently edited or redacted. Academic transcripts are not published.

## Hosting

The owner's existing Cloudflare Workers Builds integration deploys `main` on each push. `wrangler.jsonc` selects the existing `personal-website` Worker and the repository root as its static asset directory. The build command can remain empty; the deployment command is `npx wrangler deploy`. No Worker script or new Cloudflare project is required.

`.assetsignore` permits the public HTML, CSS, JavaScript, header configuration and files under `assets/`, including the CV PDF. Git metadata, documentation and other local files are excluded. `_headers` supplies browser security headers. See [static asset configuration](https://developers.cloudflare.com/workers/static-assets/binding/) and [header configuration](https://developers.cloudflare.com/workers/static-assets/headers/).

All internal URLs are relative. Publish `index.html`, `cv.html`, `styles.css`, `script.js` and `assets/` with their existing relative paths. `.nojekyll` also supports direct static hosting on GitHub Pages.

## Maintenance and privacy

Keep public copy in English, including metadata, accessibility labels, project details and interactive messages. Official names retain their spelling. Edit website copy in `index.html`; replace the PDF with an owner-approved document when updating the CV. Keep the public PDF filename stable, or update all five view/download links in both HTML files.

The email address is public in both the website and PDF. Updating or removing it from the HTML does not change the PDF. The same applies to other details included in the PDF. Changing the published contact information requires a corresponding, owner-approved PDF revision.

No analytics, cookies, local storage, forms, APIs or third-party scripts are used. Email links open the visitor's email application without sending automatically. Clipboard permission failures produce a fixed English console warning without personal data. No visitor identifiers, navigation, downloaded content or clipboard data are logged. Static hosting may produce its own access logs.

PDF viewing and downloading use native links, adding no application API calls or runtime state. The original HTML print handler has been removed. No new application log events are needed for this static navigation change; existing clipboard failure logging remains unchanged.

## Verification

Check responsive layouts, navigation, project filters and clipboard controls when relevant. Check JavaScript syntax with `node --check script.js`. No PowerShell scripts are included.

For CV updates, compare the published PDF's SHA-256 digest against the owner-approved source, check that it parses and renders, verify all five PDF links and their local file target, and verify the Cloudflare deployment status. The PDF has its own layout; the old generated resume is no longer the published CV.
