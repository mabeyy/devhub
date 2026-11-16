import { HeroPortrait } from '@/components/portfolio/parts';
import { Button } from '@/components/ui/button';
import { ArrowDownRight, Mail } from 'lucide-react';
import { useEffect, useState, type ReactNode } from 'react';

const roles = [
    'Full Stack Developer',
    'Laravel + React Engineer',
    'AI Automation Builder',
];

function RoleTypewriter() {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState(roles[0]);
    const [phase, setPhase] = useState<'hold' | 'deleting' | 'typing'>('hold');

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        const target = roles[index];
        const delay = phase === 'hold' ? 2400 : phase === 'deleting' ? 35 : 75;

        const timer = setTimeout(() => {
            if (phase === 'hold') {
                setPhase('deleting');
            } else if (phase === 'deleting') {
                if (text.length === 0) {
                    setIndex((i) => (i + 1) % roles.length);
                    setPhase('typing');
                } else {
                    setText(text.slice(0, -1));
                }
            } else if (text === target) {
                setPhase('hold');
            } else {
                setText(target.slice(0, text.length + 1));
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [text, phase, index]);

    return (
        <p className="flex h-5 items-center gap-3 font-mono text-xs uppercase leading-5 tracking-[0.25em] text-brand-600 dark:text-brand-400">
            <span
                aria-hidden
                className="h-px w-8 shrink-0 bg-brand-500/70 dark:bg-brand-400/60"
            />
            <span className="sr-only">{roles[0]}</span>
            <span aria-hidden className="inline-flex items-center">
                {text}
                <span className="ml-1 inline-block h-3 w-[0.45rem] animate-pulse bg-brand-500/80 motion-reduce:animate-none dark:bg-brand-400/80" />
            </span>
        </p>
    );
}

function Highlight({ children }: { children: ReactNode }) {
    return (
        <span className="font-medium text-stone-900 dark:text-stone-100">
            {children}
        </span>
    );
}

const stats: [string, string][] = [
    ['5', 'products shipped live'],
    ['1+ yr', 'full-time, end to end'],
];

const portraitRows: [string, ReactNode][] = [
    ['Base', 'Cagayan de Oro, PH'],
    ['Edu', 'BS Computer Science'],
    [
        'Status',
        <>
            <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Open to work
        </>,
    ],
];

export function HeroSection() {
    return (
        <section
            id="top"
            className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16"
        >
            <div>
                <RoleTypewriter />

                <h1 className="mt-5 text-[2.6rem] font-semibold leading-[0.92] tracking-tight text-stone-900 dark:text-white sm:text-6xl">
                    Jean Maverick
                    <br />
                    Dela Cruz
                </h1>

                <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-stone-600 dark:text-stone-400 sm:text-base">
                    I build production web apps end to end — from{' '}
                    <Highlight>React and TypeScript</Highlight> interfaces down
                    to <Highlight>Laravel</Highlight> APIs, databases, and the
                    payments, CRM, and AI automations behind them. At Zen
                    Companies I owned <Highlight>four live products</Highlight>,
                    and I shipped a fifth — a booking platform — on my own.
                </p>

                <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-l-2 border-brand-500/40 pl-5 dark:border-brand-400/30">
                    {stats.map(([value, label]) => (
                        <div key={label}>
                            <dt className="whitespace-nowrap font-mono text-lg font-medium text-stone-900 dark:text-white sm:text-xl">
                                {value}
                            </dt>
                            <dd className="mt-0.5 text-xs text-stone-500 dark:text-stone-400">
                                {label}
                            </dd>
                        </div>
                    ))}
                </dl>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button
                        asChild
                        size="lg"
                        className="group w-full sm:w-auto"
                    >
                        <a href="#projects">
                            See the work
                            <ArrowDownRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                        </a>
                    </Button>
                    <a
                        href="mailto:delacruz.jeanmaverick@gmail.com"
                        className="group inline-flex items-center justify-center gap-2 px-1 py-2 font-mono text-sm text-stone-500 transition hover:text-stone-900 dark:text-stone-400 dark:hover:text-white sm:justify-start"
                    >
                        <Mail className="h-4 w-4 shrink-0" />
                        <span className="truncate border-b border-dashed border-stone-300 pb-0.5 transition group-hover:border-brand-500 dark:border-stone-700 dark:group-hover:border-brand-400">
                            delacruz.jeanmaverick@gmail.com
                        </span>
                    </a>
                </div>
            </div>

            <HeroPortrait rows={portraitRows} />
        </section>
    );
}
