# Ever Safe redesign — completion report

Branch: `redesign/premium` (uncommitted working tree). The pre-redesign site is
commit `70d44ce` on `main`. Production, DNS and deployment settings were not touched.

## 1. What changed

**Visual identity.** New palette (forest `#123D32`, evergreen `#102B2C`, ivory
`#F6F4EE`, sage `#D8E6D7`, restrained copper `#C77644` + an AA-safe
`#A3592C` for small text), Instrument Serif display type with Manrope for UI,
fluid type scale, spacing and motion tokens in `src/app/globals.css`, a new
arched-doorway brand mark, and a custom line illustration of an inspection
(`src/components/about/PropertyBlueprint.tsx`).

**Every route was redesigned:** `/`, `/services`, all six `/services/[slug]`
pages, `/about-us`, `/team`, `/pricing`, `/gallery`, `/blog`, all six
`/blog/[slug]` articles, `/contact-us`, the 404 page and the loading state, plus
a new shared header, utility band, mega-menu, mobile menu, sticky mobile
call/quote bar and footer.

**Photography.** 24 licensed Unsplash photographs replace the icon
placeholders. All are illustrative; none is captioned as an Ever Safe job,
employee or customer (credits: `src/assets/photos/CREDITS.md`).

## 2. Functionality preserved

| Feature | Behaviour |
| --- | --- |
| URLs & slugs | All 20 public routes unchanged; sitemap and robots unchanged |
| Navigation | Every original destination still linked (Team & Gallery under **About**) |
| Plan selection | "Choose Basic/Standard/Premium" still go to `/contact-us` |
| Prices & inclusions | Unchanged: $49/visit, $89/month, $149/month, same features |
| Contact form | Same five fields, same six service options, same required fields |
| Video | Ever Safe film still plays inline (now a 8.6 MB 720p encode) |
| Phone / email / address | Phone and address unchanged; email is now info@eversafepest.com (client-confirmed inbox) |
| Pricing FAQs, blog content, dates, authors | Preserved (see §4 for wording edits) |

## 3. Defects found and repaired (separate from the redesign)

1. **Contact form lost every lead.** It showed "Message Sent!" without sending
   anything. It now posts to `/api/contact`, validates on the server, and
   forwards to `CONTACT_FORM_ENDPOINT`. Without that variable the visitor sees
   an honest notice plus a one-click pre-filled email and the phone number —
   never a fake success.
2. **Newsletter did nothing.** Same fix via `/api/newsletter` and
   `NEWSLETTER_ENDPOINT`.
3. **Every page declared the homepage as its canonical URL**, telling search
   engines all pages were duplicates of `/`. Each page now has its own canonical.
4. **"Watch Our Video" linked to a missing anchor.** It now scrolls to the film.
5. **Blog dates displayed one day early** in Canadian time zones. Fixed.
6. **Footer social icons linked to `#`.** Removed until real profile URLs exist.
7. **Forced 0.9 s loading screen on every page.** Removed.

### Form delivery

Contact and newsletter submissions are emailed to **info@eversafepest.com**
through [FormSubmit](https://formsubmit.co) (no account needed). The server
validates each submission and the visitor's browser sends it to FormSubmit,
which rejects submissions sent from hosting servers. FormSubmit
sends a one-time **"Activate Form"** email to that inbox; nothing is delivered
until someone clicks it. Until then, visitors see a fallback (Send with Gmail, other email app, copy details, or
call), so enquiries are not lost.

Each contact enquiry also sends the visitor a generic acknowledgement email
(text in `contactAutoReply`, `src/lib/forms.ts`). Newsletter sign-ups get none.

To use a different service later, set `CONTACT_FORM_ENDPOINT` and/or
`NEWSLETTER_ENDPOINT` in the hosting dashboard to any URL that accepts a JSON
`POST`; these override FormSubmit. No personal data is written to server logs.

## 4. Claims that need client verification

**Removed from display (unverifiable, not reinstated):** 25+ years experience;
98% elimination rate; 5,000+ properties served; 4,200+ reviews and 5.0 rating;
"4,600+ species treated worldwide"; "24/7 emergency response" (headline stat);
"same-day emergency visits" (top bar); "certified/licensed/insured/
background-checked" technicians; "EPA-registered" (a US body); "pet and
child-safe"; "two-person team grown to thousands of customers".

**Testimonials are hidden**, not deleted (`src/data/testimonials.ts`). The four
reviewers share their names with the four team members and blog authors, so
they cannot be treated as genuine. Supply approved reviews to restore the section.

**Still displayed because they are existing business terms — please confirm:**
- Team names, roles and bios (same names as the testimonials — likely placeholders)
- Blog author names
- Hours: Mon–Sat 9 am–7 pm; Sunday "emergency calls only"
- Plan inclusions: "30-day service guarantee", "Free re-service between
  visits", "24/7 emergency call-outs" (Premium), "satisfaction guarantee"
- Pricing FAQ: "re-service guarantee", "no long-term contracts"
- Service inclusions: "damage warranty" (termite), "K9-assisted detection" (bed bug)
- "We typically respond within one business day"

**Wording changed for accuracy:** "EPA-registered" → "registered for use in
Canada"; "pet and child-safe" → "plans adjusted for children and pets, products
applied according to label directions"; removed "guaranteed" (bed bug summary),
"for good" (rodent), "pass audits" → "prepare for audits", and the uncited
"billions in damage" termite statistic.

**Video:** one stock clip in the film shows a van branded **"BUGFREE"** — a
different company name. Recommend re-editing that shot out.

## 5. Testing performed (production build, local)

- `eslint`: 0 problems · `tsc --noEmit`: pass · `next build`: pass (28 routes)
- Automated regression suite: **196/196** checks pass, three consecutive runs —
  every route 200, one H1 and self-canonical per page, all internal links
  resolve, no `#` links, alt text on all images, dropdown click/hover/Escape/
  outside-click/keyboard, mobile menu dialog (focus trap, Escape, scroll lock,
  focus return), back/forward, plan CTAs, prices, film playback, skip link,
  visible focus, reduced-motion and no-JavaScript content visibility, form
  validation (client and server), sitemap/robots/OG image.
- Forms against a local mock endpoint: delivered once with correct payload;
  double-click sends once; endpoint failure shows fallback and keeps input;
  no PII in logs.
- Horizontal overflow: **0 px** on 16 routes × 9 widths (360–1920).
- Lighthouse (mobile, simulated throttling): Accessibility 100, Best Practices
  100, SEO 100 on all 11 audited pages; Performance 92–99; CLS 0 everywhere.
  LCP 2.1–3.2 s under simulated slow 4G — above the 2.5 s target on the
  homepage, gallery and about pages.

## 6. Known limitations

- No real Ever Safe photography exists; all images are illustrative stock.
- Forms need the two environment variables above to deliver online.
- The original 74 MB `public/videos/PestControlVideo.mp4` is no longer
  referenced and can be deleted to keep deploys small.
- `embla-carousel-*` dependencies are now unused (left installed; safe to remove).
- Lighthouse was run locally, not against a deployed preview or real devices.
