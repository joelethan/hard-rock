# Hard Rock Model Farm Website

## Project Overview
A professional showcase website for Hard Rock Farming and Development Association, featuring their diverse agricultural services including agro-tourism, livestock operations, recreational gardens, rehabilitation services, and horticulture programs. Based in East Africa (Uganda, Kenya, Tanzania).

## Tech Stack
- **Frontend**: React with TypeScript, Tailwind CSS, Shadcn UI components
- **Backend**: Express.js with in-memory storage
- **Routing**: Wouter for client-side routing
- **Data Fetching**: TanStack Query (React Query)
- **Styling**: Tailwind CSS with custom design tokens

## Key Features
- Hero section with farm branding and tagline "Where Nature Speaks Volume"
- Service showcase cards for 5 service areas
- Mission and values section
- Featured programs (Orchard Wing, Culture & Nature Therapy)
- Interactive photo gallery with lightbox
- Contact form with backend API integration
- Responsive mobile-first design

## Contact Information
- Phone: +256 / 0776 630 948
- Email: richardroyals98@gmail.com
- Location: East Africa Region (Uganda, Kenya, Tanzania)

## API Endpoints
- `POST /api/contact` - Submit contact form message
- `GET /api/contact` - Retrieve contact messages (admin)

## Design System
- Primary color: Forest green (#2E7D32 / HSL 140 55% 35%)
- Secondary color: Earth brown
- Accent color: Golden yellow (#FFC107)
- Typography: Montserrat (headings), Open Sans (body)
- Border radius: Small (rounded-md)
- Spacing: Consistent 4/6/8/12 unit system

## File Structure
- `/client/src/components/` - Reusable UI components
- `/client/src/pages/` - Page components
- `/server/` - Express backend
- `/shared/` - Shared types and schemas
