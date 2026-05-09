import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PageProps } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, ReactNode, useEffect, useState } from 'react';

const experience = [
    {
        company: 'Zen Companies Incorporated',
        role: 'Full Stack Developer',
        location: 'Cagayan de Oro City, Misamis Oriental',
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
        location: 'Cagayan de Oro City, Misamis Oriental',
        period: 'Jun 2025 — Aug 2025',
        bullets: [
            'Developed school portal features and helped integrate AI-powered learning tools using Laravel, FastAPI, LangChain, Ollama, and MySQL.',
            'Built and tested chat history, quiz generation, document-based learning, and session management features.',
            'Supported database schema design, API connections, frontend styling, and debugging.',
        ],
    },
];

type Project = {
    title: string;
    subtitle: string;
    period: string;
    stack: string[];
    repo?: string;
    live?: string;
    image?: string;
    bullets: string[];
};

const projects: Project[] = [
    {
        title: 'Zen Intent',
        subtitle: 'B2B Lead Generation Platform',
        period: 'Apr 2026 — Present',
        stack: ['Laravel', 'Inertia', 'React', 'TypeScript', 'Tailwind', 'Stripe', 'Sentry'],
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

const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
];

const skills = {
    Languages: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'C++', 'SQL', 'HTML', 'CSS'],
    'Frameworks & Tools': [
        'Laravel',
        'React',
        'Node.js',
        'PostgreSQL',
        'MySQL',
        'n8n',
        'LangChain',
        'Ollama',
        'Git',
        'Docker',
        'Postman',
        'GHL',
        'REST APIs',
    ],
};

type FlashProps = PageProps<{
    flash?: { contact_status?: string | null };
}>;

type Theme = 'light' | 'dark';

export default function Welcome() {
    const { flash } = usePage<FlashProps>().props;
    const sent = flash?.contact_status === 'sent';

    const [theme, setTheme] = useState<Theme>('dark');
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(isDark ? 'dark' : 'light');
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>('section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        const next: Theme = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        document.documentElement.classList.toggle('dark', next === 'dark');
        try {
            localStorage.setItem('theme', next);
        } catch {
            /* localStorage unavailable */
        }
    };

    const form = useForm({
        name: '',
        email: '',
        message: '',
    });

    useEffect(() => {
        if (sent) form.reset();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sent]);

    const submit = (e: FormEvent) => {
        e.preventDefault();
        form.post(route('contact.store'), {
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title="Jean Maverick Dela Cruz — Portfolio" />

            <div className="min-h-screen bg-white font-sans text-stone-700 antialiased transition-colors dark:bg-stone-950 dark:text-stone-200">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 overflow-hidden"
                >
                    <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-300/30 blur-3xl dark:bg-brand-500/20" />
                    <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-amber-300/20 blur-3xl dark:bg-amber-500/10" />
                </div>

                <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-24">
                    <header
                        className={`sticky top-4 z-40 mb-16 flex items-center justify-between transition-all duration-300 ${
                            scrolled
                                ? 'rounded-2xl border border-stone-200/80 bg-white/70 px-6 py-4 shadow-sm backdrop-blur-md dark:border-stone-800/80 dark:bg-stone-950/70'
                                : 'border border-transparent'
                        }`}
                    >
                        <a
                            href="#top"
                            className="font-mono text-sm tracking-widest text-brand-600 dark:text-brand-400"
                        >
                            JM.DC
                        </a>
                        <div className="flex items-center gap-6">
                            <nav className="hidden gap-8 text-sm sm:flex">
                                {navItems.map((item) => {
                                    const isActive = activeSection === item.id;
                                    return (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className={`transition ${
                                                isActive
                                                    ? 'text-brand-600 dark:text-brand-400'
                                                    : 'text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white'
                                            }`}
                                        >
                                            {item.label}
                                        </a>
                                    );
                                })}
                            </nav>
                            <ThemeToggle theme={theme} onToggle={toggleTheme} />
                        </div>
                    </header>

                    <section
                        id="top"
                        className="grid items-center gap-12 sm:grid-cols-[auto,1fr]"
                    >
                        <div className="relative mx-auto sm:mx-0">
                            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-brand-500 via-amber-400 to-yellow-300 opacity-70 blur" />
                            <img
                                src="/images/profile-photo.jpg"
                                alt="Jean Maverick Dela Cruz"
                                className="relative h-44 w-44 rounded-full object-cover ring-4 ring-white dark:ring-stone-950 sm:h-52 sm:w-52"
                            />
                        </div>
                        <div>
                            <p className="mb-3 font-mono text-sm text-brand-600 dark:text-brand-400">
                                Hi, my name is
                            </p>
                            <h1 className="text-4xl font-semibold tracking-tight text-stone-900 dark:text-white sm:text-5xl">
                                Jean Maverick Dela Cruz
                            </h1>
                            <h2 className="mt-2 text-2xl font-medium text-stone-700 dark:text-stone-300 sm:text-3xl">
                                Full Stack Developer.
                            </h2>
                            <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-600 dark:text-stone-400">
                                I build full-stack web apps that ship to real users — from a
                                Stripe-billed lead-generation platform at Zen Intent, to
                                AI-powered school portals on LangChain and Ollama, to
                                BERT-based NLP research on cyberbullying detection. Based in
                                Cagayan de Oro City, Philippines.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <Button asChild size="lg">
                                    <a href="#contact">Get in touch</a>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-brand-500/60 bg-brand-50 text-brand-700 hover:bg-brand-100 hover:text-brand-700 dark:bg-brand-500/10 dark:text-brand-200 dark:hover:bg-brand-500/20 dark:hover:text-brand-100"
                                >
                                    <a
                                        href="/jean-maverick-dela-cruz-cv.pdf"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Download CV
                                    </a>
                                </Button>
                                <Button asChild size="lg" variant="outline">
                                    <a
                                        href="https://github.com/mabeyy"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </Button>
                                <Button asChild size="lg" variant="outline">
                                    <a
                                        href="https://linkedin.com/in/jeanmaverickdelacruz"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        LinkedIn
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </section>

                    <section id="about" className="mt-28">
                        <SectionHeading title="About" />
                        <div className="mt-8 space-y-4 text-stone-600 dark:text-stone-300">
                            <p>
                                I&apos;m a full-stack developer at{' '}
                                <span className="text-stone-900 dark:text-white">
                                    Zen Companies
                                </span>{' '}
                                and a Computer Science senior at the{' '}
                                <span className="text-stone-900 dark:text-white">
                                    University of Science and Technology of Southern
                                    Philippines
                                </span>
                                , graduating June 2026. I&apos;m happiest when a rough product
                                idea turns into a polished, reliable web app the kind real
                                people use every day.
                            </p>
                            <p>
                                My recent work sits at the intersection of{' '}
                                <span className="text-stone-900 dark:text-white">
                                    full-stack engineering and applied AI
                                </span>
                                : Laravel + Inertia + React with Stripe Cashier billing and
                                Sentry-traced production at Zen Intent, FastAPI services
                                calling local LLMs through Ollama for school-portal AI tools,
                                and BERT-based multi-task models for cyberbullying detection.
                                I&apos;m comfortable across the stack — schema design, API
                                integrations, auth flows, payments, and UI polish.
                            </p>
                            <p>
                                Coursework I lean on: Data Structures &amp; Algorithms,
                                Object-Oriented Programming, Database Management Systems, Web
                                Development, Software Engineering, Artificial Intelligence,
                                and Machine Learning.
                            </p>
                        </div>
                    </section>

                    <section id="experience" className="mt-28">
                        <SectionHeading title="Experience" />
                        <div className="mt-8 space-y-10">
                            {experience.map((job) => (
                                <article
                                    key={job.company}
                                    className="rounded-2xl border border-stone-200 bg-white/60 p-6 backdrop-blur transition hover:border-stone-300 dark:border-stone-800 dark:bg-stone-900/40 dark:hover:border-stone-700"
                                >
                                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                                                {job.role}{' '}
                                                <span className="text-brand-600 dark:text-brand-400">
                                                    @ {job.company}
                                                </span>
                                            </h3>
                                            <p className="text-sm text-stone-500 dark:text-stone-400">
                                                {job.location}
                                            </p>
                                        </div>
                                        <p className="font-mono text-xs text-stone-500 dark:text-stone-400 sm:text-right">
                                            {job.period}
                                        </p>
                                    </div>
                                    <ul className="mt-4 space-y-2 text-sm text-stone-600 dark:text-stone-300">
                                        {job.bullets.map((b) => (
                                            <li key={b} className="flex gap-3">
                                                <span className="mt-1 text-brand-600 dark:text-brand-400">▹</span>
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section id="projects" className="mt-28">
                        <SectionHeading title="Projects" />
                        <div className="mt-8 grid gap-6">
                            {projects.map((p) => (
                                <article
                                    key={p.title}
                                    className="group overflow-hidden rounded-2xl border border-stone-200 bg-white/60 backdrop-blur transition hover:border-brand-500/60 dark:border-stone-800 dark:bg-stone-900/40"
                                >
                                    {p.image && (
                                        <a
                                            href={p.live ?? p.repo ?? '#'}
                                            target={p.live || p.repo ? '_blank' : undefined}
                                            rel="noreferrer"
                                            className="block aspect-[16/9] overflow-hidden border-b border-stone-200 bg-stone-100 dark:border-stone-800 dark:bg-stone-900"
                                        >
                                            <img
                                                src={p.image}
                                                alt={`${p.title} screenshot`}
                                                loading="lazy"
                                                className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                                            />
                                        </a>
                                    )}
                                    <div className="p-6">
                                    <p className="font-mono text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400">
                                        {p.subtitle}
                                    </p>
                                    <div className="mt-1 flex flex-wrap items-baseline justify-between gap-2">
                                        <h3 className="text-xl font-semibold text-stone-900 dark:text-white">
                                            {p.title}
                                        </h3>
                                        <span className="font-mono text-xs text-stone-500 dark:text-stone-400">
                                            {p.period}
                                        </span>
                                    </div>
                                    {(p.repo || p.live) && (
                                        <div className="mt-3 flex flex-wrap items-center gap-4">
                                            {p.live && (
                                                <a
                                                    href={p.live}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm text-brand-600 transition hover:text-brand-500 dark:text-brand-300 dark:hover:text-brand-200"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        aria-hidden
                                                        className="h-4 w-4 fill-none stroke-current"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M14 3h7v7" />
                                                        <path d="M10 14 21 3" />
                                                        <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                                                    </svg>
                                                    {p.live.replace(/^https?:\/\//, '')}
                                                </a>
                                            )}
                                            {p.repo && (
                                                <a
                                                    href={p.repo}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm text-brand-600 transition hover:text-brand-500 dark:text-brand-300 dark:hover:text-brand-200"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        aria-hidden
                                                        className="h-4 w-4 fill-current"
                                                    >
                                                        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.18c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.91 10.91 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5Z" />
                                                    </svg>
                                                    {p.repo.replace(/^https?:\/\/(www\.)?/, '')}
                                                </a>
                                            )}
                                        </div>
                                    )}
                                    <ul className="mt-4 space-y-2 text-sm text-stone-600 dark:text-stone-300">
                                        {p.bullets.map((b) => (
                                            <li key={b} className="flex gap-3">
                                                <span className="mt-1 text-brand-600 dark:text-brand-400">▹</span>
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {p.stack.map((s) => (
                                            <span
                                                key={s}
                                                className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 px-3 py-1 font-mono text-xs text-stone-600 dark:border-stone-700 dark:text-stone-300"
                                            >
                                                <TechIcon name={s} />
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section id="skills" className="mt-28">
                        <SectionHeading title="Skills" />
                        <div className="mt-8 grid gap-8 sm:grid-cols-2">
                            {Object.entries(skills).map(([group, items]) => (
                                <div key={group}>
                                    <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-brand-600 dark:text-brand-400">
                                        {group}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((item) => (
                                            <span
                                                key={item}
                                                className="inline-flex items-center gap-2 rounded-md border border-stone-200 bg-white px-3 py-1.5 text-sm text-stone-700 dark:border-stone-800 dark:bg-stone-900/60 dark:text-stone-200"
                                            >
                                                <TechIcon name={item} />
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* <section id="education" className="mt-28">
                        <SectionHeading title="Education" />
                        <div className="mt-8 rounded-2xl border border-stone-200 bg-white/60 p-6 dark:border-stone-800 dark:bg-stone-900/40">
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                                        University of Science and Technology of Southern
                                        Philippines
                                    </h3>
                                    <p className="text-sm text-stone-500 dark:text-stone-400">
                                        Bachelor of Science in Computer Science · Cagayan de Oro
                                        City, Misamis Oriental
                                    </p>
                                </div>
                                <p className="font-mono text-xs text-stone-500 dark:text-stone-400 sm:text-right">
                                    Expected Jun 2026
                                </p>
                            </div>
                        </div>
                    </section> */}

                    <section id="contact" className="mt-28">
                        <div className="text-center">
                            <p className="font-mono text-sm uppercase tracking-widest text-brand-600 dark:text-brand-400">
                                What&apos;s Next
                            </p>
                            <h2 className="mt-3 text-3xl font-semibold text-stone-900 dark:text-white sm:text-4xl">
                                Let&apos;s build something.
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-stone-600 dark:text-stone-400">
                                I&apos;m open to internships, freelance gigs, and full-time roles
                                in full-stack development and applied AI. Drop a message below
                                or email{' '}
                                <a
                                    href="mailto:delacruz.jeanmaverick@gmail.com"
                                    className="text-brand-600 underline-offset-4 hover:underline dark:text-brand-300"
                                >
                                    delacruz.jeanmaverick@gmail.com
                                </a>
                                .
                            </p>
                        </div>

                        <Card className="mx-auto mt-10 max-w-xl border-stone-200 bg-white/60 backdrop-blur dark:border-stone-800 dark:bg-stone-900/40">
                            <CardContent className="p-6">
                                <form onSubmit={submit} className="space-y-4">
                                    {sent && (
                                        <div className="rounded-md border border-emerald-500/40 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200">
                                            Thanks — your message has been sent. I&apos;ll
                                            reply soon.
                                        </div>
                                    )}

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <FormField
                                            label="Name"
                                            htmlFor="name"
                                            error={form.errors.name}
                                        >
                                            <Input
                                                id="name"
                                                type="text"
                                                autoComplete="name"
                                                value={form.data.name}
                                                onChange={(e) =>
                                                    form.setData('name', e.target.value)
                                                }
                                                placeholder="Your name"
                                            />
                                        </FormField>
                                        <FormField
                                            label="Email"
                                            htmlFor="email"
                                            error={form.errors.email}
                                        >
                                            <Input
                                                id="email"
                                                type="email"
                                                autoComplete="email"
                                                value={form.data.email}
                                                onChange={(e) =>
                                                    form.setData('email', e.target.value)
                                                }
                                                placeholder="you@example.com"
                                            />
                                        </FormField>
                                    </div>

                                    <FormField
                                        label="Message"
                                        htmlFor="message"
                                        error={form.errors.message}
                                    >
                                        <Textarea
                                            id="message"
                                            rows={5}
                                            value={form.data.message}
                                            onChange={(e) =>
                                                form.setData('message', e.target.value)
                                            }
                                            placeholder="Tell me about your project, role, or idea…"
                                        />
                                    </FormField>

                                    <div className="flex items-center justify-end gap-3 pt-1">
                                        <Button type="submit" disabled={form.processing}>
                                            {form.processing ? 'Sending…' : 'Send message'}
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </section>

                    <footer className="mt-24 flex flex-col items-center gap-2 border-t border-stone-200 pt-8 text-xs text-stone-500 dark:border-stone-800 dark:text-stone-500">
                        <p>+63 906 471 9896 · Cagayan de Oro City, Philippines</p>
                        <p>
                            Built with Laravel, Inertia, and React. Designed &amp; coded by Jean
                            Maverick Dela Cruz.
                        </p>
                    </footer>
                </div>
            </div>
        </>
    );
}

function ThemeToggle({
    theme,
    onToggle,
}: {
    theme: Theme;
    onToggle: () => void;
}) {
    const isDark = theme === 'dark';
    const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    return (
        <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={onToggle}
            aria-label={label}
            title={label}
        >
            {isDark ? (
                <svg
                    viewBox="0 0 24 24"
                    aria-hidden
                    className="fill-none stroke-current"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
            ) : (
                <svg
                    viewBox="0 0 24 24"
                    aria-hidden
                    className="fill-none stroke-current"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                </svg>
            )}
        </Button>
    );
}

const techIcons: Record<string, { slug?: string; color?: string }> = {
    // Languages
    Python: { slug: 'python', color: '3776AB' },
    JavaScript: { slug: 'javascript', color: 'F7DF1E' },
    TypeScript: { slug: 'typescript', color: '3178C6' },
    PHP: { slug: 'php', color: '777BB4' },
    'C++': { slug: 'cplusplus', color: '00599C' },
    HTML: { slug: 'html5', color: 'E34F26' },
    CSS: { slug: 'css', color: '1572B6' },
    SQL: {},

    // Frameworks & Tools
    Laravel: { slug: 'laravel', color: 'FF2D20' },
    React: { slug: 'react', color: '61DAFB' },
    'Node.js': { slug: 'nodedotjs', color: '5FA04E' },
    PostgreSQL: { slug: 'postgresql', color: '4169E1' },
    MySQL: { slug: 'mysql', color: '4479A1' },
    n8n: { slug: 'n8n', color: 'EA4B71' },
    LangChain: { slug: 'langchain', color: '1C3C3C' },
    Ollama: { slug: 'ollama' },
    Git: { slug: 'git', color: 'F05032' },
    Docker: { slug: 'docker', color: '2496ED' },
    Postman: { slug: 'postman', color: 'FF6C37' },
    GHL: {},
    'REST APIs': {},

    // Project stacks
    Inertia: { slug: 'inertia', color: '9553E9' },
    Tailwind: { slug: 'tailwindcss', color: '06B6D4' },
    Stripe: { slug: 'stripe', color: '635BFF' },
    Sentry: { slug: 'sentry', color: '8075E1' },
    BERT: {},
    'Multi-Task Learning': {},
    NLP: {},
};

function TechIcon({ name }: { name: string }) {
    const cfg = techIcons[name];
    const [errored, setErrored] = useState(false);

    if (!cfg?.slug || errored) {
        return (
            <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full bg-stone-400 dark:bg-stone-500"
            />
        );
    }

    const colorPart = cfg.color ? `/${cfg.color}` : '';
    return (
        <img
            src={`https://cdn.simpleicons.org/${cfg.slug}${colorPart}`}
            alt=""
            aria-hidden
            loading="lazy"
            className="h-3.5 w-3.5"
            onError={() => setErrored(true)}
        />
    );
}

function SectionHeading({ title }: { title: string }) {
    return (
        <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold text-stone-900 dark:text-white sm:text-3xl">
                {title}
            </h2>
            <span className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
        </div>
    );
}

function FormField({
    label,
    error,
    htmlFor,
    children,
}: {
    label: string;
    error?: string;
    htmlFor: string;
    children: ReactNode;
}) {
    return (
        <div className="space-y-1.5">
            <Label
                htmlFor={htmlFor}
                className="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400"
            >
                {label}
            </Label>
            {children}
            {error && (
                <p className="text-xs text-destructive">{error}</p>
            )}
        </div>
    );
}
