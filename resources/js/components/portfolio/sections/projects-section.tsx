import { projects } from '@/components/portfolio/data';
import { GithubIcon } from '@/components/portfolio/icons';
import { ProjectImage, SectionHeading } from '@/components/portfolio/parts';
import { TechIcon } from '@/components/portfolio/tech-icons';
import { Card } from '@/components/ui/card';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { formatUrlForDisplay } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

export function ProjectsSection() {
    return (
        <section id="projects" className="mt-28">
            <SectionHeading title="Projects" />
            <div className="mt-8 grid gap-6">
                {projects.map((p) => (
                    <article key={p.title}>
                        <Card className="group overflow-hidden rounded-2xl border-stone-200 bg-white/60 shadow-none backdrop-blur transition hover:border-brand-500/60 dark:border-stone-800 dark:bg-stone-900/40">
                            {p.image && (
                                <a
                                    href={p.live ?? p.repo ?? '#'}
                                    target={
                                        p.live || p.repo ? '_blank' : undefined
                                    }
                                    rel="noreferrer"
                                    className="relative block aspect-[16/9] overflow-hidden border-b border-stone-200 dark:border-stone-800"
                                >
                                    <ProjectImage
                                        src={p.image}
                                        alt={`${p.title} screenshot`}
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
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <a
                                                        href={p.live}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center gap-2 text-sm text-brand-600 transition hover:text-brand-500 dark:text-brand-300 dark:hover:text-brand-200"
                                                    >
                                                        <ExternalLink className="h-4 w-4" />
                                                        {formatUrlForDisplay(
                                                            p.live,
                                                        )}
                                                    </a>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    Live site
                                                </TooltipContent>
                                            </Tooltip>
                                        )}
                                        {p.repo && (
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <a
                                                        href={p.repo}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center gap-2 text-sm text-brand-600 transition hover:text-brand-500 dark:text-brand-300 dark:hover:text-brand-200"
                                                    >
                                                        <GithubIcon className="h-4 w-4" />
                                                        {formatUrlForDisplay(
                                                            p.repo,
                                                        )}
                                                    </a>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    Source on GitHub
                                                </TooltipContent>
                                            </Tooltip>
                                        )}
                                    </div>
                                )}
                                <ul className="mt-4 space-y-2 text-sm text-stone-600 dark:text-stone-300">
                                    {p.bullets.map((b) => (
                                        <li key={b} className="flex gap-3">
                                            <span className="mt-1 text-brand-600 dark:text-brand-400">
                                                ▹
                                            </span>
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
                        </Card>
                    </article>
                ))}
            </div>
        </section>
    );
}
