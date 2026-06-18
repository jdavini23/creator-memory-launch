## Creator Memory — Editorial Graphite Landing Page

Build the full landing page as a single TanStack Start route (`src/routes/index.tsx`) replacing the placeholder, using composable section components and the locked Editorial Graphite design tokens.

### Design tokens (verbatim from chosen direction → `src/styles.css`)
- Colors: `--background #121212`, `--foreground #F5F5F0`, `--muted #8E8E8E`, `--accent #E2E2D9` (warm cream), `--border #2A2A28`, `--card #1A1A18`
- Fonts: Lora (display, italic for emphasis), Inter (sans body), JetBrains Mono (eyebrows, meta, microcopy)
- Animations: `fade-up` and `chat-stagger` keyframes + `--ease-out-expo`
- Load Google Fonts via `<link>` in `src/routes/__root.tsx` head (not @import)

### Sections (matching user's brief exactly, not the prototype's placeholder copy)
1. **Hero** — split layout, badge "✨ Early Access Opening Soon", headline *"Your content has a memory now."* (italic "memory" in accent), subhead with Creator Memory positioning, primary "Join the Early Access List" + secondary "See How It Works". Right side: AI chat mock with user question about dad-content + AI response listing 17 newsletters, 43 short-form posts, 5 podcasts, 2 drafts and themes (identity, exhaustion, joy, traditions) with offer to outline newsletter/ebook.
2. **Problem** — heading "You've already created more than you remember." + 3 cards (Forgotten Ideas, Repeating Yourself, Starting From Scratch) with brief copy.
3. **How It Works** — 3 numbered steps with simple line icons (Import / Ask / Create).
4. **Feature Showcase** — 4 premium cards (Search Your Brain, Discover Hidden Projects, Repurpose Content, Weekly Vault Report) in 2x2 hairline grid.
5. **Social Proof** — heading "Built for creators who think in years, not posts." + 6 mono-style badges (Newsletter Writers, Podcasters, Authors, Founder-Creators, Course Builders, Consultants).
6. **Weekly Vault Report** — split section, left text intro, right cream-paper email card with bullet list (3 forgotten articles, 2 unfinished series, 1 ebook, 5 evergreen ideas, 8-month-silent topic) + footer line "Your archive gained value this week."
7. **Vision** — centered italic Lora headline "Your best ideas shouldn't disappear." + body paragraph.
8. **Final CTA** — large centered card, "Stop starting from scratch.", email input + "Join Early Access" button, microcopy "No spam. Just product updates and early invites."
9. **Footer** — Creator Memory wordmark + tagline "Your content has a memory now." + links: Privacy, Contact, X, Email.

### Form behavior (UI only)
- Both email forms (hero + final CTA) use a shared `EarlyAccessForm` component with controlled input + zod validation (trimmed, valid email, max 255) and a success state ("You're on the list. We'll be in touch."). No network call; no Cloud.
- Honor the brief's constraint: no nav links to nonexistent pages — top nav is just the Creator Memory wordmark + a "Join Early Access" anchor that smooth-scrolls to `#join`.

### Component breakdown (`src/components/landing/`)
- `Nav.tsx`, `Hero.tsx`, `ChatMock.tsx`, `Problem.tsx`, `HowItWorks.tsx`, `Features.tsx`, `SocialProof.tsx`, `VaultReport.tsx`, `Vision.tsx`, `FinalCTA.tsx`, `SiteFooter.tsx`, `EarlyAccessForm.tsx`
- Add a small `useFadeInOnScroll` hook (IntersectionObserver) and a `<Reveal>` wrapper for subtle scroll-triggered fade-ups.

### Route + SEO
- Replace placeholder in `src/routes/index.tsx`. Set `head()` with title "Creator Memory — Your content has a memory now.", meta description, OG/Twitter tags, canonical.
- Add `scroll-behavior: smooth` on `html` in `src/styles.css`.
- Single `<h1>`, semantic `<section>`s with `aria-labelledby`, `<label>`s on email inputs (visually hidden), accent text meets contrast on `#121212` background.

### Out of scope
- No database, no auth, no Lovable Cloud.
- No pricing, no testimonials, no extra pages.
