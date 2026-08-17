# Claude Code Build Prompt — ABOUT PAGE
### syedawais.com rebuild — page 4 of the rebuild

---

## Stack & Setup (already in place)
- **Frontend:** Astro, deployed on Cloudflare Pages (connected to GitHub, auto-deploys on push to main)
- **CMS:** WordPress on Hostinger via WPGraphQL — not needed for this page, built directly from the copy below

No fixed mockup — design it yourself, professional agency quality, using the Design System below, visually consistent with Home, Services, and Case Studies (same colors, type scale, section rhythm, animation style).

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

## Owner Photo — placeholder for now

The real photo hasn't been provided yet. Use a placeholder in both spots the copy calls for it (Hero and The Owner section): `https://placehold.co/600x750/0B0D1A/C6FF3D?text=Owner+Photo+%28B%26W%29`. Style the placeholder's container exactly as the real photo should sit — positioned to one side, ready to go black-and-white via CSS `filter: grayscale(100%)` the moment a real file is dropped in. Note this in an HTML comment above each placeholder so swapping it later is obvious.

---

## Copy — use this exactly, do not rewrite or paraphrase

# syedawais.com — ABOUT PAGE COPY
### The Break-Proof Build System

**Meta title:** About — The Break-Proof Build System
**Meta description:** GoHighLevel systems, AI automation, and everything behind them — who's actually building this and why the systems get built the way they do.

---

## Hero

**Kicker:** WHO'S ACTUALLY BUILDING THIS

**H1:**
From mechanical engineering to systems that don't break.

**Subhead:**
Every system on this site was built by one person, not a team you'll never talk to. The engineering background is why these systems get built the way they do.

**[ OWNER PHOTO — black and white, positioned to one side. Placeholder until real file is provided. ]**

---

## The Owner

**Kicker:** WHO'S BEHIND THE BREAK-PROOF BUILD SYSTEM

**[ OWNER PHOTO — black and white, one side of this section ]**

**Body (other side of the split):**
Every system on this site is built by one person — not a team you'll never talk to, not a coordinator relaying your requirements down a chain. The background is mechanical engineering, and it shows up directly in how these systems get built: tested under real conditions before they're ever called finished, documented well enough that you're never stuck needing someone else to explain your own system.

Growth Director at Hainan Corporate Services Group. 15+ GHL systems built. 20+ businesses served. Building GHL systems since 2019.

---

## The Story

**Kicker:** WHY ENGINEERING MATTERS HERE

**Body:**
An engineer doesn't ship a part that works on the bench and hope it holds up in the field. It gets tested under load first — checked against the conditions it'll actually face, not just the conditions it was designed for. That's not a coincidence, either: engineering is the single most common background among the world's wealthiest people, more than business, finance, or any other individual field. The same instinct that makes someone good at building things that hold up under real conditions is what makes them good at building wealth that holds up too.

That's the same thinking behind every GoHighLevel system built here. A workflow that only works in a clean demo isn't finished — it's untested. Every build gets checked against real, messy data before it's ever called done: the lead with a typo in their email, the form filled out at 2am, the duplicate submission that would trip up a system that was only ever tested once, on purpose, with clean inputs.

That mindset is also why documentation isn't an afterthought here. An engineer hands off drawings, not a black box. Every system ships with the same thing — written instructions, recorded walkthroughs, and a client who actually understands what they're running, instead of being stuck needing someone else to explain it.

---

## My Journey

**Kicker:** THE STORY BEHIND THE SYSTEMS

**Timeline:**

**2019–2023 — Mechanical Engineering**
BSc from NFC-IEFR (UET Lahore). CGPA 3.43. Built the analytical foundation everything else runs on.

**2019 — Started SEO Journey**
First local SEO clients. Discovered the same structured thinking that makes engineering work also applies to making a business visible in search.

**2020 — Partner, Hainan Apex Traders**
Took ownership of full digital growth — Meta Ads, GoHighLevel CRM, and the systems making sure leads don't disappear.

**2021–2025 — Scaled to 20+ Clients**
Built local SEO systems generating 2.5M+ impressions and 35,000+ clicks across clients.

**2023 — GoHighLevel & CRM Mastery**
Built advanced GHL CRM ecosystems. Started integrating AI directly into automation workflows instead of treating it as a separate tool.

**2024–Present — AI-Powered Growth Systems**
Growth Director at Hainan Corporate Services Group. Freelance GoHighLevel & AI Automation Consultant, independent. 15+ systems built across home services, coaching, consulting, and trades.

---

## AI-First Approach

**Kicker:** AI-FIRST APPROACH

**H2:** I don't just use AI. I build with it.

**Body:** Every system connects AI directly into the CRM pipeline — not as a chatbot bolted on the side, but as the layer that qualifies, follows up, and books, running inside the same system as everything else.

**AI-Powered CRM Systems**
GoHighLevel systems where AI handles lead scoring, follow-up sequencing, appointment booking, and pipeline management.
*Tools: Claude, GPT, GHL, n8n*

**AI Chatbot Development**
Custom chatbots integrated directly into GoHighLevel — qualifying leads, booking appointments, and nurturing prospects without human intervention.
*Tools: ChatGPT, Claude, MiniMax*

**AI Content & Graphics**
Full content pipelines where AI generates blog posts, social content, ad copy, and visual graphics — integrated into automated publishing workflows.
*Tools: Veo 3, Kling AI, Manus*

**AI Funnel Optimization**
Funnels that use AI to personalize copy, test variations, and optimize conversion paths automatically.
*Tools: GHL Funnels, AI Logic, Make.com*

**AI Workflow Automation**
Complex multi-step automations where AI decides the next action based on lead behavior, data patterns, and business rules — no manual intervention needed.
*Tools: n8n, Make.com, GHL, Claude*

**AI Business Intelligence**
Systems that analyze data from Google Analytics, Search Console, and CRM to generate insights, predict trends, and recommend strategic actions.
*Tools: GA4, GSC, AI Analysis*

---

## Track Record

**Kicker:** WHAT'S ACTUALLY BEEN BUILT

**H2:** Real numbers from real systems.

| | |
|---|---|
| **20+** Websites built | **15+** GHL systems built |
| **20+** Sites ranked #1 | **20+** Businesses served |

**Supporting line:** 2.5M+ impressions, 35,000+ clicks generated across local SEO clients.

---

## How I Think About Growth

**Kicker:** PHILOSOPHY

**H2:** Systems over shortcuts.

**Systems Over Tactics**
No chasing hacks. A good system beats a good tactic every time, because a system still works next month.

**AI-First, Always**
AI isn't a bonus feature bolted onto the system after the fact — it's built into how the system works from the start.

**Data Over Opinions**
Every decision is backed by actual data — Search Console, CRM analytics, conversion numbers. Not guesswork dressed up as strategy.

**Visibility to Revenue**
Ranking on Google means nothing if it doesn't convert. The whole pipeline matters — search visibility, CRM capture, automated follow-up, closed revenue.

---

## Closing CTA

**H2:** See what this looks like for your business.

**Body:** Book a free 30-minute call. Tell us what's going on — the messier, the better — and we'll show you what a system built this way would actually look like for you.

**CTA:** Book Your Free Call →

---

## Still Open
- Owner photo not yet uploaded — placeholder in Hero section until real file is provided

---

## Build Instructions
1. Design every section yourself — professional, polished, best-in-class quality — using the Design System tokens above, visually consistent with the other three pages already built.
2. Use the copy verbatim, section by section, in the order given.
3. **My Journey** is a timeline — build it as an actual visual timeline component (connected nodes/line, alternating or single-column depending on what reads best on mobile), not a flat list of dates. Give it a scroll-triggered reveal per node as it enters the viewport.
4. **Track Record** stat grid and **How I Think About Growth** philosophy cards should feel like confident, punchy proof moments — bold numbers, generous whitespace, subtle hover states.
5. Add smooth animations consistent with the rest of the site. Respect `prefers-reduced-motion`. Keep JS minimal — isolated islands or vanilla script, no framework-wide hydration.
6. Do not fabricate any numbers, dates, or credentials beyond exactly what's written in the copy above.

## Flag for the user before this page goes live
The owner photo is still a placeholder in both the Hero and The Owner section — needs the real black-and-white photo dropped in before launch.
