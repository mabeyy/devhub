import { Project } from './types';

export const experience = [
    {
        company: 'Zen Companies Incorporated',
        role: 'Full Stack Developer',
        location: 'Cagayan de Oro City, PH',
        period: 'Jan 2026 — Present',
        bullets: [
            'Develop and maintain full-stack web applications spanning frontend interfaces, backend services, API integrations, and database operations.',
            'Build responsive features and streamline user workflows to improve system usability and user experience.',
            'Resolve bugs, optimize performance, and support testing to improve application reliability.',
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
            'Built the marketing site from staging to live launch — luxe editorial header with scroll progress, themed Charters / Experiences / Events / Destinations pages, Embla testimonial and gallery carousels, vessel spec sheet, a 7-post SEO Journal, and prerendered legal & cancellation pages indexed for search.',
            'Shipped a 5-step booking builder with hash deep-links from CTAs, sticky discount banner, party/guest stepper, and review summary; tightened the customer portal with email/name/phone validation and a multi-step newsletter signup (email → phone + SMS consent).',
            'Wired the production stack — Sentry-instrumented React 19 + Vite build deploying to Vercel, generated sitemap and prerender pipeline, a branded 404, and a Google Business Profile footer with labeled dock & mailing addresses — moving the site from staging into a live, indexable brand surface.',
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
            'Owned the activation funnel end-to-end — split-layout auth with intent-aware Google OAuth via Laravel Socialite, Hunter.io email-verification gating with per-email rate caps, a redesigned per-bucket onboarding wizard wired to Stripe Cashier, and a resumable multi-step dashboard guided tour with scene-based lifecycle and fast/slow-path diversions.',
            'Rebuilt the daily product surfaces — paginated leads dashboard with sticky headers, sort controls, an Email column, and batches grouped by industry × location with sub-batches; Google-review-labeled lead detail with intent-score tooltips; a unified one-time + monthly Pricing page; a branded sidebar with lead-pool widget; and a customer review collection + admin moderation pipeline.',
            'Hardened production for growth — Sentry on frontend + backend, Meta Pixel + Conversions API for funnel tracking, GHL phone sync in E.164 for SMS workflows, soft-deleted users that preserve billing & audit history, control-char-stripping input filters across forms, and branded transactional emails — fewer prod surprises, more reliable signal.',
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
