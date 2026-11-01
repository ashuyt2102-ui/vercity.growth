# VERCITY GROWTH — Premium 3D Digital Marketing Agency

An award-winning, production-grade 3D digital marketing agency portfolio engineered for **VERCITY GROWTH** ("We Engineer Digital Growth").

Built with a dark, high-contrast, futuristic design language for VERCITY GROWTH.

---

## 🚀 Key Highlights & Architecture

- **Next.js App Router (16+) & React 19**: Server Components, streaming prerender, edge routing, optimized assets.
- **Three.js & React Three Fiber + Drei**: Interactive 3D Growth Core sculpture reacting to cursor coordinate delta and ambient lighting.
- **TypeScript & Tailwind CSS**: Consistent design tokens, glassmorphism (`glass-panel`), radial dark vignettes, and futuristic gradients.
- **Framer Motion & Micro-interactions**: Smooth modal viewports, category filtering tabs, accordions, and magnetic transitions.
- **Robust End-to-End Contact Engine**:
  - Validated with **Zod** and **React Hook Form**.
  - Rate limiting & anti-spam honeypot protection.
  - Server-side persistence with **Supabase**.
  - Transactional HTML notification emails via **Resend**.
  - Celebratory confetti feedback upon verified dispatch.
- **Gemini-powered website assistant**:
  - Answers agency, service, and pricing questions using the site's configured information.
  - Consultation requests use the existing validated contact workflow.
  - The Gemini API key stays server-side; chat requests are validated and rate-limited.
- **Dedicated site pages**: Home, Services, Results, Stories, Pricing, About, Founders, and Contact each have a direct page route.
- **Centralized Data Layer**: All services, demo projects, pricing packages, FAQs, and agency info are cleanly separated under `/data`.

---

## 📂 Project Directory Structure

```text
vercity-growth/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Secure server-side enquiry handler (Supabase + Resend)
│   ├── globals.css              # Dark theme design tokens & glassmorphism classes
│   ├── layout.tsx               # Root layout with SEO metadata & JSON-LD Schema
│   ├── page.tsx                 # Main agency landing page
│   ├── robots.ts                # Dynamic robots.txt
│   └── sitemap.ts               # Dynamic XML sitemap
├── components/
│   ├── 3d/
│   │   └── GrowthCanvas.tsx     # React Three Fiber interactive 3D sculpture & particles
│   ├── Navbar.tsx               # Glass sticky navbar with mobile drawer
│   ├── Hero.tsx                 # Cinematic hero with 3D viewport
│   ├── Scene3D.tsx              # Dynamic SSR-safe 3D container
│   ├── TrustIntro.tsx           # Agency introduction & value propositions
│   ├── Services.tsx             # 6 Interactive services with expandable details drawer
│   ├── Portfolio.tsx            # Categorized portfolio with full-screen case-study previews
│   ├── CaseStudies.tsx          # Strategic growth pillars & truth metrics
│   ├── Pricing.tsx              # Transparent pricing cards with instant prefill CTA
│   ├── Process.tsx              # 4-step execution timeline
│   ├── About.tsx                # Agency DNA, mission, and philosophy
│   ├── Testimonials.tsx         # Client feedback carousel
│   ├── FAQ.tsx                  # Interactive accordion
│   ├── Contact.tsx              # Full enquiry form with validation & hotline channels
│   └── Footer.tsx               # Comprehensive agency footer with dynamic year
├── data/
│   ├── agency.ts                # Central brand, hotline, social, and location config
│   ├── faq.ts                   # Centralized FAQ items
│   ├── pricing.ts               # 4 Tiers (Starter, Growth, Scale, Custom)
│   ├── projects.ts              # 6 Case study architectures (Demo labelled)
│   ├── services.ts              # 6 Service definitions & deliverables
│   └── testimonials.ts          # Sample client reviews
├── lib/
│   ├── email.ts                 # Resend client helper
│   ├── supabase.ts              # Supabase admin client
│   ├── utils.ts                 # Classname merge utility
│   └── validations.ts           # Zod schema for form validation
├── .env.example                 # Environment configuration template
└── package.json
```

---

## 🛠️ Getting Started

### 1. Prerequisites
- Node.js `v18+` or `v20+` (Tested on `v24`)
- npm or pnpm

### 2. Installation

```bash
cd C:\Users\Admin\.gemini\antigravity\scratch\vercity-growth
npm install
```

### 3. Environment Setup

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Configure your credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

RESEND_API_KEY=re_your_resend_api_key
CONTACT_NOTIFICATION_EMAIL=admin@vercitygrowth.com
FROM_EMAIL=onboarding@resend.dev

# Google Gemini website assistant (required for live AI replies)
GEMINI_API_KEY=your-google-ai-studio-api-key
GEMINI_MODEL=gemini-2.5-flash
```

Add `GEMINI_API_KEY` to `.env.local` for local use and to the hosting provider's server-side environment variables for deployment. Do not use a `NEXT_PUBLIC_` prefix. Without the key, the contact form continues to work, but the AI assistant displays a configuration message instead of generating replies.

*(Note: If contact API keys are omitted in development mode, the form uses the existing simulated delivery behavior and logging.)*

### 4. Supabase Table Setup (SQL)

In your Supabase SQL Editor, run:

```sql
create table if not exists enquiries (
  id uuid default gen_random_uuid() primary key,
  full_name text not null,
  email text not null,
  phone text not null,
  company text not null,
  service text not null,
  package_plan text not null,
  budget text not null,
  project_details text not null,
  ip_address text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

### 5. Running the Application

```bash
# Development server:
npm run dev

# Production build & run:
npm run build
npm run start
```

Visit `http://localhost:3000` in your browser.
