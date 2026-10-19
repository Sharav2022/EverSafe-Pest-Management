# EverSafe-Pest-Management

# MASTER IMPLEMENTATION BRIEF
# EVER SAFE PEST MANAGEMENT
## Complete Premium Website Redesign, User Experience Transformation and Visual Brand Elevation

**Existing website:** https://www.eversafepest.com/

**Implementation platform:** Claude AI

**Project type:** Complete UI/UX redesign of an existing working pest-control business website.

**Target market:** Canada, with the existing business location and service geography preserved unless confirmed otherwise.

**Primary objective:** Transform Ever Safe into a visually extraordinary, premium, highly credible, sophisticated pest-management website suitable both for real customer acquisition and for presentation in a professional digital-agency portfolio.

---

# 1. YOUR ROLE AND NON-NEGOTIABLE MISSION

Act as a coordinated senior digital product team comprising:

- Award-winning Creative Director
- Premium Brand Identity Designer
- Senior UI/UX Designer
- Digital Art Director
- Conversion Rate Optimization Specialist
- Frontend Architect
- Responsive Design Engineer
- Accessibility Specialist
- Technical SEO Specialist
- Website QA and Performance Engineer

You are not being hired to make minor cosmetic adjustments.

You must comprehensively redesign the visual presentation and user experience of the existing website.

The result should feel custom-designed by a sophisticated international digital studio, rather than assembled from a generic pest-control template.

**This is a complete visual transformation, but not a functional rebuild.**

Preserve all existing working business functionality, business logic, integrations, content-management capabilities, APIs, lead-capture workflows, and data contracts.

Do not remove working capabilities or introduce unnecessary new product functionality.

You have creative authority over visual styling, information architecture, layout composition, imagery, motion design, typography, navigation presentation and content hierarchy.

Make the design decisions yourself. Do not repeatedly ask the client to choose between themes, color palettes or layouts.

Complete the implementation, test it, fix the problems and deliver a finished, working result.

---

# 2. MANDATORY INITIAL AUDIT

Before making code changes, audit both:

1. The current live website.
2. The existing Claude project and its source code, assets, components, routes, configuration, backend services and data model.

Inspect every existing page, every navigation path, each interactive component and every customer-facing function.

The known publicly accessible page families include:

- Homepage: `/`
- About Us: `/about-us`
- Services: `/services`
- Individual services: `/services/[existing-service-slug]`
- Team: `/team`
- Pricing: `/pricing`
- Gallery: `/gallery`
- Blog: `/blog`
- Individual blog articles and their current routes
- Contact Us: `/contact-us`

The currently published service categories include:

1. Residential Pest Control
2. Commercial Pest Control
3. Termite Control & Prevention
4. Bed Bug Treatment
5. Rodent Control
6. Mosquito & Cockroach Control

Discover the actual slugs and preserve them.

Also identify any additional routes, screens, service pages, policy pages, admin screens, CMS views or utility features present in the codebase.

Do not assume the publicly accessible pages constitute the entire application.

### Audit all existing workflows

Inspect:

- Navigation and dropdowns
- Mobile navigation
- Quote and booking CTAs
- Contact form
- Service selection
- Pricing plan selection
- Newsletter subscription
- Gallery functionality
- Blog navigation
- Embedded video functionality
- Telephone links
- Email links
- Third-party integrations
- Existing analytics
- Existing SEO metadata
- Backend form submissions
- Validation and success/error messaging
- Any persistence or notification mechanisms
- Any administrative capabilities

Create an internal route and feature inventory before implementation.

Record the existing behavior of each feature so that its behavior can be preserved and regression-tested.

**Do not change underlying functionality simply because you think another workflow would look more modern.**

For example, if selecting a plan currently transfers the visitor to an inquiry form with the plan preselected, preserve that behavior.

If a feature is already defective, document the defect, repair it when safely possible without altering the intended business process, and distinguish that repair from redesign work.

Do not invent a new payment, booking or subscription system.

---

# 3. CREATIVE VISION

## Design positioning

Develop Ever Safe as:

**A premium, modern Canadian property-protection and pest-management brand.**

The brand should communicate:

- Protection
- Precision
- Trust
- Professional expertise
- Responsible treatment practices
- Comfort
- Reliability
- Contemporary service standards

The design should inspire confidence before customers even read detailed service information.

A homeowner should feel comfortable inviting this company into their property.

A commercial property manager should feel confident considering Ever Safe for professional pest-management services.

### Desired emotional impression

The experience should feel:

- Clean but not sterile
- Premium but not extravagant
- Confident but not aggressive
- Scientific but approachable
- Contemporary but timeless
- Environmentally conscious without exaggerated green claims
- Professional without being corporate or generic

### What to avoid

Do not create another conventional exterminator website.

Avoid:

- Generic bright-green template styling
- Excessive neon accents
- Cartoon pests or childish insect illustrations
- Repeated hexagonal design elements
- Oversized bug photographs dominating the page
- Aggressive chemical-spraying imagery
- Oversaturated imagery
- Generic stock-photo grids
- Unnecessary gradients
- Excessive glassmorphism
- Gold accents merely to imply luxury
- Large, heavy shadows on every card
- Identical card layouts in every section
- Oversized rounded boxes everywhere
- Busy backgrounds
- Excessive icon collections
- Unnecessary carousels
- Inflated statistics
- Fake testimonials or trust badges
- A conventional hero followed by ten repetitive template sections

The page must have artistic direction, controlled asymmetry, a considered visual rhythm and strong editorial hierarchy.

---

# 4. COMPLETE VISUAL IDENTITY SYSTEM

Build a coherent design system and use it consistently across the website.

## 4.1 Color direction

Use this as the preferred starting palette:

Primary deep forest green:
`#123D32`

Secondary deep evergreen:
`#102B2C`

Warm ivory:
`#F6F4EE`

Soft sage:
`#D8E6D7`

White:
`#FFFFFF`

Restrained copper accent:
`#C77644`

Charcoal text:
`#242B29`

Muted body text:
`#66716C`

You may refine these colors if your final design exploration identifies a more effective combination.

The overall result should emphasize balance, restraint, strong contrast and thoughtful hierarchy.

### Color allocation

Warm ivory and white should dominate reading surfaces.

Deep green should anchor the header, signature sections, large calls to action and footer.

Sage should be used sparingly for secondary surfaces, visual separation and supportive details.

Copper should be an accent, not a dominant background.

Create dark, light and intermediate surface variations with accessible contrast.

Do not use every color in every section.

## 4.2 Typography

Use a premium, professional typographic combination.

Suggested direction:

- Main sans-serif: Manrope, Plus Jakarta Sans or another comparably polished, legible family.
- Editorial display face: DM Serif Display, Instrument Serif or a comparable carefully chosen face.

The final pairing should be visually tested, not selected arbitrarily.

Use the display typeface selectively for major brand statements, where it creates distinctive editorial character.

Navigation, buttons, technical explanations, labels and form interfaces should remain exceptionally clear.

Avoid unnecessarily decorative italics and awkward typeface combinations.

### Typography behavior

- Strong headline hierarchy
- Controlled line lengths
- High-quality line wrapping
- Appropriate letter spacing
- Elegant heading weights
- Readable body text
- Well-balanced mobile scaling
- No unnecessarily tiny text
- No giant headings that overwhelm mobile screens

Use fluid typography, such as `clamp()`, where appropriate.

Create consistent spacing between headings, descriptions, supporting labels and action buttons.

---

# 5. GLOBAL PAGE LAYOUT SYSTEM

Establish reusable design primitives.

Include:

- Standard editorial content container
- Wide media container
- Full-bleed hero and image treatments
- Editorial split layouts
- Asymmetric image/text compositions
- Premium service cards
- Minimal feature blocks
- Consistent button styles
- Reusable section headings
- Breadcrumbs
- Trust and credential blocks
- Pricing comparison components
- Process timelines
- FAQ accordions
- Conversion CTA panels
- Form fields and validation messages
- Elegant footer

Use a sensible responsive layout grid and consistent spacing tokens.

Suggested desktop content width: approximately 1200 to 1360px, with wider compositions where appropriate.

Avoid squeezing content into narrow columns unnecessarily.

Avoid edge-to-edge paragraphs that are difficult to read.

Introduce intentional breathing room.

The website should feel exceptionally composed, not crowded.

---

# 6. HEADER AND NAVIGATION: FULL REDESIGN

Completely redesign the navigation presentation.

### Desktop experience

Use a premium, minimal navigation bar with:

- Ever Safe logo or refined brand lockup
- Home
- Services
- About
- Pricing
- Blog
- A clearly accessible route to other existing pages
- Contact
- Primary CTA: Request a Quote or Book Now, consistent with existing behavior

Do not delete Team or Gallery. They may be placed in a thoughtfully structured secondary navigation or an existing-pages dropdown.

Use whichever arrangement provides the cleanest navigation without hiding important existing content.

The header should feel intentional, not like a conventional theme menu.

Consider a slim utility band for verified business hours, service geography or click-to-call details.

Do not allow the utility band to dominate the visual composition.

### Sticky header

Implement or refine elegant sticky behavior.

Possible behavior:

- Comfortable full-size initial header
- Slightly condensed header after scrolling
- Subtle surface treatment
- Clear CTA visibility
- Smooth transitions

Avoid dramatic shrinking, layout jumps or intrusive animation.

### Dropdowns

Use structured, well-spaced dropdowns.

Service discovery should be particularly clear.

A refined service menu may display:

- Residential services
- Commercial services
- Specialist treatments

Every destination must map to a real existing route.

Avoid creating dead links or invented service categories.

### Mobile navigation

Create a deliberate mobile experience.

Requirements:

- Clean hamburger interaction
- Accessible menu open and close behavior
- Clear touch targets
- Proper expandable submenus
- No horizontal scrolling
- No overlay or stacking defects
- Clear quote/contact actions
- Correct keyboard and screen-reader behavior

The mobile menu must look professionally designed, not simply compressed from desktop.

---

# 7. HOMEPAGE: COMPLETE EXPERIENCE RECONSTRUCTION

The homepage is the flagship experience and must receive the most attention.

Do not merely change the background colors or images of the current sections.

Reconstruct the page composition, narrative flow and visual hierarchy.

## SECTION A: Signature hero

Create a distinctive, high-impact hero inspired by premium property services, modern architecture and environmental-care brands.

### Suggested headline

**Protect the spaces that matter most.**

Supporting copy:

"Thoughtful pest-management solutions for homes and businesses, delivered with care, precision and professional attention."

These are proposed marketing lines. Refine them for factual accuracy and brand fit.

### Hero composition

Preferred direction:

A sophisticated split or layered composition featuring beautiful residential-property photography and a restrained brand message.

The visual focus should be on the property and people being protected, not on a frightening pest infestation.

Consider:

- Beautiful contemporary Canadian home
- Architectural details
- Welcoming interior
- Elegant garden or exterior
- Realistic professional technician imagery, if appropriate
- Natural sunlight
- Deep-green brand elements
- Art-directed typography

Use one exceptionally strong hero photograph rather than assembling a collection of unrelated stock images.

The hero should feel premium even with animations disabled.

### CTA system

Primary CTA:
"Request a Quote"

Secondary CTA:
"Explore Our Services"

Preserve the existing destinations and behavior of equivalent actions.

Include click-to-call where appropriate.

### Trust indicators

Only show documented information such as verified licensing, established service areas or actual credentials.

Do not fabricate review counts, awards, experience numbers or certifications.

## SECTION B: Brand reassurance

Create a refined transition from the hero.

Possible headline:

**Your property deserves more than a temporary fix.**

Explain the brand's inspection-led, prevention-oriented service philosophy.

Use a visually elegant editorial composition.

Avoid four identical generic feature cards.

Use high-quality imagery, generous negative space and short purposeful messages.

## SECTION C: Premium service discovery

Reimagine the current six services.

Instead of a conventional identical six-card grid, introduce a visually engaging service showcase.

One possible desktop layout:

- Large featured residential service tile
- Equally purposeful commercial service tile
- Specialist-service collection below
- Clear access to all existing service categories

Every service should retain its original route.

Use subtle interactions such as image zoom, refined arrow movement and controlled surface transitions.

Keep every card fully accessible without hover.

Make it immediately obvious which service solves which customer problem.

## SECTION D: The Ever Safe difference

Create a visually distinctive section communicating the company's genuine differentiators.

Suggested themes:

- Inspection-led recommendations
- Tailored treatment plans
- Clear communication
- Long-term prevention
- Professional service standards

Do not imply unconditional guarantees, chemical safety, round-the-clock availability or certifications unless validated.

Consider a full-width dark-green composition with asymmetric content blocks.

Use elegant line icons only where they genuinely improve comprehension.

## SECTION E: Residential and commercial pathways

Create two clearly differentiated pathways.

### Residential

Position around protecting comfortable living environments.

Suggested visual:
A refined residential interior or beautiful family home.

### Commercial

Position around professional property management, operational continuity and preventive pest programs.

Suggested visual:
Contemporary commercial building, professional workspace or authentic service environment.

Use contrasting image compositions and distinct messaging.

Both pathways should lead to the existing relevant pages.

Do not create new functionality.

## SECTION F: Process storytelling

The current four-stage process is:

1. Inspect
2. Plan
3. Treat
4. Protect

Preserve the underlying process and transform its visual presentation.

Create an elegant editorial timeline or connected process composition.

Use:

- Oversized step numbers
- Deliberate spacing
- Minimal supporting graphics
- Relevant imagery
- Clear descriptions
- Responsive stacking

The process should feel reassuring and easy to understand.

Avoid a conventional row of four bordered boxes.

## SECTION G: Expert-led treatment philosophy

Introduce an editorial section about responsible pest-management expertise using existing verified information.

Consider an impactful real treatment or inspection photograph and a carefully composed supporting text panel.

Provide a natural route to About Us or Team.

Do not invent credentials, people, biographies or professional qualifications.

## SECTION H: Statistics and credibility

Inspect all existing numbers.

The published site currently contains claims including:

- 25+ years of experience
- 98% pest elimination rate
- 5,000+ properties served
- 4,200+ reviews
- 5.0/5 rating

Do not treat published numbers as independently verified.

Reuse them only when their authenticity has been confirmed through trusted business information available in the project.

If numbers cannot be verified:

- Do not invent alternatives
- Do not display zero-filled animated counters
- Do not use unsupported achievement statistics
- Redesign the section around service principles or verified facts instead

Any retained numeric animation must show its real value immediately in the HTML and must not depend on JavaScript execution for basic readability.

## SECTION I: Customer testimonials

The existing site contains customer testimonials whose attribution needs confirmation.

Preserve any genuine and approved client reviews.

Present them using an elevated editorial layout.

Potential styling:

- Large sophisticated quotation treatment
- Restrained typography
- Clearly identified reviewer
- Relevant customer context
- Minimal decoration

Do not display fabricated reviews, stock headshots representing real customers or fake five-star ratings.

If approved testimonials are unavailable, do not manufacture them. Replace the promotional area with authentic business reassurance content until the real testimonials are supplied.

## SECTION J: Pricing preview

Introduce an elegant pricing preview linked to the existing pricing page.

Retain the currently configured plans and selection behaviors.

Do not silently change prices, inclusions or billing intervals.

Focus on:

- Immediate readability
- Clear plan distinction
- Minimal visual clutter
- Proper alignment
- Transparent pricing units
- Refined CTA hierarchy

## SECTION K: Knowledge center

Display existing blog content in a refined editorial layout.

Use large, carefully cropped editorial images and clean metadata.

Avoid generic identical news-card templates.

Preserve article routes and publication information.

Make the articles feel useful and credible, not like filler content.

## SECTION L: Signature closing CTA

Finish the homepage with a memorable premium section.

Suggested headline:

**A safer space starts with the right approach.**

Use a beautiful background composition, an elegant deep-green surface or another fitting treatment.

Provide an unambiguous existing lead-generation CTA and phone contact.

The section must feel like a natural conclusion, not another generic banner.

---

# 8. SERVICES PAGE: FULL TRANSFORMATION

The services page should feel like a sophisticated service catalog.

Build a carefully structured introduction followed by a clear visual hierarchy.

Each service must have:

- Distinct relevant imagery
- Accurate service title
- Short purposeful explanation
- Clear user benefit
- Existing detail-page destination
- Existing quote or contact behavior

Do not use the same technician photo for every service.

Do not use unrelated pest images as decoration.

Use image art direction that gives each offering a distinct visual identity while maintaining overall cohesion.

Organize services visually rather than creating unnecessary new categories or changing business offerings.

Retain the existing process information below the service discovery area, presented in an elevated format.

The result must work beautifully on desktop, tablet and mobile.

---

# 9. INDIVIDUAL SERVICE DETAIL PAGES

Redesign every existing service-detail page using a consistent premium component system.

This includes all six identified services.

Each page should have its own distinctive visual treatment while belonging to the same brand family.

### Recommended page architecture

1. Service-specific hero
2. Short explanatory overview
3. Benefits and situations addressed
4. Existing treatment inclusions
5. Existing service process
6. Relevant explanatory visuals
7. Related services
8. Existing quote/contact action

Retain the actual published treatment scope and plan information.

Do not invent additional procedures, chemicals, guarantees or service methods.

### Residential page

Use warm, refined residential-property imagery.

Emphasize a comfortable, professionally maintained living environment.

### Commercial page

Use professional commercial-property imagery.

Prioritize clarity, reliability and organized service delivery.

### Termite page

Use realistic building/protection imagery and technically appropriate pest imagery where helpful.

Avoid alarming structural-destruction imagery as the dominant visual.

### Bed Bug page

Use discreet, reassuring bedroom imagery.

Avoid unpleasant full-screen close-ups.

### Rodent page

Use clean property-exclusion or inspection imagery.

Avoid cartoon rodents or unnecessarily graphic imagery.

### Mosquito and Cockroach page

Use appropriate, restrained pest imagery with a clear treatment context.

Avoid images that visually overstate treatment claims.

Service pages must be informative, SEO-friendly and strongly designed.

---

# 10. ABOUT US PAGE

Reconstruct the About page as a credible, premium company narrative.

Do not simply center text and add generic statistics.

### Experience direction

Create a strong editorial introduction around the company's purpose and approach.

Use:

- Distinctive large typography
- Authentic company/property/technician imagery where available
- Elegant storytelling composition
- Clear values
- Genuine business information
- Verified professional credentials

Make the page feel human, trustworthy and well established.

Do not invent founding milestones, company history, geographic coverage or staff profiles.

Preserve the existing business story unless the project's authoritative data contradicts it.

If a claim is not confirmed, use factual, neutral wording.

---

# 11. OUR TEAM PAGE

The team page must no longer look like a generic template directory.

Redesign with a premium editorial profile system.

Possible treatment:

- Spacious portrait-led cards
- Consistent photo art direction
- Clear role hierarchy
- Elegant biography layout
- Restrained hover states

Only use actual approved team members and their correct names and roles.

Do not generate AI faces and represent them as real employees.

Do not replace genuine staff information with fictional employees.

If authentic portraits are unavailable, use sophisticated typographic treatments or neutral professional imagery that does not impersonate a specific team member.

Ensure that each visible profile contains accurate data.

---

# 12. PRICING PAGE: HIGH-END COMPARISON DESIGN

Retain the three existing published plans:

- Basic
- Standard
- Premium

The current published prices are:

- Basic: $49 per visit
- Standard: $89 per month
- Premium: $149 per month

These are existing values, not newly approved business decisions.

Preserve pricing and the associated plan inclusions from the authoritative project data.

If different values exist in the actual application database, use the application source of truth and document the discrepancy.

### Redesign requirements

Create beautiful, highly readable pricing cards or an editorial comparison layout.

Ensure:

- Clear currency and billing intervals
- Distinct plan names
- Appropriate feature hierarchy
- Clear most-popular indication if currently authorized
- Balanced card heights
- Proper list spacing
- No clipped text
- Clear existing plan-selection actions

Never hide important conditions.

Do not introduce artificial urgency or fake discounted prices.

### Mobile

Cards should stack gracefully without truncation.

Every inclusion and CTA must remain accessible.

Retain existing FAQ content and enhance the accordion presentation.

---

# 13. GALLERY PAGE

The current publicly retrieved gallery page does not expose substantive gallery content.

Investigate the actual project assets and gallery configuration.

### If genuine gallery assets exist

Create an immersive visual gallery using:

- Carefully composed masonry or editorial grids
- Consistent image quality
- Refined image transitions
- Accessible lightbox behavior, if one already exists
- Accurate captions
- Responsive composition

Preserve any existing filters and galleries.

### If genuine assets do not exist

Do not fabricate past projects, treatments or customers.

Build an elegant gallery-ready presentation using only assets clearly designated as general brand or illustrative imagery.

Do not label generic photographs as completed Ever Safe customer projects.

If no suitable images exist, create an honest, visually finished page that explains the intended gallery content without presenting fake case studies.

Avoid empty layouts, broken image placeholders and meaningless decorative grids.

---

# 14. BLOG AND ARTICLE DESIGN

Completely redesign the blog presentation.

The content should resemble a polished professional knowledge journal.

### Blog index

Use:

- Distinctive editorial page hero
- Featured article treatment
- Attractive secondary article cards
- Clear publication dates
- Category labels
- Well-controlled image crops
- Clean reading hierarchy

Only use real categories and existing articles.

### Article pages

Enhance typography and readability.

Recommended improvements:

- Comfortable article content width
- Strong headings
- Well-balanced paragraphs
- Appropriate line spacing
- Relevant images
- Elegant metadata presentation
- Accessible internal links
- Thoughtful related content

Do not change article identities, permalinks or publication dates unnecessarily.

Preserve SEO value and article content.

Do not invent expert authors or citations.

---

# 15. CONTACT PAGE: PREMIUM CONVERSION EXPERIENCE

Treat the contact page as an important customer-facing service experience.

Create a calm, highly trustworthy visual design.

### Suggested layout

Desktop:

A strong editorial introduction on one side and a clean, polished form on the other, or another professionally considered composition.

Include actual current contact details:

Phone:
+1 437-833-9181

Email:
hello@eversafepest.com

Published address:
2600 Skymark Ave Unit 9, Suite 104, Mississauga, ON L4W 5B2

Use the confirmed business source of truth if any information in the actual project differs.

### Form behavior

Preserve the existing form fields and backend wiring.

Currently visible fields include:

- Full Name
- Phone Number
- Email Address
- Service Needed
- Message

Maintain existing required fields, validation rules, submission destinations and notification behavior.

Redesign form labels, spacing, selection controls, focus states, errors and confirmation messages.

### Critical requirements

- Never lose a submitted lead
- Never replace a real submission with a fake success toast
- Do not silently change notification recipients
- Do not leak personal contact details through logs
- Preserve server-side validation
- Provide accessible validation messages
- Prevent unintentional duplicate submissions
- Do not require additional information not currently needed

Keep phone calls easy to initiate on mobile.

If a map or location link already exists, preserve and enhance its presentation.

Do not introduce an unnecessary customer account system.

---

# 16. FOOTER: COMPLETE REBUILD

Design a distinctive premium footer.

The current footer is information-heavy and conventionally structured.

Replace the visual treatment with a more cohesive, refined composition.

Suggested elements:

- Well-proportioned brand logo
- Concise brand statement
- Service links
- Company links
- Blog/resources links
- Contact details
- Existing newsletter functionality
- Existing policy/legal links, where present
- Copyright

Potential visual direction:

Deep evergreen background with warm-white typography and restrained sage accents.

The footer should feel deliberate and premium.

Avoid excessive height, unnecessary repeated links and crowded columns.

The newsletter input, if retained, must continue using its original submission logic.

Keep mobile stacking clean and logical.

---

# 17. IMAGE DIRECTION AND VISUAL ASSETS

Photography is critical to this redesign.

The website should not look as though images were selected randomly from an ordinary stock catalog.

### Desired photographic direction

Use:

- High-end residential architecture
- Bright, refined interiors
- Well-maintained properties
- Authentic professional pest-control scenarios
- Professional uniforms and equipment
- Warm natural lighting
- Clean commercial environments
- Beautifully composed exterior spaces
- Subtle Canadian residential context

### Art direction

Favor:

- Realistic photography
- Natural colors
- Architectural compositions
- Editorial cropping
- Soft directional lighting
- Consistent image treatment
- Appropriate subject positioning

Avoid:

- Cheap-looking AI composites
- Distorted hands and equipment
- Unnatural technician uniforms
- Unrealistic treatment scenes
- Repeated generic stock models
- Overprocessed imagery
- Images suggesting treatments the company does not provide

Use approved images already present in the project when suitable.

Source additional properly licensed assets where necessary.

Use AI-generated images only for clearly illustrative, non-documentary brand visuals, not as evidence of actual employees, customers, treatments, facilities or completed work.

Never represent generic or generated imagery as a real company photograph.

Optimize assets for the web.

Use modern image formats and responsive image sizes.

Avoid shipping unnecessarily large media files.

Do not create an image-heavy experience that loads poorly on Canadian mobile networks.

---

# 18. MOTION DESIGN AND INTERACTIONS

Introduce subtle, sophisticated motion throughout the website.

The goal is refinement, not spectacle.

Appropriate motion patterns include:

- Gentle section reveals
- Soft image entrance transitions
- Restrained hover zoom
- Premium button feedback
- Refined dropdown transitions
- Controlled process-line animation
- Subtle navigation transitions
- Natural accordion expansion
- Elegant focus and selection feedback

### Motion principles

Use a coherent timing system.

Suggested ranges:

- Small micro-interactions: 150 to 250ms
- Component transitions: 200 to 400ms
- Larger reveals: 400 to 700ms

Choose appropriate easing curves.

Never delay important information unnecessarily.

Avoid:

- Forced loading screens
- Scroll-jacking
- Excessive parallax
- Distracting cursor effects
- Constant animations
- Unnecessary 3D objects
- Complicated motion libraries without justification
- Large transitions that reduce usability

Respect reduced-motion user preferences.

All content must remain visible and usable with animations disabled.

Animation must enhance the experience, not carry it.

---

# 19. RESPONSIVE DESIGN REQUIREMENTS

Design desktop, tablet and mobile experiences intentionally.

Do not design only for desktop and let the framework stack elements automatically.

Review at least:

- 360px
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

### Mobile requirements

- Comfortable reading widths
- No horizontal overflow
- No clipped headlines
- No text crossing images
- No hidden navigation
- Accessible touch targets
- Proper image cropping
- Correct button hierarchy
- Functional forms
- Well-spaced pricing information
- No overlapping sticky elements
- No clipped gallery images
- Clear phone and quote actions

Where appropriate, retain a compact sticky mobile contact or quote action if it does not obstruct content.

Test landscape orientation.

Review long service names, long paragraphs and translated/browser-zoom conditions.

A customer should experience the same level of polish on a smartphone as on a desktop.

---

# 20. BRAND COPY AND EDITORIAL REFINEMENT

Improve the presentation and language of the existing website.

Rewrite generic promotional copy where beneficial to create a more distinctive brand voice.

The new voice should be:

- Confident
- Clear
- Reassuring
- Professional
- Precise
- Human
- Premium without exaggeration

Use concise headlines and purposeful descriptions.

Avoid generic clichés such as:

- We are the best
- Your one-stop solution
- Unmatched excellence
- World-class services
- 100% guaranteed results

Unless specifically supported, do not make absolute effectiveness claims.

### Accuracy requirements

Preserve verified company facts.

Do not invent:

- Customer counts
- Ratings
- Testimonials
- Years in business
- Awards
- Technician qualifications
- Industry certifications
- Proprietary technology
- Guaranteed outcomes
- Regulatory approvals
- Service coverage
- Emergency availability

This is a Canadian business.

Do not automatically introduce US-specific regulatory language or certifications.

Review existing claims involving EPA registration, guaranteed safety, licensing and chemical use.

Use accurate, appropriately qualified Canadian-context wording where authoritative information is available.

Avoid claiming that all pest-control products are completely safe for children or pets.

Use statements about suitability and use according to applicable product labels and technician instructions.

The website should look impressive because it communicates well, not because it exaggerates business credentials.

---

# 21. FUNCTIONALITY PRESERVATION

This requirement overrides all aesthetic preferences.

Existing working functionality must be preserved.

### Mandatory preservation checklist

- Existing URLs and routes
- Existing navigation destinations
- Existing service pages
- Existing blog articles
- Existing pricing information
- Existing plan-selection behavior
- Existing contact-form processing
- Existing lead storage
- Existing notifications
- Existing newsletter processing
- Existing video functionality
- Existing gallery behavior
- Existing mobile interactions
- Existing admin/CMS capabilities
- Existing analytics integrations
- Existing API contracts
- Existing database relationships
- Existing environment configuration
- Existing security controls

Only change the visual frontend implementation where possible.

If refactoring components is necessary, retain their contracts and observable business behavior.

Do not replace working backend features.

Do not drop database tables or migrate persistent business data unnecessarily.

Do not remove a page because it complicates the redesign.

Do not convert functioning controls into nonfunctional decorative components.

Do not introduce unnecessary third-party dependencies.

Do not alter the production domain, DNS, live deployment configuration or external integrations without explicit authorization.

---

# 22. SEO AND SEARCH ENGINE PRESERVATION

Retain or improve the site's technical search-engine readiness.

Protect existing indexed URLs.

Requirements:

- Preserve existing slugs
- Preserve valid canonical mappings
- Retain or improve unique meta titles
- Preserve or improve meta descriptions
- Proper semantic heading structure
- One primary H1 per page
- Descriptive internal linking
- Appropriate image alt text
- Structured data using verified facts
- Existing robots configuration
- Existing sitemap behavior
- Clean metadata
- No accidental noindex directives
- No broken links
- No duplicate route generation
- No unnecessary redirects
- No unsupported geographic targeting

Where helpful, refine content for genuine Canadian local-service search intent.

Do not keyword-stuff city names.

Do not invent locations served.

Maintain existing blog indexing and service-page discoverability.

---

# 23. ACCESSIBILITY REQUIREMENTS

Target WCAG 2.2 AA practices.

Implement:

- Appropriate semantic HTML
- Keyboard-accessible controls
- Visible focus indicators
- Accessible navigation
- Proper heading structure
- Sufficient contrast
- Form labels
- Useful validation errors
- Descriptive links
- Meaningful image alt text
- Appropriate aria attributes
- Functional mobile menus
- Reduced-motion behavior
- Accessible dialogs if already present

Test core user journeys using keyboard-only navigation.

Ensure the website remains usable at 200% zoom.

Avoid interactions available only on hover.

Avoid visually hidden essential content.

---

# 24. PERFORMANCE AND TECHNICAL QUALITY

The redesign must not sacrifice performance for appearance.

Target:

- Lighthouse Performance: 90+ on representative pages where technically feasible
- Lighthouse Accessibility: 95+
- Lighthouse SEO: 95+
- Lighthouse Best Practices: 95+

Also target:

- LCP at or below 2.5 seconds
- CLS at or below 0.1
- INP at or below 200ms

These are performance objectives, not values to claim without measurement.

Test under representative mobile conditions.

Prioritize:

- Image compression
- Lazy loading of noncritical media
- Proper responsive images
- Efficient font loading
- Minimal layout shift
- Appropriate code splitting
- Reusable components
- Low JavaScript overhead
- Lightweight animations
- Sensible asset caching
- Avoidance of unnecessary dependencies

Do not load a large animation framework just to animate a few elements.

Avoid heavy hero videos unless they provide exceptional value and can be delivered without performance degradation.

Do not sacrifice text contrast or readability to improve Lighthouse scores.

---

# 25. ENGINEERING IMPLEMENTATION

Preserve the application's existing technical architecture unless a clearly necessary, safe change is justified.

Do not rewrite the complete platform simply because another framework is more fashionable.

Identify the actual framework, styling system, build pipeline, component structure and application architecture.

Where compatible with the existing stack:

- Centralize design tokens
- Build reusable visual components
- Consolidate repeated styles
- Establish consistent typography
- Establish consistent spacing
- Standardize breakpoints
- Improve responsive images
- Keep routing stable
- Preserve backend integrations
- Maintain readable implementation patterns

Avoid duplicating large page structures unnecessarily.

Avoid modifying dependencies that are unrelated to the redesign.

Do not expose confidential environment values or API keys.

Before major changes, ensure there is a recoverable baseline or project snapshot.

Use an isolated preview or development environment for validation.

Do not overwrite production data as part of testing.

---

# 26. REQUIRED QA AND REGRESSION TESTING

Do not stop after generating the pages.

You must test the website comprehensively.

## A. Visual verification

Review every page in the browser.

Check:

- Section composition
- Typography
- Color consistency
- Header proportions
- Image selection
- CTA positioning
- Footer quality
- Card alignment
- Spacing
- Responsive behavior

Pay special attention to text inside dark cards, image overlays and small components.

Nothing should be clipped, hidden, truncated unexpectedly or overflowing its container.

## B. Functional regression

Test the complete visitor journey.

Verify:

1. Homepage loads.
2. Header navigation works.
3. Service dropdown works.
4. Every service card opens its correct page.
5. Every existing service page loads.
6. Pricing page loads.
7. Every plan CTA performs its prior action.
8. Contact form validates correctly.
9. Contact form reaches the original backend.
10. Success and failure states behave correctly.
11. Newsletter retains its prior workflow.
12. Blog list loads.
13. Every existing article route works.
14. Gallery behaves correctly.
15. Video interactions work where applicable.
16. Telephone links work.
17. Email links work.
18. Mobile navigation works.
19. Back/forward navigation works.
20. Existing legal and utility links work.

Use safe test data, mocks or isolated test environments when validating submissions. Do not create unwanted real customer leads or send unapproved external messages.

## C. Responsive verification

Test all major pages at each specified breakpoint.

Capture and inspect screenshots.

Fix issues such as:

- Cropped words
- Tiny text
- Excessive empty gaps
- Images with inappropriate focal points
- Button overlaps
- Misaligned columns
- Unnecessary horizontal scrolling
- Unreadable mobile pricing
- Broken sticky navigation
- Invalid grid behavior

## D. Accessibility

Perform automated and manual accessibility checks.

Validate keyboard navigation, form errors and reduced-motion preferences.

## E. Technical validation

Run the applicable:

- Lint checks
- Type checks
- Builds
- Unit tests
- Component tests
- Route checks
- End-to-end tests
- Performance audits

Fix failures caused by the redesign.

Do not claim that tests passed unless they were actually run.

---

# 27. DESIGN QUALITY CONTROL

After implementing the first complete design, conduct a second creative-review pass.

Evaluate the website as an independent art director.

Ask:

- Does the site look genuinely custom?
- Does the hero create an immediate premium impression?
- Does the design resemble a high-value international service brand?
- Are any sections generic or repetitive?
- Are images visually cohesive?
- Is typography distinctive and professionally balanced?
- Are section transitions elegant?
- Is mobile as polished as desktop?
- Are the service experiences differentiated?
- Does the website communicate trust without unsupported claims?
- Is the overall composition portfolio-worthy?

If any section resembles an ordinary website template, redesign that section.

Do not settle for a competent but unremarkable result.

### Important

A premium website does not require more animations, more boxes or more content.

It requires superior composition, hierarchy, visual restraint, photography, typography and interaction quality.

The finished design must demonstrate these qualities.

---

# 28. REFERENCE AND RESEARCH DIRECTION

Study the following real industry sites and design approaches for principles, not for direct copying:

- https://www.orkin.com/
- https://www.terminix.com/
- https://www.rentokil.com/
- https://www.pestie.com/
- https://www.goaptive.com/

Study:

- Service discovery
- Quote conversion
- Navigation clarity
- Credibility presentation
- Professional imagery
- Residential versus commercial customer journeys
- Pest-specific information architecture

Also study current premium architecture, property-care and contemporary service-brand websites for visual refinement.

Use inspiration, not imitation.

Do not copy proprietary logos, copyrighted layouts or unique competitor brand assets.

Create an original, recognizable visual identity for Ever Safe.

---

# 29. IMPLEMENTATION SEQUENCE

Execute the work in this order.

### Stage 1: Discovery and preservation

Audit the existing live site and the complete project.

Identify all routes, functionality, assets, data sources and integrations.

Create an internal preservation checklist.

Create a recoverable project baseline.

### Stage 2: Creative system

Establish the final visual direction.

Create color, typography, spacing and component tokens.

Define the main responsive design system.

### Stage 3: Shared interface redesign

Build the redesigned header, navigation, buttons, form styles, visual sections and footer.

Validate these shared elements before applying them everywhere.

### Stage 4: Flagship homepage

Completely reconstruct the homepage.

Establish the standard of visual quality for the rest of the project.

### Stage 5: Inner pages

Redesign the services catalog and all service pages.

Redesign About, Team, Pricing, Gallery, Blog, article pages and Contact.

Include every additional existing route discovered in the audit.

### Stage 6: Motion and refinement

Implement restrained animations and interaction polish.

Complete responsive adjustments.

### Stage 7: Functional verification

Test all existing workflows.

Fix functional regressions.

### Stage 8: Final design review

Conduct an end-to-end visual review.

Replace anything that appears generic, unfinished or inconsistent.

### Stage 9: Final validation

Run technical, accessibility, responsive and performance checks.

Fix identified problems.

Produce a ready-to-review preview.

Do not publish or modify production infrastructure without authorization.

---

# 30. EXPECTED FINAL DELIVERABLE

Deliver a completely redesigned, functional and thoroughly tested Ever Safe website.

The finished implementation should include:

1. A wholly refreshed visual identity.
2. A premium flagship homepage.
3. Professionally redesigned navigation.
4. Reimagined service discovery.
5. Beautiful individual service pages.
6. Refined About and Team experiences.
7. An elegant pricing page.
8. A properly treated gallery.
9. An editorial blog experience.
10. A polished contact journey.
11. A cohesive premium footer.
12. Consistent visual design across every existing route.
13. Mobile-first responsive behavior.
14. Restrained, smooth interactions.
15. Preserved business functionality.
16. Accurate, nonfabricated content.
17. Appropriate technical SEO.
18. Accessibility and performance improvements.
19. Completed regression validation.
20. A preview suitable for stakeholder review.

### Final completion report

At completion, provide:

- A concise summary of what was redesigned.
- An inventory of pages completed.
- Confirmation of functionality preserved.
- Confirmation of responsive breakpoints tested.
- Actual test results.
- Any unresolved technical limitations.
- Any published business claims requiring client verification.
- The accessible preview link.
- Confirmation that production settings and data remain unchanged.

Do not claim completion until all accessible pages and core workflows have been reviewed.

---

# FINAL CREATIVE DIRECTION

The goal is not to create the best-looking version of the existing template.

The goal is to make Ever Safe feel like an entirely new, premium digital brand.

When someone opens the website, they should immediately notice the exceptional typography, photography, composition, clean navigation, confident messaging and fluid experience.

The design should make the business appear organized, dependable, contemporary and sophisticated, without inventing facts or credentials.

This work will be showcased in a professional digital-services portfolio. Its design and implementation quality must therefore be exceptional.

**Protect functionality. Transform presentation. Elevate every page. Verify everything.**

Proceed with the full end-to-end implementation without requesting routine design decisions. Make informed professional choices, preserve the established scope and complete the work through final testing and quality assurance.
