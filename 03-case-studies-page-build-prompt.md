# Claude Code Build Prompt — CASE STUDIES PAGE
### syedawais.com rebuild — page 3 of the rebuild

---

## Stack & Setup (already in place)
- **Frontend:** Astro, deployed on Cloudflare Pages (connected to GitHub, auto-deploys on push to main)
- **CMS:** WordPress on Hostinger via WPGraphQL — not needed for this page, it's built directly from the copy below
- **This page is the heaviest on visual proof** — every case study and every system needs an accompanying image

No fixed mockup for this page — same as Services. Design it yourself, professional agency quality, using the Design System below. Match the visual language already established on Home and Services (same colors, type scale, section rhythm, animation style) so all three pages feel like one site.

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

## Images — use placeholders now, real screenshots come later

Every case study and every row in the "Systems We've Built" table needs an image. **None of the real screenshots exist yet** — use placeholder images for all of them, built so they're trivially easy to find and swap out later.

**How to build the placeholders:**
- Use `https://placehold.co/` images sized appropriately per placement (e.g. `800x500` for case study feature images, `600x400` for the systems grid cards), styled to match the brand: dark background `0B0D1A`, lime text `C6FF3D` — e.g. `https://placehold.co/800x500/0B0D1A/C6FF3D?text=Hainan+Corporate+—+Pipeline+View`.
- Label each placeholder with what the REAL screenshot should eventually show, taken directly from the `[SCREENSHOT: ...]` notes in the copy below (e.g. "Webinar dashboard — auto-updating date, registration count, attendance tracking").
- Structure every image as its own component/include with a clear, consistent naming pattern (e.g. `case-study-1-image`, `system-webinar-image`) so swapping in a real file later is a one-line change, not a rebuild.
- Add an HTML comment above each placeholder `<img>` in the source noting exactly what real screenshot needs to go there — this page will get real images dropped in section by section later, so make it obvious where each one goes.

---

## Copy — use this exactly, do not rewrite or paraphrase (except the `[SCREENSHOT: ...]` notes — those become placeholder images, not literal text)

# syedawais.com — CASE STUDIES PAGE COPY
### The Break-Proof Build System

**Meta title:** Case Studies — Real GHL Systems, Real Results | The Break-Proof Build System
**Meta description:** Systems currently running for real businesses — real pipelines, real numbers, real screenshots.

---

## Hero

**Kicker:** REAL SYSTEMS, REAL RESULTS

**H1:** Not portfolio pieces. Systems that are still running.

**Subhead:** Every case study here is something currently in use — not a project that got handed off and forgotten the day it launched.

---

## Work History

**Kicker:** WHERE THIS EXPERIENCE COMES FROM

**H2:** Not a portfolio built overnight. Ongoing, active work.

**Growth Director — Meta Ads, GHL Automation & AI Systems**
Hainan Corporate Services Group · Sep 2025–Present
Directing the growth engine for a B2B firm. Meta Ads campaigns, GoHighLevel CRM and automation systems, AI-powered workflows that turn ad clicks into booked calls.

**Marketing Director — Meta Ads, GoHighLevel CRM & Local SEO**
Hainan Apex Traders · Dec 2020–Present
Running the full growth engine for an international import/export company. Ads bring leads in, the GoHighLevel system makes sure none of them slip through.

**Local SEO & Lead Generation Specialist**
Home Services Businesses · Jan 2019–Present
Helped 20+ U.S. home-service businesses improve local search visibility and turn Google traffic into calls, bookings, and qualified inquiries.

**Freelance GoHighLevel & AI Automation Consultant**
Independent · Jan 2024–Present
GoHighLevel CRM builds, workflow automation, Meta Ads integration, AI chatbot and voice agent deployment, email/SMS deliverability optimization. 15+ systems built across home services, coaching, consulting, and trades.

---

## Case Study 1: Hainan Corporate Services Group

**Kicker:** GROWTH DIRECTOR — B2B, INTERNATIONAL CLIENTS · SEP 2025–PRESENT

**The situation:**
Hainan Corporate Services Group helps international clients set up and run businesses in China. The acquisition side needed to work as one connected system, not separate pieces someone had to manually stitch together.

**What's running now:**
5 pipelines built inside GoHighLevel, fed directly by Meta Ads campaigns, with AI-powered workflows moving leads through qualification and follow-up without anyone manually pushing them along.

**Result:** $1M in leads sitting in pipeline every month, at a 10% on-paper conversion rate — from Meta Ads alone.

---

## Case Study 2: Hainan Apex Traders

**Kicker:** MARKETING DIRECTOR — INTERNATIONAL IMPORT/EXPORT · DEC 2020–PRESENT

**The situation:**
An international import/export company bringing in leads every month through paid ads and cold outreach — but with no system to guarantee any of them actually got followed up on before they went cold.

**What's running now:**
3 pipelines in GoHighLevel, fed from two different sources — paid ads and cold outreach — with an AI chatbot handling qualification and booking, and automated follow-up making sure nothing sits untouched.

**Result:** $500K in pipeline from ads, $200K in pipeline from cold outreach. 30% conversion rate from the funnel. 40% more bookings since the AI chatbot went live.

---

## Case Study 3: Nationwide RV

**Kicker:** FUNNELS & AUTOMATION — GOOGLE ADS AT SCALE

**The situation:**
Leads were coming in through Google Ads, but with no automation system built around them and no reliable tracking to confirm which campaigns were actually producing results.

**What was built:**
Funnels and a full automation system handling up to $70K in Google Ad spend worth of leads — fully automated to match their specific pipeline, with UTM parameters correctly configured through Google Analytics and Google Tag Manager, so every lead traces back to the exact campaign that produced it.

**Result:** Handles up to $70K in Google Ad spend leads, fully automated, with clean attribution from ad click to pipeline stage.

---

## Case Study 4: Local SEO — Home Services

**Kicker:** LOCAL SEO & LEAD GENERATION · JAN 2019–PRESENT

**The situation:**
U.S. home-service businesses that were hard to find in local search — showing up nowhere when the people looking for their exact service went looking.

**What's running now:**
Google Business Profile optimization, citation building, on-page SEO, and 20+ pipelines built across clients — every one connecting organic search traffic straight through to a tracked booking, not just a ranking number in a report nobody reads.

**Result:** 20+ pipelines generating more than $10M in leads sitting in pipeline, converting above industry-standard rates — because the system was built to create sales, not just look active.

---

## Systems We've Built (Visual Proof)

**Kicker:** SEE THE SYSTEMS

**H2:** Not just described. Shown.

**Body:** Every system below is a real build, currently running. Screenshots are the actual dashboards, workflows, and automations — not stock images.

| System | Screenshot | What it does |
|---|---|---|
| **Automated Webinar System** | `[SCREENSHOT: webinar dashboard — auto-updating date, registration count, attendance tracking]` | Fully self-running — dates roll forward automatically, leads get reported, attendance gets tracked, with zero manual moving parts. Built 2-3 times for different clients. |
| **Lead Recovery System** | `[SCREENSHOT: recovery workflow / re-engagement sequence]` | Catches leads that went cold and re-engages them automatically instead of letting them sit untouched. |
| **Revenue Recovery System** | `[SCREENSHOT: recovered-revenue tracking view]` | Identifies revenue about to be lost — abandoned bookings, unpaid invoices, stalled deals — and automatically works to recover it. |
| **Dead Lead Revival System** | `[SCREENSHOT: revival workflow / reactivated leads]` | Goes back through leads marked "dead" and re-opens the ones still worth pursuing, automatically. |
| **Missed Call Text-Back System** | `[SCREENSHOT: automation trigger + text log]` | The second a call is missed, a text goes out automatically — the lead hears back before they've set the phone down. |
| **AI Chatbot** | `[SCREENSHOT: chatbot conversation flow]` | Answers, qualifies, and books directly inside GHL — not a bolted-on widget nobody clicks. |
| **AI Voice Agents** | `[SCREENSHOT: call log / voice agent config]` | Handles calls and follow-up by voice automatically, including no-show recovery. |
| **n8n Automation Agents** | `[SCREENSHOT: n8n workflow canvas]` | Custom agents that read data, make decisions, and take action across connected systems. |
| **24/7 Lead Capture** | `[SCREENSHOT: capture form + instant CRM entry]` | Every lead gets caught the moment they show up — day or night. |
| **Zero-Chaos CRM Cleanup** | `[SCREENSHOT: before/after pipeline view]` | Untangles a messy, duplicate-filled CRM into something usable. |
| **Zero-Touch Lead Import** | `[SCREENSHOT: import automation]` | Existing leads get imported and organized automatically — no manual data entry. |
| **Email/SMS Deliverability Fix** | `[SCREENSHOT: SPF/DKIM/DMARC setup or deliverability report]` | Fixes messages that were silently failing to arrive. |
| **Local Visibility System** | `[SCREENSHOT: Google Business Profile / rankings]` | Google Business Profile, citations, and reviews connected to actual lead tracking. |

*(This list keeps growing — every new system built gets added here, screenshot and all.)*

---

## Closing CTA

**H2:** Want to see what this looks like for your business?

**Body:** Book a free 30-minute call. We'll look at what you have running now and show you what a system like this would actually look like for you.

**CTA:** Book Your Free Call →

---

## Still Open
- 13 screenshots needed for the Systems We've Built table (webinar system first, as the template example)
- Home page case studies section still needs Nationwide RV's fabricated stats (500+ leads/month, 99% accuracy) replaced with the real numbers now confirmed here

---

## Build Instructions
1. Design every section yourself — professional, polished, best-in-class quality — using the Design System tokens above, visually consistent with Home and Services.
2. Use the copy verbatim. The four numbered Case Studies should each get a real feature layout (image + situation + what's running now + result as a stat callout), not a plain text block.
3. **"Systems We've Built" is the visual centerpiece of this page** — do NOT render it as a plain markdown table. Build it as a showcase grid/gallery: 13 cards, each with its placeholder image, system name, and one-line description. This is the section to spend the most animation effort on:
   - Staggered entrance as the grid scrolls into view
   - Hover state that lifts the card and reveals slightly more detail or a subtle zoom on the image
   - Consider a lightbox/expand-on-click interaction for viewing each image larger, since these will be real dashboard screenshots once swapped in
   - Keep the grid responsive — 3-4 columns desktop, 1 column mobile, no cramped text
4. Add smooth scroll-triggered reveals throughout, consistent with Home and Services. Respect `prefers-reduced-motion`. Keep JS minimal — isolated islands or vanilla script, no framework-wide hydration. A lightbox interaction is a reasonable place for a small script island if needed.
5. Do not fabricate any numbers, client names, dates, or results beyond exactly what's written in the copy above.

## Flag for the user before this page goes live
All 13 system screenshots and all 4 case study images are placeholders and need to be replaced with real screenshots before launch — the webinar dashboard was mentioned as the one to prioritize first, as the template example for how the rest should look once swapped in.
