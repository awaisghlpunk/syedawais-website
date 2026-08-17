# Claude Code Build Prompt — SERVICES PAGE
### syedawais.com rebuild — page 2 of the rebuild

---

## Stack & Setup (already in place)
- **Frontend:** Astro, deployed on Cloudflare Pages (connected to GitHub, auto-deploys on push to main)
- **CMS:** WordPress on Hostinger — blog/case study content pulled via WPGraphQL
- **This page is static content** — no CMS data needed for Services itself, it's built directly from the copy below

There is no fixed mockup for this page. Design it yourself, at a professional, top-tier agency standard, using the Design System below as your guardrails — same approach as the Home page build. Match the Home page's visual language (colors, typography, section rhythm, animation style) so the two pages feel like the same site, not two different designers.

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

## Copy — use this exactly, do not rewrite or paraphrase

# syedawais.com — SERVICES PAGE COPY
### The Break-Proof Build System
*(v2 — restructured with a throughline connecting each group, instead of flat stacked headers)*

**Meta title:** GHL Systems, AI Agents & Automation | The Break-Proof Build System
**Meta description:** GoHighLevel systems, custom AI agents, and automation built to work together — not sold as a menu of separate services.

---

## Hero

**Kicker:** WHAT WE BUILD

**H1:**
This isn't a menu. It's one system, in pieces.

**Subhead:**
Most agencies hand you a services page like a restaurant menu — pick three, pay per item, hope they work together. Ours don't get built that way. The AI agent that qualifies your lead reads the same data as the CRM that tagged it and the ad that sent it. Pull one piece out and the others still work — but they work better together, because that's how they were built.

**Throughline intro:**
Every system starts the same place every business does: leads have to actually land somewhere and get tracked. That's the foundation everything else gets built on.

---

## Group 1: The Foundation

**GoHighLevel Systems — The Backbone**
Not a snapshot with your logo pasted over someone else's pipeline. Every field, every tag, every stage gets built around the actual questions your sales process asks — and then gets run against real leads, not a demo contact named "Test Test," before it's called done.

**Meta Ads Management — The Fuel**
A lead clicks your ad, and by the time they've finished filling out the form, the CRM already knows which campaign sent them, which ad set, which creative. Not "tagged eventually" — tagged at the moment of arrival.

**A2P 10DLC & Email Deliverability**
The part almost nobody checks until it's already cost them leads. Your text goes out, GHL logs it as sent, and it dies quietly on T-Mobile's network because nobody registered the number. We register it, set up SPF/DKIM/DMARC, and check that the message actually landed — not just that it left.

**Transition:**
A foundation that just captures leads isn't enough on its own — leads still need someone, or something, working them the second they arrive. That's where the AI layer comes in.

---

## Group 2: AI Automation & Agents

**n8n & Workflow Automation**
Built and tested against messy real data before you ever see it — a lead with a typo in their email, a duplicate submission, a form filled out at 2am from a phone with bad reception. If it survives that, it survives your actual customers.

**Custom AI Agents**
Not a chatbot widget bolted onto your website. An agent with API access into your actual systems — reading real data, making a real decision, taking a real action, the same way a team member would if you had one sitting there at midnight.

**AI Lead Generation Portals**
A portal that goes and finds leads matching your specific market, qualifies them against criteria you set, and hands you a list — instead of a generic scraper spitting out anyone with a pulse and a LinkedIn profile.

**AI Media Buyer Agent**
Opens your ad account, reads the spend and performance data a human media buyer would normally spend an hour digging through, and surfaces what's actually working — before your budget's already spent on what isn't.

**AI-Automated Sales Briefing System**
Before your sales call starts, the system's already pulled the lead's source, their history, every touchpoint — so you walk in already knowing them, instead of asking "so, remind me what you're looking for?"

**AI Client Onboarding Portals**
Replaces the ten-email back-and-forth of "did you get the contract," "here's the intake form," "did you upload your logo yet" with one portal that walks the client through it themselves.

**Transition:**
One build in this group deserves its own spotlight, because it's the clearest example of what "automated" is actually supposed to mean — not a nicer-looking manual process, a system that runs itself.

---

## Featured System

**Kicker:** THE SIGNATURE BUILD

**H2:** The Automated Webinar System

**Body:**
Most "webinar automation" is a replay video and a countdown timer someone resets by hand every week. This one updates its own date. It reports its own leads. It tracks who actually showed up versus who registered and vanished — all without anyone opening a spreadsheet to check. Once it's live, it runs the way a webinar is supposed to run: without you.

**CTA:** See How This Works →

**Transition:**
Foundation and automation get leads captured and worked. The last piece is making sure they're found in the first place, and that everything they see along the way actually converts.

---

## Group 3: Growth & Visibility

**Local SEO**
Your business shows up when someone searches for it — and that search result is tied back to an actual booked call, not just a ranking number in a report nobody reads.

**Sales Funnels & Landing Pages**
Built to do one thing: move the visitor to the next step. Tested on the phone screen it'll actually be viewed on, not just a desktop preview.

**Website Design**
Fast enough that Google notices, and built for the search terms that actually bring in your customers — not a template with the logo swapped.

---

## Packages

**Kicker:** THREE WAYS TO START

**H2:** Pick the tier that matches what your business needs handled right now.

### GHL Ignition Sprint — $350
**For:** Solopreneurs and small businesses just getting into GHL.

**What's included:**
- 1 pipeline, fully tagged and organized
- 1 funnel + 1 form
- 3 core automations
- Email deliverability set up correctly (SPF, DKIM, DMARC)
- 1 Loom walkthrough, so you know how it works

**Delivery:** 5 days · **Support:** 7 days of email support after launch

*(Not yet confirmed by user — pulled from the data pack, unlike the other two tiers below.)*

---

### GHL Growth Engine — $1,200
**For:** Agencies and growing businesses that need more than the basics.

**What's included:**
- 1 pipeline, with every workflow needed to cover the full lead lifecycle — first stage to last, including lead recovery
- Complete GHL setup and integrations
- Full booking system, including no-show workflows
- A GHL chatbot for instant lead response
- Full testing — checked against real data, not a demo
- Complete system documentation
- Team-guided Loom walkthroughs
- 1 funnel + forms

*(No Meta Pixel or ad campaign setup in this tier — that's covered separately or in Command Center.)*

**Delivery:** Milestone-based, typically within a month · **Support:** 30 days of monitoring and fixes after launch

---

### GHL Command Center — $3,500
**For:** Established businesses ready to go all-in.

**What's included:**
- AI-powered Sales Briefing Agents — your sales team walks into every meeting already knowing the lead
- 3 pipelines, more if your business needs them
- Automations built for each pipeline's stages — not one generic sequence stretched across everything
- Full Meta Ads setup, including lead generation running through Meta Ads
- The full path covered: lead in, all the way to a meeting actually booked on your sales team's calendar — built around your specific sales cycle, not a generic one
- Social account integration with posting schedules
- Unlimited automations
- AI chatbot and voice agents
- The automated webinar system — fully self-running, dates and reporting included
- Multi-platform integrations
- Team training, not just owner training
- The System Bible + SOPs + full team onboarding

**Delivery:** Milestone-based, typically within a month · **Support:** 60 days of monitoring with priority response

---

**Line under all three:**
Every tier gets the same three guarantees. What changes is scope — not whether it's backed up.

**Add-ons available separately:** AI Booking Booster (chatbot + voice agents), Meta Ads Lead Engine setup, ongoing Meta Ads management, GHL Deliverability Fix, and the Automated Webinar System as a standalone add-on if you're not on Command Center.

---

## Closing CTA

**H2:** Not sure what you actually need?

**Body:** Book a free 30-minute call and tell us what's actually going on. We'll tell you honestly what fits — even if that's one piece of this, not all of it.

**CTA:** Book Your Free Call →

---

## Still Open
- Confirm Ignition Sprint's inclusion list is accurate (still pulled from the data pack, not yet corrected like Growth Engine and Command Center were)
- Featured System CTA "See How This Works" — link target not yet defined

---

## Build Instructions
1. Design every section yourself — professional, polished, best-in-class quality — using the Design System tokens above. Keep it visually consistent with the Home page (same color system, type scale, section texture variety, button styles).
2. Use the copy above verbatim, section by section, in the order given. Don't rewrite or paraphrase it.
3. The three Packages (Ignition Sprint, Growth Engine, Command Center) should read as clearly tiered pricing cards — Command Center should visually read as the premium/most-complete option without gimmicks (no fake "most popular" badge unless asked for).
4. Add smooth animations consistent with Home — scroll-triggered reveals, hover states on package cards and service items, a satisfying entrance for the Featured System (Automated Webinar System) section since it's meant to be a spotlight moment on the page. Respect `prefers-reduced-motion`. Keep JS minimal — isolated islands or vanilla script only, no framework-wide hydration.
5. The Featured System's CTA ("See How This Works") has no defined link target yet — make it a styled button/link but point it at a placeholder anchor (e.g. `#webinar-system-details`) rather than leaving it broken or removing it.
6. Do not fabricate any numbers, pricing, or inclusions beyond exactly what's written in the copy above.

## Flag for the user before this page goes live
The Ignition Sprint tier's ($350) inclusion list is still unconfirmed — it was pulled from an internal data pack, not yet verified the way Growth Engine and Command Center were. Build the page with it as-is for now, but this needs a final confirmation pass before launch.
