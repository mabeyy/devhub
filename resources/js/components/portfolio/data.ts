import { Project } from './types';

export const experience = [
    {
        company: 'Zen Companies Incorporated',
        role: 'Full Stack Developer',
        location: 'Cagayan de Oro City, PH',
        period: 'Jan 2026 — Present',
        bullets: [
            'Full Stack Developer with 10 months of production experience at Zen Companies, owning features end to end across four live products: Zen Intent (B2B lead-gen SaaS), ViralTube Exploder (AI thumbnail and title generator), Zen Marine Charters (luxury yacht booking site), and ZenAnalytics (internal analytics hub).',
            'Work across Laravel, React/Next.js, TypeScript, and Supabase/Postgres, with Stripe, GHL CRM, and Sentry integrations. Shipped 560+ commits, built ZenAnalytics from scratch to report signups and revenue for every product in one dashboard, and hardened ViralTube for PCI SAQ A with a nonce-based CSP and PII scrubbing.',
            'Bring a product-minded, ship-it-whole approach: from the signup and checkout flow to the admin console and the alert that fires when it breaks, so teams get features that launch fast and stay reliable in production.',
        ],
    },
    {
        company: 'CK Children’s Publishing',
        role: 'Web Developer Intern',
        location: 'Cagayan de Oro City, PH',
        period: 'Jun 2025 — Aug 2025',
        bullets: [
            'Developed school portal features and helped integrate AI-powered learning tools using Laravel, FastAPI, LangChain, Ollama, and MySQL.',
            'Built and tested chat history, quiz generation, document-based learning, and session management features.',
            'Supported database schema design, API connections, frontend styling, and debugging.',
        ],
    },
];

export const projects: Project[] = [
    {
        title: 'Zen Intent',
        subtitle: 'B2B Lead Generation Platform',
        company: 'Zen Companies',
        period: 'Apr 2026 — Present',
        stack: [
            'Laravel',
            'Inertia',
            'React',
            'TypeScript',
            'Tailwind',
            'Stripe',
            'GHL',
            'n8n',
            'Sentry',
        ],
        live: 'https://app.zenintent.io',
        image: '/images/zen-companies/zen-intent.webp',
        bullets: [
            'Owned the activation funnel: Google OAuth via Socialite, Hunter.io email checks with per-email rate caps, a Stripe Cashier onboarding wizard, a resumable scene-based dashboard tour, and an activity-based onboarding checklist.',
            'Built the lead workspace: a paginated leads table with batch grouping, a lead detail view with per-lead intelligence unlocks (plain-English rewrites via n8n), favourites and folders, side-by-side comparison, and CSV import/export with enrichment for imported leads.',
            'Shipped integrations and platform features: GHL contact sync and Help & Feedback, Meta Pixel + Conversions API, a testimonial moderation pipeline with a Creatives role, release announcements, and an MCP server with Passport consent so AI apps can read a customer’s leads.',
        ],
    },
    {
        title: 'ViralTube Exploder',
        subtitle: 'AI YouTube Thumbnail & Title Generator',
        company: 'Zen Companies',
        period: 'Aug 2026 — Present',
        stack: [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind',
            'Supabase',
            'Stripe',
            'GHL',
            'Sentry',
            'Vercel',
        ],
        live: 'https://viraltube.app',
        image: '/images/zen-companies/viraltube.webp',
        bullets: [
            'Built the landing page (topographic hero, a self-scrolling explore wall) and the Studio: generator, Copy, Blend, Titles, and Identity Forge flows with resumable runs, per-tab drafts, a generations dock, and driver.js guided tours.',
            'Hardened billing and growth: price checks before every paid action, plan-change and credit-grant fixes, transactional billing emails, a referral program with abuse caps, and GHL lifecycle tagging.',
            'Built the admin console and compliance work: role-based admin with audited credit grants, a sales-rep console, churn and funnel views, PCI SAQ A hardening, a nonce-based CSP, PII scrubbing, and Sentry alerts for cron and generation failures.',
        ],
    },
    {
        title: 'Zen Marine Charters',
        subtitle: 'Luxury Yacht Charter Marketing Site & Booking Builder',
        company: 'Zen Companies',
        period: 'Jun 2026 — Present',
        stack: [
            'React',
            'TypeScript',
            'Vite',
            'Tailwind',
            'shadcn/ui',
            'tRPC',
            'Supabase',
            'Drizzle',
            'Sentry',
            'Vercel',
        ],
        live: 'https://www.zenmarinecharter.com',
        image: '/images/zen-companies/zen-marine.webp',
        bullets: [
            'Redesigned the marketing site in a luxury style: a new header with scroll progress, curated Experiences and Events pages, a Destinations section, a vessel spec sheet, a Google-linked testimonial carousel, and an SEO Journal of 8 photo-rich posts.',
            'Shipped a 5-step booking builder with hash deep-links and a sticky discount banner, plus validation on the portal and sign-up forms, a two-step newsletter signup with SMS consent, prerendered legal pages, and a floating hiring badge.',
        ],
    },
    {
        title: 'ZenAnalytics',
        subtitle: 'Cross-Product Analytics Hub',
        company: 'Zen Companies',
        period: 'Oct 2026 — Present',
        stack: [
            'React',
            'TypeScript',
            'Vite',
            'Tailwind',
            'Supabase',
            'PostgreSQL',
        ],
        live: 'https://zenanalytics-five.vercel.app',
        image: '/images/zen-companies/zenanalytics.webp',
        bullets: [
            'Built the internal analytics hub from scratch: an ingestion API for events, entities, and identify calls with per-key rate limits, and an Overview that shows signups, bookings, and net revenue for every Zen product side by side.',
            'Shipped Marketing, Funnels, Customers, Insights, Alerts, Revenue, and Data Health views on Postgres read functions, with BigQuery sync for ad and GA4 metrics, company-only Google sign-in with roles, privacy tools, email reports, and an instance provisioning script.',
            'Connected ViralTube Exploder to the hub: signups, revenue, generations, and credit events, with a backfill from Stripe history.',
        ],
    },
];

export const personalProjects: Project[] = [
    {
        title: 'The Commons Club',
        subtitle: 'Pickleball Court Booking Platform',
        period: 'Aug 2026 — Present',
        stack: [
            'Laravel',
            'Inertia',
            'React',
            'TypeScript',
            'Tailwind',
            'Vite',
            'shadcn/ui',
        ],
        live: 'https://thecommonsclub.cc',
        image: '/images/the-commons.jpg',
        imageClassName: 'object-center',
        bullets: [
            'Self-initiated end-to-end build for a pickleball club — public court schedule with real-time availability, a multi-step booking flow with payment, and self-service booking lookup, reschedule, and confirmation.',
            'Shipped a full admin back office: availability management, blocked dates and time slots, manual payment verification and history, business profile settings, and SMS + email notifications with Google Calendar sync.',
            'Handled auth end-to-end with Laravel Fortify — email verification, two-factor challenge, and passkeys — on Laravel 13 / PHP 8.4 with an Inertia + React 19 front end.',
        ],
    },
    {
        title: 'SA-MTL for Cyberbullying Detection',
        subtitle: 'Undergraduate Thesis',
        period: 'Jan 2026 — Apr 2026',
        stack: ['Python', 'BERT', 'Multi-Task Learning', 'NLP'],
        repo: 'https://github.com/mabeyy/mtl-bert',
        image: '/images/sa-mtl.png',
        bullets: [
            'Developed a BERT-based multi-task learning framework for detecting sarcasm, harmful intent, and emotional tone in online text.',
            'Trained and evaluated machine learning models using classification metrics and comparative baselines.',
            'Applied NLP techniques to improve cyberbullying detection in context-dependent and sarcastic text.',
        ],
    },
];

export const navItems = [
    { id: 'top', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Company' },
    { id: 'personal', label: 'Personal' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
];

export const skills = {
    Languages: [
        'TypeScript',
        'JavaScript',
        'PHP',
        'Python',
        'SQL',
        'HTML',
        'CSS',
        'C++',
    ],
    Frontend: ['React', 'Next.js', 'Tailwind CSS', 'Vite'],
    Backend: ['Laravel', 'Node.js', 'Express', 'REST APIs'],
    Databases: ['PostgreSQL', 'MySQL'],
    'AI & Automation': ['LangChain', 'Ollama', 'n8n', 'GHL'],
    'DevOps & Tooling': ['Git', 'Docker', 'Vercel', 'Postman'],
};
