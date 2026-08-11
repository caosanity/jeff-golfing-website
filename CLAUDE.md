# CLAUDE.md — Jeff Golfing Website

Project instructions for building a personal website for **Jeff**, a golf content creator. The site has **two pages**: a **Media Kit** (for brand collabs) and a **Links page** (link-in-bio style landing page). Design is inspired by a reference media kit — soft, editorial, and stats-driven, with a fresh green accent on a warm cream background. **The site must be mobile-first**: most visitors will land on it from an Instagram/TikTok bio link on their phone, so every page should be designed for a narrow viewport first, then enhanced for desktop.

---

## 1. Creator Info

- **Name:** Jeff Golfing
- **Location / niche:** Golf content creator
- **Instagram:** [@jeffgolfing](https://www.instagram.com/jeffgolfing)
- **TikTok:** [@jeffgolfing](https://www.tiktok.com/@jeffgolfing)
- **Bio (short, for links page):** e.g. "Golf content, lessons learned, and the gear I actually use ⛳️"
- **Bio (longer, for media kit):** e.g. "Sharing my golf journey — lessons learned, course fits, and product discoveries."
- **Collab email:** placeholder, e.g. `jeffgolfing@gmail.com` (swap in real address)

> Note: follower counts, engagement %, avg views/likes, audience demographics, and partner logos are all placeholder data until real analytics are provided. Mark them clearly as sample data in code comments.

---

## 2. Pages

### Page A — Media Kit (`/media-kit`)

**Single column, full-width on mobile** (the default, primary layout). On larger screens (`md:` breakpoint and up) it upgrades to a two-column layout: a sticky profile card on the left and a scrollable insights column on the right. Build the mobile stacked version first, then add the desktop two-column grid on top.

**Profile card (top of page on mobile / sticky left column on desktop):**
- Circular profile photo
- "MEDIA KIT" eyebrow label (small, uppercase, green, letter-spaced)
- Name (large, bold)
- Location · niche subtitle (gray)
- Short bio paragraph (centered, muted gray)
- "Contact for collabs" pill button (solid green, white text, rounded-full, full-width on mobile so it's easy to tap)

**Insights column (stacks below profile card on mobile):**

1. **Insights & Data** section header (green eyebrow label)
   - **Instagram card:** platform icon + handle, then a stat grid — **2 columns on mobile, 4 columns on desktop**: Followers, Avg engagement (with info tooltip icon), Avg views, Avg likes
   - **TikTok card:** same stat grid structure
   - Each stat card: light gray rounded box, small label on top, large bold number below, sized so text never overflows at 320–375px viewport widths
   - Cards have a soft decorative color blob in the bottom-right corner (light green for Instagram, teal/mint for TikTok)

2. **Audience** section (green-tinted rounded container)
   - **Gender card:** donut/gauge chart (semi-circle) + legend with % for Men / Women
   - **Age card:** horizontal bar rows for age brackets (18–24, 25–34, 35–44, 45–54, 55+), each with a label, a horizontal progress bar, and a right-aligned percentage
   - Gender and Age cards **stack vertically on mobile**, sit side-by-side on desktop

3. **Partners** section
   - Row of brand/partner logos, grayscale-friendly. On mobile, wrap into 2 logos per row or let it scroll horizontally; on desktop, spread evenly across the full width.

4. **Featured Posts** section
   - Filter pill tabs: All / Products / Play / Personality / Places — horizontally scrollable on mobile (no wrapping/crowding), active tab filled black, inactive tabs outlined gray
   - Post thumbnail grid: **2 columns on mobile, 3 columns on desktop**
   - Each thumbnail has two small pill badges top-left/top-right: platform (Instagram/TikTok) and category (Products/Play/etc.)
   - Thumbnails are tall (portrait/reel aspect ratio), with bold overlay text treatment on some (like magazine cover style)

### Page B — Links Page (`/` or `/links`)

Single centered card, linktree-style. This page is **built mobile-first by definition** — it's the destination for an Instagram/TikTok bio link, so it should be designed at a 375px-wide phone viewport first, then simply centered with a max-width on larger screens (max-width ~400px, centered on a cream background).

- Circular profile photo (same as media kit)
- Name (bold, large)
- Short one-line bio with emoji accents
- Stacked list of link buttons, each:
  - White rounded-2xl button, subtle shadow
  - Left: small light-green rounded-square icon badge (platform or section icon)
  - Text: bold title line + smaller gray subtitle line (e.g. handle or description)
  - Full width, generous vertical padding (min ~48px tap target height), tappable on mobile

**Links to include, in this order:**

| Icon (green badge) | Title | Subtitle | URL |
|---|---|---|---|
| Instagram glyph | Instagram | @jeffgolfing | https://www.instagram.com/jeffgolfing |
| TikTok glyph | TikTok | @jeffgolfing | https://www.tiktok.com/@jeffgolfing |
| Sparkle/star glyph | Media kit | Stats, audience, and featured work | links to `/media-kit` |
| Envelope glyph | Collabs | jeffgolfing@gmail.com | `mailto:jeffgolfing@gmail.com` |

This links page is the **new addition** beyond the media kit — it's the "link in bio" landing page a visitor hits first, with the media kit as one of the destinations.

---

## 3. Visual Design System

**Colors**
- Background: warm cream / soft green gradient, e.g. `#F3EFE6` → `#EAF3EA`
- Primary accent (buttons, eyebrow labels, active states): fresh green, e.g. `#2F9E5A` (adjust to taste — a golf-course green rather than neon)
- Secondary accent (charts, subtle highlights): soft sage `#BFE3C7`, teal/mint for TikTok blob `#BFE3DE`
- Card surfaces: white `#FFFFFF`, rounded corners (`rounded-2xl`/`rounded-3xl`), soft drop shadows
- Text: near-black headings `#111111`, muted gray body `#6B6B6B`

**Typography**
- Headings: bold, tight tracking, sans-serif (e.g. Inter, General Sans, or similar)
- Eyebrow labels (INSIGHTS & DATA, MEDIA KIT, PARTNERS, etc.): small, uppercase, letter-spaced, green, bold
- Stat numbers: large, bold, tabular figures — but scale down font size on mobile (`text-2xl` → `text-4xl` at `md:`) so 4-up stat grids don't wrap awkwardly on narrow screens
- Body text: regular weight, comfortable line height, minimum 16px on mobile to avoid iOS auto-zoom on inputs

**Components**
- Pill buttons (solid green, white text, fully rounded, full-width on mobile)
- Stat cards (light gray bg, rounded, label + big number)
- Filter tabs (pill-shaped, active = filled black/dark, inactive = outlined; horizontally scrollable row on mobile with `overflow-x-auto` and no visible scrollbar)
- Platform badges on thumbnails (small dark pill for platform, green pill for category)
- Progress bars for age demographics (thin, rounded, green fill on light gray track)
- Donut/gauge chart for gender split

**Layout — mobile-first rules**
- Design and build every component at a 375px viewport first; add `md:`/`lg:` breakpoints only to enhance, never to fix a broken mobile layout
- Media kit: single column by default → two-column (`md:grid-cols-[360px_1fr]`) only at `md:` and up
- Stat grids: 2 columns on mobile → 4 columns at `md:`
- Featured posts grid: 2 columns on mobile → 3 columns at `md:`
- Filter tabs and partner logos: allow horizontal scroll on mobile rather than wrapping into cramped rows
- All tap targets (buttons, tabs, link cards) at least 44px tall
- Generous whitespace, soft card shadows, no hard borders
- Test at common breakpoints: 375px (small phone), 414px (large phone), 768px (tablet), 1024px+ (desktop)

---

## 4. Suggested Tech Stack

- **Framework:** Next.js (React) or a static site if no dynamic data is needed
- **Styling:** Tailwind CSS (matches the rounded-card, utility-driven aesthetic)
- **Charts:** simple custom SVG for the gender donut and age bars (lightweight, no heavy chart library needed) — or Recharts if more flexibility is wanted later
- **Icons:** lucide-react or simple inline SVGs for Instagram/TikTok/mail/sparkle glyphs
- **Deployment:** Vercel (or any static host)
- **Images:** placeholder profile photo and post thumbnails until real assets are supplied

---

## 5. Build Priorities

1. Scaffold the Links page first (simplest, most useful immediately) — hardcode the Instagram and TikTok URLs above.
2. Build the Media Kit profile card + Instagram/TikTok stat cards with placeholder numbers.
3. Add Audience section (gender + age charts) with placeholder data.
4. Add Partners logo row (placeholder logos or omit until real ones exist).
5. Add Featured Posts grid with filter tabs (placeholder thumbnails/text).
6. Wire "Media kit" link on the Links page to `/media-kit`.
7. Polish responsiveness (mobile-first for Links page, two-column collapse for Media Kit).

---

## 6. Open Questions / Placeholders to Resolve

- Real follower/engagement/view/like numbers for Instagram and TikTok
- Real audience gender/age breakdown
- Real partner/brand logos (or remove section until partnerships exist)
- Real featured post thumbnails and categories
- Final collab email address
- Final one-line bio for Links page vs. longer bio for Media Kit
