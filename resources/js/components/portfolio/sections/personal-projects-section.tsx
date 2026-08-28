import { personalProjects } from '@/components/portfolio/data';
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

/**
 * A borderless, editorial counterpart to the Company carousel: each build is
 * an alternating image/text spread structured by a large faded index numeral
 * rather than a card frame — open, spacious, and typographic.
 */
export function PersonalProjectsSection() {
    return (
        <section id="personal" className="mt-28">
            <SectionHeading title="Projects I Built Myself" />

            <div className="mt-14 flex flex-col gap-20 md:gap-28">
                {personalProjects.map((p, i) => {
                    const reversed = i % 2 === 1;
                    const href = p.live ?? p.repo;
                    return (
                        <article
                            key={p.title}
                            className="group grid items-center gap-8 md:grid-cols-2 md:gap-14"
                        >
                            {p.image && (
                                <a
                                    href={href ?? '#'}
                                    target={href ? '_blank' : undefined}
                                    rel="noreferrer"
                                    className={cn(
                                        'relative block aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-stone-200/70 transition duration-500 group-hover:-translate-y-1.5 group-hover:shadow-2xl dark:ring-stone-800',
                                        reversed && 'md:order-2',
                                    )}
                                >
                                    <ProjectImage
                                        src={p.image}
                                        alt={`${p.title} screenshot`}
                                        className={p.imageClassName}
                                    />
                                </a>
                            )}

                            <div className={cn(reversed && 'md:order-1')}>
                                <p className="font-mono text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400">
                                    {p.subtitle}
                                </p>

                                <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                                    <h3 className="text-3xl font-semibold tracking-tight text-stone-900 dark:text-white sm:text-4xl">
                                        {p.title}
                                    </h3>
                                    <span className="font-mono text-xs text-stone-500 dark:text-stone-400">
                                        {p.period}
                                    </span>
                                </div>

                                {(p.live || p.repo) && (
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

                                <ul className="mt-5 space-y-2.5 text-sm text-stone-600 dark:text-stone-300">
                                    {p.bullets.map((b) => (
                                        <li key={b} className="flex gap-3">
                                            <span className="mt-[0.45rem] h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-xs text-stone-500 dark:text-stone-400">
                                    {p.stack.map((s, si) => (
                                        <span
                                            key={s}
                                            className="inline-flex items-center gap-1.5"
                                        >
                                            <TechIcon name={s} />
                                            {s}
                                            {si < p.stack.length - 1 && (
                                                <span className="ml-2.5 text-stone-300 dark:text-stone-700">
                                                    ·
                                                </span>
                                            )}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
