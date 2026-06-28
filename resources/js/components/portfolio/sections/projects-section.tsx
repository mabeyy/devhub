import { projects } from '@/components/portfolio/data';
import { GithubIcon } from '@/components/portfolio/icons';
import { ProjectImage, SectionHeading } from '@/components/portfolio/parts';
import { TechIcon } from '@/components/portfolio/tech-icons';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn, formatUrlForDisplay } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

export function ProjectsSection() {
    return (
        <section id="projects" className="mt-28">
            <SectionHeading title="Projects" />
            <div className="mt-12 flex flex-col gap-16 md:gap-20">
                {projects.map((p, i) => {
                    const reversed = i % 2 === 1;
                    return (
                        <article
                            key={p.title}
                            className="group grid items-center gap-6 md:grid-cols-12 md:gap-10"
                        >
                            {p.image && (
                                <a
                                    href={p.live ?? p.repo ?? '#'}
                                    target={
                                        p.live || p.repo ? '_blank' : undefined
                                    }
                                    rel="noreferrer"
                                    className={cn(
                                        'relative col-span-12 block aspect-[4/3] overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 transition-shadow hover:shadow-lg dark:border-stone-800 dark:bg-stone-900 md:col-span-5',
                                        reversed && 'md:col-start-8',
                                    )}
                                >
                                    <ProjectImage
                                        src={p.image}
                                        alt={`${p.title} screenshot`}
                                    />
                                </a>
                            )}

                            <div
                                className={cn(
                                    'col-span-12 md:col-span-7',
                                    reversed &&
                                        'md:col-start-1 md:row-start-1',
                                )}
                            >
                                <p className="font-mono text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400">
                                    <span className="text-stone-400 dark:text-stone-600">
                                        {String(i + 1).padStart(2, '0')} /{' '}
                                        {String(projects.length).padStart(
                                            2,
                                            '0',
                                        )}{' '}
                                        ·{' '}
                                    </span>
                                    {p.subtitle}
                                </p>

                                <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                                    <h3 className="text-2xl font-semibold text-stone-900 dark:text-white sm:text-3xl">
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
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
