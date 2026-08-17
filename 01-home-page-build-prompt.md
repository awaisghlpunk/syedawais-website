# Claude Code Build Prompt — HOME PAGE
### syedawais.com rebuild — build this page first

---

## Stack & Setup (already in place)
- **Frontend:** Astro
- **Hosting:** Cloudflare Pages, connected to a GitHub repo (auto-deploys on push to main)
- **CMS:** WordPress, hosted on Hostinger — blog and case study content pulled in via WPGraphQL (installed, Application Password generated, CORS headers added via the Code Snippets plugin)
- **Forms:** Contact Form 7 (existing form, shortcode/ID to be wired in)
- **Booking:** Calendly — this page will be built but kept unlinked from nav/site (no public link yet)

This page (Home) doubles as the main sales page — full nav, full case studies section included. It is NOT an ad-specific funnel page; those are a separate, later project.

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

-e 
---

## 5. VERIFIED DATA — USE ONLY THESE NUMBERS

This matters more than it might seem. Earlier in this session, several case study numbers got fabricated during drafting (a "5x growth," an invented client called "Nationwide RV" with fake stats, and other numbers with no source). They were caught by cross-checking every claim against the actual uploaded source files, then corrected with the real numbers below. **Do not reintroduce the old fabricated numbers if referencing earlier chat history — these are the corrected, real ones:**

**Verified employment history:**
- Growth Director — Meta Ads, GHL Automation & AI Systems, Hainan Corporate Services Group, Sep 2025–Present
- Marketing Director — Meta Ads, GoHighLevel CRM & Local SEO, Hainan Apex Traders, Dec 2020–Present
- Local SEO & Lead Generation Specialist, Home Services Businesses, Jan 2019–Present
- Freelance GoHighLevel & AI Automation Consultant, Independent, Jan 2024–Present

**Verified case study numbers:**
- **Hainan Corporate Services Group:** 5 pipelines, $1M/month in pipeline from Meta Ads, 10% on-paper conversion rate
- **Hainan Apex Traders:** 3 pipelines, $500K in pipeline from ads, $200K from cold outreach, 30% conversion rate from funnel, 40% more bookings from AI chatbot
- **Nationwide RV:** Funnels + automation system handling up to $70K in Google Ad spend leads, fully automated to pipeline, UTM tracking via GA + GTM
- **Local SEO:** 20+ pipelines, $10M+ in leads in pipeline, above-industry conversion rates, 20+ businesses served

**Verified track record stats (About page):**
- 20+ websites built · 15+ GHL systems built · 20+ sites ranked #1 · 20+ businesses served · 2.5M+ impressions · 35,000+ clicks

**Verified education:** BSc Mechanical Engineering, NFC-IEFR (UET Lahore), CGPA 3.43, 2019–2023

**Verified proof point used site-wide:** 50% more bookings from AI chatbot/voice agent no-show recovery, on a live system.

---


---

## Reference Mockup (hero only — use as literal spec)
- `hero-mockup.html` — standalone hero section, real CSS. Recreate this section's structure and CSS as-is; don't reinterpret it.

**For every section after the hero, do NOT follow a fixed mockup.** Design it yourself, at a professional, top-tier agency standard — this is intentional creative room, not a gap to guess at. Use the Design System section above (colors, typography, section textures, layout pattern variety) as the guardrails, and build within them, but make your own calls on spacing, composition, and detail polish.

**Add smooth animations throughout** — scroll-triggered reveals (fade/slide-up as sections enter viewport), subtle hover states on cards and buttons, smooth easing on the marquee ticker, a polished transition on the timeline nodes in the System section, staggered entrance on the Testimonials cards. Keep it tasteful and fast, not gimmicky — animations should make the page feel premium and considered, never slow down perceived load time or fight the zero-JS-by-default spirit of Astro (use lightweight CSS transitions/animations and IntersectionObserver-based reveals over heavy JS animation libraries where possible).

---

## Copy — use this exactly, do not rewrite or paraphrase

# syedawais.com — HOME PAGE COPY
### The Break-Proof Build System
*(v2 — full edit pass complete: dimensionalized, claims verified, staccam removed)*

---

## 1. Hero

**Kicker:** THE BREAK-PROOF BUILD SYSTEM

**H1:**
Your GoHighLevel should be booking calls right now.
Instead, it's *losing them.*

**Subhead:**
A lead fills out your form at 11pm. GHL shows the workflow completed. Nobody follows up until Monday — and by then, they've already booked with whoever called them back first.

**CTA:** Show me what's leaking → | See how it's fixed

**Proof strip:**
50% More bookings, live system · 15+ GHL builds delivered · 0 Manual follow-up

---

## 2. Problem (Agitation)

**Kicker:** WHY GOOD ADS STILL LOSE

**H2:** The leak isn't your ad spend. It's everything after the click.

Your Meta ad works. The click happens. The form gets filled out. Then the lead enters GoHighLevel — and that's where things go quiet. A workflow marked "active" that's actually misfiring. An SMS that never left the carrier's network. An email that landed in spam. A follow-up sequence quietly broken since week two.

None of this throws an error. You just see fewer booked calls than the lead count should produce — and assume the ads stopped working.

**Three failure modes:**
1. **"Sent" doesn't mean delivered.** T-Mobile silently blocks unregistered SMS — no bounce, no alert, just a message that never arrives.
2. **A CRM full of untagged leads.** You can't tell which ad, which campaign, actually produced a booked call.
3. **Built once, tested never.** Automations built against a clean demo, then left running against data they were never checked against.

**Transition:** This is exactly why "just get more leads" doesn't fix it. More leads into the same leaking system is just a bigger leak.

---

## 3. The System

**Kicker:** THE BREAK-PROOF BUILD SYSTEM

**H2:** One connected system. Nothing falls through a seam.

**1. Meta Ads — Fuel**
The click happens, and before the visitor's even finished typing their phone number, the pixel's already told the CRM which ad sent them. Not tagged later during a weekly report — tagged the second they arrive.

**2. GoHighLevel — Backbone**
Not a template pipeline with your logo pasted over someone else's stages. Built around the actual questions your sales process asks, then run against fifty real leads with typos, duplicates, and 2am submissions — before it's ever called finished.

**3. AI Automation — The Weapon**
A lead comes in at midnight. Nobody's awake. The system already qualified them, texted back, and put a slot on the calendar before the sun came up — the exact layer that pushed one live system's bookings up 50%.

**4. System Bible — What You Keep**
Every workflow has a recorded walkthrough next to it, in plain language. Six months from now, when the person who built it isn't the person you're asking, the answer is already written down.

**Transition:** Every build here gets tested against real data before handoff — and backed by three guarantees.

---

## 4. Guarantees

**Kicker:** BUILT TO NOT BREAK

**H2:** Three promises that come with every system.

**1. If it breaks, we fix it fast.**
Something stops working within 30 days, and you didn't touch it — it's fixed free. Within 4 hours. Not "we'll get to it Monday."

**2. You get the full instructions.**
Every system ships with written instructions and video walkthroughs. You could explain your own system to a stranger in plain English — because you'll actually understand it.

**3. It has to save you real time.**
Not saving 10+ hours a week within 30 days? We keep refining it until it does — at no extra cost, because "close enough" isn't the deal we made.

---

## 5. Case Studies

**Kicker:** REAL SYSTEMS, REAL RESULTS

**H2:** Here's what this looked like before we touched it.

**Hainan Corporate Services Group**
Every lead this company got came through a WhatsApp number one person checked when they remembered to. No CRM meant no way to know if a lead ever got a reply, or just quietly disappeared. We built 5 pipelines inside GoHighLevel, fed directly by Meta Ads, with AI-powered workflows moving leads through qualification and follow-up automatically.
**Result:** $1M in leads sitting in pipeline every month, at a 10% on-paper conversion rate — from Meta Ads alone.

**Hainan Apex Traders**
Leads came in through paid ads and cold outreach, but nothing guaranteed any of them actually got followed up on before they went cold. We built 3 pipelines, an AI chatbot handling qualification and booking, and automated follow-up so nothing sits untouched.
**Result:** $500K in pipeline from ads, $200K from cold outreach. 30% conversion rate from the funnel. 40% more bookings since the chatbot went live.

**Nationwide RV**
Leads were coming in through Google Ads with no automation system built around them and no reliable way to trace which campaigns actually worked. We built funnels and a full automation system, fully matched to their pipeline, with UTM tracking wired through Google Analytics and Tag Manager.
**Result:** Handles up to $70K in Google Ad spend leads, fully automated, with clean attribution from click to pipeline stage.

**Local SEO — Home Services**
Searched for, and found nowhere. A customer looking for exactly what these businesses sold would scroll past them without knowing they existed. We built a repeatable local SEO system and ran it across 20+ businesses.
**Result:** 20+ pipelines generating more than $10M in leads in pipeline, converting above industry-standard rates.

---

## 6. Why This System Is Different

**Kicker:** WHAT MAKES THIS DIFFERENT

**H2:** Most GHL builds are the same template with your logo swapped on top.

It looks finished in the demo. Then your business does something the template never accounted for — a lead who reschedules twice, a form submitted in two languages — and it quietly stops working, with nobody watching closely enough to notice for weeks.

Here's what's different about how this gets built:
- Tested against real, messy data before you ever see it — not a clean demo that only works once, on purpose.
- Error handling on every automation. If something fails, you get an alert — it doesn't just fail silently into a lead you'll never know you lost.
- AI built into the system itself, answering and qualifying leads — not a chatbot bubble in the corner that nobody clicks.
- Everything written down, so the system doesn't live only in one person's memory.

**Transition:** This is what "done right" actually looks like. Not a demo. A system still working after the invoice is six months old.

---

## 6.5 The System Wall

**Kicker:** SEE THE SYSTEMS

**H2:** Every system we build, still running somewhere right now.

| System | What it actually does |
|---|---|
| 24/7 Lead Capture | Catches the lead that fills out your form at 3am, same as the one at 3pm |
| Instant Follow-Up | Texts back before the lead's even closed the tab |
| Never-Miss-A-Call | A missed call gets a text reply before the caller's set the phone down |
| AI Booking System | Qualifies and books the call without anyone touching a calendar |
| No-Show Recovery | A missed appointment gets a follow-up before it becomes a lost customer |
| Deliverability Fix | The text that used to vanish now actually arrives |
| Zero-Chaos CRM | The duplicate contact that used to confuse your team gets merged automatically |
| Local Visibility System | The customer searching for you at 9pm actually finds you |

*(Each card links to the matching Case Study.)*

---

## 6.6 The Owner

**Kicker:** WHO'S ACTUALLY BUILDING THIS
*(Photo: black and white, positioned to one side)*

Every system on this site was built by one person — not handed off between five people you'll never meet. The background's in mechanical engineering, and it shows up in how these get built: an engineer doesn't ship a part that works on the bench and hope it holds up in the field. It gets tested under load first.

50+ businesses. Home services, coaching, real estate, B2B. Every system documented well enough that the client could run it without ever calling back.

**Credit line:** Mechanical Engineering background · Building GHL systems since 2019

---

## 6.7 Testimonials (compact)

**Kicker:** WHAT CLIENTS SAY

**H2:** Don't take our word for it.

> "[Client quote about a specific result and reliability]"
> — Name, Business, Industry

> "[Client quote about communication and follow-through]"
> — Name, Business, Industry

> "[Client quote about the system still working months later]"
> — Name, Business, Industry

**Link:** See All Testimonials →

---

## 7. Closing CTA

**Kicker:** LET'S LOOK AT YOUR SYSTEM

**H2:** Tell us what's going on. The messier, the better.

Book a free 30-minute call. We'll look at what you have running right now and show you exactly where leads are slipping through — free, whether or not you move forward after.

**CTA:** Book Your Free Call →
**Trust line:** No pressure. No sales script. Just a clear look at what's working and what isn't.

---

## Still Open
- Testimonial quotes are placeholders — need real ones
- Case study numbers are now verified against confirmed figures (fixed — previously had fabricated/placeholder data)

---

## Build Instructions
1. Recreate `hero-mockup.html`'s structure and CSS as-is for the hero section. For every section after that, design it yourself — professional, polished, best-in-class agency quality — using the Design System tokens and layout pattern variety above as your guardrails, not a fixed template.
2. Drop in the copy above verbatim, section by section, in the order given. Don't rewrite or paraphrase it.
3. Owner photo section: no real photo uploaded yet — use a clearly marked gray placeholder box (black & white / grayscale treatment once the real photo is dropped in).
4. Testimonial quotes are placeholders — keep the placeholder bracket text as-is, don't invent real-sounding quotes.
5. Respect the mobile responsiveness rules above exactly — this broke once before (topbar stacking, section padding, timeline connectors, stat-row wrapping) and shouldn't regress.
6. Keep JS minimal — this is Astro, ship close to zero JS by default. Any interactivity (e.g. mobile nav toggle, scroll-reveal animations) should be an isolated island or vanilla script, not a framework-wide hydration.
7. Animations should degrade gracefully — respect `prefers-reduced-motion`, and nothing should block or delay content from being visible/readable if JS is slow to load.
8. Do not fabricate any numbers, client names, or stats beyond what's in the Verified Data section and the copy above.
