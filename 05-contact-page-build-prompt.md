# Claude Code Build Prompt — CONTACT PAGE
### syedawais.com rebuild — page 5 of the rebuild

---

## Stack & Setup (already in place)
- **Frontend:** Astro, deployed on Cloudflare Pages (connected to GitHub, auto-deploys on push to main)
- **CMS:** WordPress on Hostinger via WPGraphQL — not needed for this page
- **Form:** Contact Form 7 — an existing form already exists on the WordPress install. Submit via CF7's built-in REST endpoint (`/wp-json/contact-form-7/v1/contact-forms/{FORM_ID}/feedback`, POST). The actual numeric Form ID still needs to be provided — use a clearly marked placeholder constant (e.g. `const CF7_FORM_ID = "REPLACE_ME"`) at the top of the form component so it's a one-line fix once known.

No fixed mockup — design it yourself, professional agency quality, using the Design System below, visually consistent with the rest of the site.

---

## 3. DESIGN SYSTEM

**Theme:** Fully dark — this was tested against a light/dark split and explicitly reverted back to all-dark per final decision. No light sections anywhere on the site.

**Color tokens:**
```css
--bg: #0B0D1A;          /* primary dark background */
--bg-alt: #0F1220;      /* alternate dark background, for section rhythm */
--bg-alt2: #10131F;     /* used in System Wall icon-grid cells */
--ink: #FFFFFF;         /* primary text */
--ink-soft: #C7C9D6;    /* body text */
--ink-mute: #8A8CA0;    /* secondary/supporting text */
--ink-faint: #6E7080;   /* labels, captions */
--line: rgba(255,255,255,0.08);   /* borders/dividers */
--accent: #C6FF3D;      /* lime — the single accent color, used sparingly */
--accent-ink: #0B0C14;  /* text color ON TOP of lime backgrounds */
--card: rgba(255,255,255,0.035);
--card-line: rgba(255,255,255,0.09);
```

**Typography:**
- Display/headings: **Space Grotesk** (weight 500)
- Body: **Inter**
- Data/mono (proof numbers, stats): **JetBrains Mono**

**Hero background:** Diagonal gradient `linear-gradient(115deg, #060608 0%, #0B0D1A 45%, #131A3A 88%, #0F1220 100%)` — the final stop matches `--bg-alt` exactly so it dissolves into the next section instead of cutting off with a hard seam.

**Section background textures — each section gets ONE distinct texture, confined to a small corner patch (never crossing into the text area):**
- `.tex-dots` — dot pattern (Problem, Why Different)
- `.tex-diag` — diagonal line pattern (System, Testimonials)
- `.tex-grid` — grid/graph pattern (Guarantees, System Wall)
- `.tex-glow` — soft color glow only, no lines (Case Studies, Owner)

Textures are masked with `radial-gradient(circle [size]px at var(--tex-pos), black 0%, transparent 100%)` so they fade to nothing well before reaching the headline/body text. This was a real bug earlier — grid lines were originally crossing directly through headline text — fixed by confining every texture to a corner and keeping the text-heavy top-left area of every section completely blank.

**Section-to-section flow:** No hard divider lines between sections (removed `border-bottom` — it made the page look like "stacked bricks" instead of one continuous scroll). Rhythm comes only from alternating `--bg` / `--bg-alt`.

**Layout patterns per section type (deliberately varied, not the same card-grid repeated):**
- Problem → stacked list rows with X-icon markers
- System (the 4-part flow) → horizontal connected timeline with circle nodes and a connecting line
- Guarantees → 3-card grid (the one section that intentionally repeats the card pattern, for emphasis)
- Case Studies → alternating left/right rows, text + stat-box, flipping order each row
- Why Different → plain checklist, no cards at all
- System Wall → edge-to-edge icon grid, no card gaps (services-style)
- Owner → photo + text split, photo desaturated (grayscale filter)
- Testimonials → staggered/rotated cards with slight offset for depth

**Marquee ticker:** Scrolling infinite-loop bar directly below the hero, before the Problem section — dark navy background, lime dot separators, looping key proof points (CSS `@keyframes marquee { to { transform: translateX(-50%); } }`, content duplicated once in the DOM for a seamless loop).

**Mobile responsiveness (critical — this broke once already and had to be fixed):**
- Topbar must stack vertically under 600px, not stay in one row
- Section padding must drop substantially on mobile (was 130px desktop → 64px mobile)
- Heading sizes need explicit mobile overrides, not just relying on `clamp()` minimums
- Timeline connector lines must hide once the grid wraps to 2 columns (900px), not just at the smallest breakpoint
- Stat rows (case study numbers + labels) need `flex-wrap` so they don't fight for space on narrow screens

**Reference files from this session (attached/available):**
- `hero-mockup.html` — standalone hero section, real CSS, no build tools needed
- `home-page-mockup.html` — full home page, all sections, mobile-responsive, latest version with per-section textures and Rule-of-One-respecting layouts

---


---

## Important structural change from the copy below — read before building

The copy draft below was written with the calendar embed as the Hero's primary, headline action. **Don't build it that way.** Per a later decision: the Calendly booking widget should NOT be embedded on this public Contact page right now — it's being held back deliberately so the Contact Form becomes the primary, qualifying way people reach out, instead of anyone being able to grab a call slot immediately. A separate, unlinked booking page will be built later when it's time to make that live; it's not part of this page.

So for this build:
- **Hero section:** keep the H1, subhead, and trust line from the copy — but replace "[Calendar embed goes here]" with nothing (remove that placeholder entirely). The Hero should lead straight into the Contact Form below it, not a calendar.
- **Contact Form section:** this becomes the primary, prominent action on the page — build it as the visual centerpiece, not a secondary block underneath a calendar.
- **Every "Book Your Free Call" CTA on this page** (Closing Line, etc.) should link to the Contact Form section on this same page (smooth-scroll anchor), not to an external calendar link, since there isn't a public calendar link yet.

---

## Copy — use this exactly, do not rewrite or paraphrase (except the Hero calendar placement noted above)

# syedawais.com — CONTACT PAGE COPY
### The Break-Proof Build System

**Meta title:** Contact — Book a Free Strategy Call | The Break-Proof Build System
**Meta description:** Tell us what's going on with your GHL setup, ads, or automation — 30-minute call, free, no pressure.

---

## Hero

**Kicker:** LET'S LOOK AT YOUR SYSTEM

**H1:**
Tell us what's going on. The messier, the better.

**Subhead:**
Book a free 30-minute call. We'll look at what you have running right now — your ads, your CRM, your follow-up — and show you exactly where leads are slipping through. If you don't move forward after that, the call still cost you nothing.

**[Calendar embed goes here]**

**Trust line below the calendar:**
No pressure. No sales script. Just a clear look at what's working and what isn't.

---

## Contact Form

**[FORM — built with Contact Form 7 (WordPress plugin), embedded here]**

Suggested fields:
- Name
- Email
- Phone (optional)
- Business name
- Current GHL setup? (Yes / No / Not sure)
- What's going on? (open text — "the messier, the better")
- Preferred contact method (Call / Email / WhatsApp)

**Form submit button label:** Send It →

*(Note: exact field list and CF7 shortcode/embed to be finalized during the actual build — this is the content-side spec Claude Code will implement against.)*

---

## Other Ways to Reach Out

**Kicker:** PREFER SOMETHING ELSE?

**Body:** If a call isn't the right first step for you, here's how else to get in touch:

- **Email:** `[email address]`
- **WhatsApp:** `[number]`
- **Response time:** Usually within a few hours, always within one business day

---

## Quick Answers Before You Reach Out

**Kicker:** BEFORE YOU BOOK

**H2:** Common questions, answered up front.

**Is the call actually free?**
Yes. No credit card, no catch. If it's not a fit, you'll hear that directly, not a sales pitch dressed up as a diagnosis.

**What should I have ready?**
Nothing required — but if you can log into your GHL account or pull up your ad account during the call, we can look at the actual system together instead of talking in the abstract.

**What if I'm not sure GHL is even the right tool for me?**
That's a completely reasonable thing to bring to the call. Part of the point of the 30 minutes is figuring out what actually fits — not assuming the answer before we've looked.

**Do you work with businesses outside coaching, home services, or trades?**
Yes. Those are where most of the case studies on this site come from, but they're not the only businesses this works for. Anything outside that core lane gets routed through a dedicated process for evaluating fit first — because a system built for a home-service business doesn't just copy-paste onto a completely different sales cycle. If that's you, the call is exactly where we figure out whether it's a fit before anything gets built.

---

## Closing Line

Book the call, or send a message. Either way, tell us what's actually going on — the real picture, not the polished version.

**CTA:** Book Your Free Call →

---

## Still Open
- CF7 field list above is a suggestion — confirm final fields before build
- Email address and WhatsApp number need to be filled in
- Calendar embed tool/link not yet specified (Calendly, GHL native calendar, etc.)

---

## Build Instructions
1. Design every section yourself — professional, polished, best-in-class quality — using the Design System tokens above, visually consistent with the rest of the site.
2. Build the Contact Form 7 fields exactly as listed in the copy's "Suggested fields" list. Style it as a real, polished form component — not a bare unstyled HTML form.
3. Use placeholders for the email address and WhatsApp number in "Other Ways to Reach Out" — clearly marked (e.g. `[EMAIL PLACEHOLDER]`, `[WHATSAPP PLACEHOLDER]`) so they're easy to find and fill in.
4. "Quick Answers Before You Reach Out" should be a clean FAQ/accordion component, not a wall of Q&A text.
5. Add smooth animations consistent with the rest of the site — form field focus states, a satisfying submit interaction, scroll-triggered reveals. Respect `prefers-reduced-motion`. Keep JS minimal — isolated islands or vanilla script, no framework-wide hydration (the form submission handler is a reasonable place for a small script island).
6. Do not fabricate any contact details, response times, or claims beyond exactly what's written in the copy above.

## Flag for the user before this page goes live
- The CF7 Form ID is still a placeholder — needed to make the form actually submit.
- Email address and WhatsApp number are placeholders — need to be filled in.
- The Calendly booking widget was intentionally left off this page per the "hold it back for now" decision — if that changes, this page (and the sitewide "Book Your Free Call" CTAs currently pointing here) would need updating to point at the calendar instead.
