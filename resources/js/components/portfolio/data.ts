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
            'Sentry',
        ],
        live: 'https://app.zenintent.io',
        image: '/images/zen-intent.png',
        bullets: [
            'Owned the end-to-end signup experience — split-layout auth, intent-aware Google OAuth via Laravel Socialite, email-verification gating, and a re-architected per-bucket onboarding wizard wired to Stripe Cashier — turning the front door into a guided funnel toward paid checkout.',
            'Shipped a branded sidebar and lead-pool widget with full light/dark theme support, unifying the global app chrome so auth, onboarding, and the leads dashboard finally feel like one product.',
            'Hardened the production stack: Sentry on frontend + backend for end-to-end error visibility, capture-usage instrumentation, branded transactional emails, and a stable production build — fewer prod surprises, faster shipping.',
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
