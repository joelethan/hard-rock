# Hard Rock Model Farm - Design Guidelines

## Design Approach
**Reference-Based:** Drawing inspiration from Stone Barns Center and Polyface Farm, emphasizing natural, welcoming aesthetics that balance professionalism with rural authenticity. Focus on clean, modern layouts with organic elements and warm photography.

## Typography System
- **Primary Font:** Montserrat (headings, navigation, CTAs)
  - Hero Headline: 700 weight, 3.5rem (desktop) / 2rem (mobile)
  - Section Headers: 600 weight, 2.5rem (desktop) / 1.75rem (mobile)
  - Card Titles: 600 weight, 1.5rem
  
- **Secondary Font:** Open Sans (body text, descriptions)
  - Body Text: 400 weight, 1rem, 1.6 line-height
  - Supporting Text: 400 weight, 0.875rem

## Layout System
**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 (desktop) / py-12 (mobile)
- Card spacing: p-6 to p-8
- Element gaps: gap-6 to gap-8

**Container Structure:**
- Max-width: max-w-7xl for full sections
- Content sections: max-w-6xl
- Text content: max-w-4xl

## Page Architecture

### Homepage
1. **Hero Section** (80vh)
   - Full-width hero image showing farm landscape/activities
   - Centered overlay with lion logo, tagline "Where Nature Speaks Volume"
   - Primary CTA button with blurred background
   - Subtle scroll indicator

2. **Mission Statement** (single column, centered)
   - "Unity And Cooperation Towards Development" headline
   - Brief introductory paragraph (max-w-3xl)

3. **Services Grid** (3-column desktop, 1-column mobile)
   - Five service cards: Agro-Tourism, Agriculture & Livestock, Gardens for Recreation, Rehabilitation Services, Horticulture
   - Each card: representative image, icon, title, brief description, "Learn More" link
   - Subtle hover elevation effect

4. **Featured Programs** (2-column layout)
   - Orchard Wing and Culture & Nature Therapy Ambassador programs
   - Image + text pairing with asymmetric layout

5. **Photo Gallery Preview** (masonry grid, 4-column desktop)
   - 8-12 curated images showcasing facilities and activities
   - Click to expand full gallery

6. **Contact & Location CTA**
   - Split layout: contact form (left) + farm details/map placeholder (right)
   - Phone: +256 / 0776 630 948
   - Email: richardroyals98@gmail.com

### Service Pages
- Hero banner (40vh) with service-specific imagery
- Service overview section
- Benefits/features grid (3-column)
- Image gallery specific to service
- Related services sidebar
- Contact CTA footer

### About Page
- Mission & values section with supporting imagery
- Team/staff introduction (if applicable)
- Farm history timeline
- Certifications/partnerships

### Contact Page
- Large contact form
- Farm information card
- Operating hours
- Directions/map integration

## Component Library

**Navigation:**
- Sticky header with logo (left), navigation links (center), contact button (right)
- Mobile: Hamburger menu
- Subtle shadow on scroll

**Cards:**
- Rounded corners (rounded-lg)
- Soft shadow (shadow-md), elevated on hover (shadow-xl)
- Image top, content bottom with p-6 padding
- Subtle border using neutral tones

**Buttons:**
- Primary: Forest green background, white text, rounded-md
- Secondary: Outlined with forest green border
- Hover: Slight scale transform (scale-105)
- When on images: backdrop-blur-sm background

**Forms:**
- Input fields with subtle borders, focused state with forest green accent
- Consistent padding (p-3)
- Clear labels above inputs
- Error states with gentle validation

**Footer:**
- 4-column layout (desktop): About, Services, Quick Links, Contact
- Logo and mission statement
- Social media links
- Copyright with earth brown text
- Newsletter signup integrated

## Images
**Hero Image:** Large landscape photograph of the farm - rolling fields, livestock, or greenhouse facilities. Should convey scale, natural beauty, and agricultural activity. Position: Full-width background, overlaid with centered content.

**Service Images:** Individual photography for each service area - visitors in agro-tourism activities, livestock in pastures, therapy gardens, rehabilitation programs, horticultural operations. Position: Top of service cards and service page headers.

**Gallery Images:** Mix of facility shots, program activities, seasonal changes, and the Hard Rock lion logo in context. Position: Masonry grid on homepage, full gallery page with lightbox functionality.

**About Images:** Team photos, historical farm images, aerial views. Position: Inline with content sections.

## Design Patterns
- Organic shapes and rounded corners throughout
- Natural texture overlays (subtle)
- Generous whitespace for breathing room
- Consistent card-based information architecture
- Photography-first approach with authentic farm imagery
- Soft transitions and minimal animations
- Earth-tone accents complementing the forest green primary

**Accessibility:**
- Minimum contrast ratio 4.5:1 for text
- Focus states clearly visible
- Form labels always present
- Alt text for all images
- Keyboard navigation support