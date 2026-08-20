# System context — syedawais.com

The single source of truth for what this site is, how it is built, and the
rules it holds itself to. Read this before changing anything.

---

## 1. What this is

A rebuild of **syedawais.com**, the site for a one-person operation building
GoHighLevel systems, Meta Ads and AI automation for businesses.

The positioning is **The Break-Proof Build System**: systems that are tested
against real, messy data before handoff, documented well enough that the
client can run them, and still working months after the invoice.

### The goal

Book qualified 30-minute calls. Every page is a funnel toward `#book`, and
every section carries a CTA moving the reader to the next step. The site
sells one thing, competence you can verify, so **provable claims matter more
than polish**. That constraint drives most of the rules below.

### Who it talks to

Business owners who already spend on ads and already have a CRM, and who are
losing leads somewhere between the two without knowing where. The copy leads
with the leak, not with services.

---

## 2. Stack

| Piece | Choice |
|---|---|
| Framework | Astro (static output) |
| Hosting | Cloudflare Pages, auto-deploys on push to `main` |
| CMS | WordPress on Hostinger via WPGraphQL, for blog/case-study content later. **Not used by any page currently built** |
| Repo | `github.com/awaisghlpunk/syedawais-website` |
| Fonts | Space Grotesk (display), Inter (body), JetBrains Mono (data), via Google Fonts |

```bash
npm run dev      # localhost:4321
npm run build    # static output to dist/
```

---

## 3. Pages

| Page | Route | Source brief |
|---|---|---|
| Home | `/` | `01-home-page-build-prompt.md` |
| Services | `/services` | `02-services-page-build-prompt.md` |
| Case Studies | `/case-studies` | `03-case-studies-page-build-prompt.md` |
| About | `/about` | `04-about-page-build-prompt.md` |
| Contact | `/contact` | `05-contact-page-build-prompt.md` |
| Not found | `/404` | n/a |

All share `BaseLayout`, `SiteHeader`, `SiteFooter` and `PageClosing`.

Every booking CTA on the site routes to `/contact#contact-form`. There is no
public calendar link, deliberately. If one is ever published, that is a
sitewide change, not a single-page one.

---

## 4. Hard rules

These are not preferences. Breaking one is a defect.

### Copy is verbatim
Text comes from the build-prompt documents exactly as written. Do not
rewrite, paraphrase, or tighten it. The one sanctioned edit is the em dash
rule below.

### No em dashes
The client considers them a tell of machine-written copy. Every `—` and `–`
is replaced with a comma, colon or full stop. **The verification scripts
assert zero survive.**

### Never fabricate
No invented numbers, prices, inclusions, client names or dates. Everything
traces to the copy documents or the verified data set. Two figures were
caught fabricated earlier (`500+ leads/month`, `99% accuracy` on Nationwide
RV) and are now blocked by the checkers.

### Logos assert a tool was used
A vendor mark only appears where that section's own copy names the product.
Several sections say "AI" without naming a vendor, so **no Claude, OpenAI or
n8n mark appears on them**. Putting a logo on a client build claims that
tool ran on that account.

All marks are drawn by hand in `ToolMark.astro` and `SectionWatermark.astro`,
not taken from vendor asset files. They are approximations in the right
colours. Swap in official SVGs if licence allows.

### Zero JavaScript bundles
`dist` must contain **0 `.js` files**. Everything is CSS: scroll reveals use
one inline observer in the layout, the mobile menu is a checkbox, the
lightbox is `:target`, the counters are stepped odometers.

### Motion is optional
Everything respects `prefers-reduced-motion`. Reveals are gated behind a
`.js` class set before first paint, so with JS off the page renders fully
visible rather than blank.

---

## 5. Design system

```css
--bg: #0B0D1A;        --bg-alt: #0F1220;      --bg-alt2: #10131F;
--ink: #FFFFFF;       --ink-soft: #C7C9D6;    --ink-body: #B9BCCC;
--ink-mute: #9DA1B6;  --ink-faint: #868BA2;
--accent: #C6FF3D;    --accent-ink: #0B0C14;  --accent-text: (accent, darker on light)
--line: rgba(255,255,255,0.08);
--card: rgba(255,255,255,0.055);  --card-line: rgba(255,255,255,0.14);
```

### Deviations from the original design document

The briefs describe an earlier state. Where the built site differs, the
built site is correct and this is why:

- **Two light sections exist.** The document says all-dark. Guarantees and
  System Wall are "lime mist" (`#EBF1DD`), requested for contrast. Light
  sections re-point every ink/card token via `.section--light`.
- **Ink tokens were raised.** The document's `--ink-mute` and `--ink-faint`
  measured 3.18 and 2.16 against the lightest achievable background, both
  below WCAG AA.
- **Case Studies dropped the alternating left/right rows** on Home. That
  pattern forced a floating stat card that left a large empty band; it is now
  full-width blocks with a divided stat strip.
- **Section padding is 104px, not 130px.** Top and bottom stacked to 260px of
  dead space between sections.

### Section backgrounds

Each section layers, in paint order: pattern → depth vignette → accent glow →
lime puff → **feather last**. The feather paints the section colour over the
top and bottom edges; painting it last is what stops glows being clipped
square at section boundaries.

Patterns are anchored to one corner and fade out before reaching the copy.
They are never a uniform field. Pattern alphas are low enough that text is
readable directly on top, because a scrim cannot protect text in a tall
section.

Sections hand off colour only on the **bottom** edge, so consecutive sections
meet on an identical value and the seam disappears.

---

## 6. Images

Every image on Case Studies is a placeholder. `PlaceholderImage.astro` emits
an HTML comment in the built output naming the exact screenshot needed, and
carries a stable id.

**To swap in a real screenshot:** drop the file in `public/screenshots/` and
pass `src="/screenshots/file.png"`. Nothing else changes.

Currently waiting: **4 case study images, 13 systems grid images** (each also
rendered large in its lightbox). The webinar dashboard is the priority, it is
the template for how the rest should look.

---

## 7. Contact details

Defined once in `src/data/contact.ts` and imported by the Contact page, the
footer and the JSON-LD. Changing a number or address is one edit.

| | |
|---|---|
| Email | `info@syedawais.com`, linked as `mailto:` |
| WhatsApp | `+1 (276) 301-9673`, linked as `https://wa.me/12763019673` |

`wa.me` requires the number as digits only, so the URL is derived from the
E.164 form rather than typed separately: the two cannot drift apart.

---

## 8. SEO and crawling

`site` in `astro.config.mjs` is the production origin. Canonical URLs, Open
Graph URLs and the sitemap are all derived from it, so **changing domain
means changing that one line and nothing else**.

- Canonical on every page, with a trailing slash to match the sitemap. The
  two disagreeing on the same page is worse than either form alone.
- Open Graph and Twitter card tags, pointing at `public/og.png` (1200x630).
  Regenerate that card with `scratchpad/ogimage.py` if the headline changes.
- JSON-LD `@graph`: WebSite, Organization, Person, WebPage. Only facts that
  appear in the copy documents. No invented founding date, address, phone or
  rating, and no contact details while those are still placeholders.
- `sitemap-index.xml` via `@astrojs/sitemap`, and `robots.txt` pointing at it.
- A styled 404 that keeps the header, footer and full navigation.

Known trade-offs, not oversights:

- **Titles run long.** Three exceed the ~60 characters Google displays. They
  are the copy documents' meta titles verbatim.
- **H1s are hooks, not keywords.** The titles carry the search terms instead.
- **Google Fonts is render-blocking** from two external hosts. Self-hosting
  would improve LCP.
- **`placehold.co` serves the Case Studies images.** That page depends on a
  third party to render until real screenshots land.

## 9. Verification

Each page has a checker that reads the built HTML and asserts the copy
matches the brief, no em dashes survive, and no fabricated figures appear.
Case Studies also counts the placeholder scaffolding.

Run after `npm run build`. These are the reason copy drift gets caught
instead of shipping.

---

## 10. Open items

- **Ignition Sprint ($350) inclusions are unconfirmed**, pulled from an
  internal data pack rather than verified like the other two tiers. The card
  carries this caveat visibly. Needs a confirmation pass before launch.
- **All 17 Case Studies images are placeholders.**
- **Testimonials on Home are bracket placeholders**, awaiting real quotes.
- **System Wall card links** map each card to a case study; that mapping is
  inferred, not specified.
- **Google Business Profile marks** on the local SEO sections are inferred
  from the work described, not named in copy.
- **Featured System CTA** points at `#webinar-system-details`, a placeholder
  anchor. No target defined yet.
- **Contact form cannot submit.** No CF7 form ID, so an inline script tells
  the visitor it is not connected instead of failing silently. Delete that
  script once CF7 is wired.
- **Calendly is not wired.** Every booking CTA points at the contact form.

### Blocking launch

The dead form, plus the placeholder images and testimonials, are visible to
any real visitor. Email and WhatsApp are now live, so a prospect can at
least reach someone, but a contact page whose form silently does nothing is
still worse than no form.
