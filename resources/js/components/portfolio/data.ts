import { Project } from './types';

export const experience = [
    {
        company: 'Zen Companies Incorporated',
        role: 'Full Stack Developer',
        location: 'Cagayan de Oro City, PH',
        period: 'Jan 2026 — Present',
        bullets: [
            'Own end-to-end delivery across Zen Intent (B2B lead-gen SaaS) and Zen Marine Charters (luxury yacht booking site) — frontend, backend, integrations, and database.',
            'Ship activation funnels and operational surfaces: Stripe Cashier checkouts, OAuth + email-verified signup, scene-based product tours, and admin moderation pipelines.',
            'Wire third-party integrations and production observability — Stripe, GHL CRM, Hunter.io, Meta Pixel + Conversions API, and Sentry across frontend + backend.',
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
        title: 'Zen Marine Charters',
        subtitle: 'Luxury Yacht Charter Marketing Site & Booking Builder',
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
        image: '/images/zen-marine.webp',
        bullets: [
            'Built and launched the marketing site — luxe editorial header with scroll progress, themed Charters / Experiences / Events / Destinations pages, Embla carousels, vessel spec sheet, a 7-post SEO Journal, and prerendered legal & cancellation pages.',
            'Shipped a 5-step booking builder (hash deep-links, sticky discount banner, party/guest stepper, review summary) and a customer portal with email/name/phone validation + a multi-step newsletter signup with SMS consent.',
        ],
    },
    {
        title: 'Zen Intent',
        subtitle: 'B2B Lead Generation Platform',
        period: 'Apr 2026 — Present',
        stack: [
            'Laravel',
            'Inertia',
            'React',
            'TypeScript',
            'Tailwind',
            'Stripe',
            'GHL',
            'Sentry',
        ],
        live: 'https://app.zenintent.io',
        image: '/images/zen-intent.png',
        bullets: [
            'Owned the activation funnel — split-layout auth with intent-aware Google OAuth (Socialite), Hunter.io email gate with per-email rate caps, a per-bucket Stripe Cashier onboarding wizard, and a resumable scene-based dashboard guided tour with fast/slow-path diversions.',
            'Rebuilt the daily product surfaces — paginated leads dashboard with sort + Email column + industry × location batch grouping, Google-review-labeled lead detail with intent-score tooltips, unified one-time + monthly Pricing, a branded sidebar with lead-pool widget, and a customer review + admin moderation pipeline.',
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
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
];

export const skills = {
    Languages: [
        'Python',
        'JavaScript',
        'TypeScript',
        'PHP',
        'C++',
        'SQL',
        'HTML',
        'CSS',
    ],
    'Frameworks & Tools': [
        'Laravel',
        'React',
        'Next.js',
        'Node.js',
        'Express',
        'Tailwind CSS',
        'PostgreSQL',
        'MySQL',
        'n8n',
        'LangChain',
        'Ollama',
        'Vite',
        'Git',
        'Docker',
        'Vercel',
        'Postman',
        'GHL',
        'REST APIs',
    ],
};
