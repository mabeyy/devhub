import { HeroPhoto } from '@/components/portfolio/parts';
import { Button } from '@/components/ui/button';
import { GraduationCap, Mail, MapPin } from 'lucide-react';
import type { ReactNode } from 'react';

function Highlight({ children }: { children: ReactNode }) {
    return (
        <span className="font-medium text-stone-900 dark:text-stone-100">
            {children}
        </span>
    );
}

export function HeroSection() {
    return (
        <section
            id="top"
            className="grid items-center gap-12 sm:grid-cols-[auto,1fr]"
        >
            <HeroPhoto />
            <div>
                <p className="mb-3 font-mono text-sm text-brand-600 dark:text-brand-400">
                    Hi, my name is
                </p>
                <h1 className="text-4xl font-semibold tracking-tight text-stone-900 dark:text-white sm:text-5xl">
                    Jean Maverick Dela Cruz
                </h1>
                <h2 className="mt-2 text-2xl font-medium text-stone-700 dark:text-stone-300 sm:text-3xl">
                    Full Stack Developer
                    <span className="text-brand-600 dark:text-brand-400">
                        .
                    </span>
                </h2>
                <p className="mt-6 text-[15px] leading-relaxed text-stone-600 dark:text-stone-400 sm:text-base">
                    I ship production web apps end to end, from{' '}
                    <Highlight>React and TypeScript</Highlight> interfaces to{' '}
                    <Highlight>Laravel</Highlight> APIs, databases, and the
                    payments, CRM, and AI automations behind them. At Zen
                    Companies, I built and maintained{' '}
                    <Highlight>four live products</Highlight>: a lead-gen SaaS,
                    an AI thumbnail generator, a yacht booking site, and an
                    analytics hub. I've worked across{' '}
                    <Highlight>Laravel, Next.js, FastAPI, and n8n</Highlight>,
                    and I'm comfortable owning the frontend, the backend, or
                    both.
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-600 dark:text-stone-400">
                    <li className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 shrink-0 text-stone-400 dark:text-stone-500" />
                        Cagayan de Oro, PH
                    </li>
                    <li className="flex items-center gap-1.5">
                        <GraduationCap className="h-4 w-4 shrink-0 text-stone-400 dark:text-stone-500" />
                        BS Computer Science
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        Open to work
                    </li>
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Button asChild size="lg" className="w-full sm:w-auto">
                        <a href="#projects">See projects</a>
                    </Button>
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto"
                    >
                        <a href="mailto:delacruz.jeanmaverick@gmail.com">
                            <Mail className="h-4 w-4 shrink-0" />
                            <span className="truncate">
                                delacruz.jeanmaverick@gmail.com
                            </span>
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
