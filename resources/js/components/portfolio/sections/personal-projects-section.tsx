import { personalProjects } from '@/components/portfolio/data';
import { GithubIcon } from '@/components/portfolio/icons';
import { ProjectImage, SectionHeading } from '@/components/portfolio/parts';
import { TechIcon } from '@/components/portfolio/tech-icons';
import { cn, formatUrlForDisplay } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

/**
 * An editorial counterpart to the Company carousel: each build is an
 * alternating image/text spread — title, standfirst, a mono meta rule of
 * period and links, then numbered notes and the stack.
 */
export function PersonalProjectsSection() {
    return (
        <section id="personal" className="mt-28">
            <SectionHeading title="Projects I Built Myself" />

            <div className="mt-12 flex flex-col gap-16 md:gap-20">
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
                                        'relative block aspect-[4/3] overflow-hidden rounded-2xl border border-stone-200 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:border-stone-300 dark:border-stone-800 dark:shadow-none dark:group-hover:border-stone-700',
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
                                <h3 className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-white sm:text-3xl">
                                    {p.title}
                                </h3>
                                <p className="mt-1.5 text-base text-stone-500 dark:text-stone-400">
                                    {p.subtitle}
                                </p>

                                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-stone-200 py-2.5 font-mono text-xs text-stone-500 dark:border-stone-800 dark:text-stone-400">
                                    <span>{p.period}</span>
                                    {p.live && (
                                        <a
                                            href={p.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group/link inline-flex items-center gap-1.5 text-brand-600 transition hover:text-brand-500 dark:text-brand-400 dark:hover:text-brand-300"
                                        >
                                            <ExternalLink className="h-3.5 w-3.5" />
                                            <span className="border-b border-dashed border-brand-500/40 pb-0.5 transition group-hover/link:border-brand-500">
                                                {formatUrlForDisplay(p.live)}
                                            </span>
                                        </a>
                                    )}
                                    {p.repo && (
                                        <a
                                            href={p.repo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group/link inline-flex items-center gap-1.5 transition hover:text-stone-900 dark:hover:text-white"
                                        >
                                            <GithubIcon className="h-3.5 w-3.5" />
                                            <span className="border-b border-dashed border-stone-300 pb-0.5 transition group-hover/link:border-stone-500 dark:border-stone-700 dark:group-hover/link:border-stone-500">
                                                {formatUrlForDisplay(p.repo)}
                                            </span>
                                        </a>
                                    )}
                                </div>

                                <ol className="mt-4 space-y-3 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                                    {p.bullets.map((b, bi) => (
                                        <li
                                            key={b}
                                            className="grid grid-cols-[1.75rem_1fr] sm:grid-cols-[2.25rem_1fr]"
                                        >
                                            <span
                                                aria-hidden
                                                className="pt-0.5 font-mono text-[0.7rem] text-stone-300 transition-colors group-hover:text-brand-500/70 dark:text-stone-600 dark:group-hover:text-brand-400/60"
                                            >
                                                {String(bi + 1).padStart(
                                                    2,
                                                    '0',
                                                )}
                                            </span>
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ol>

                                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-stone-200 pt-4 dark:border-stone-800">
                                    {p.stack.map((s) => (
                                        <span
                                            key={s}
                                            className="inline-flex items-center gap-1.5 rounded-md border border-stone-200 bg-white px-2 py-1 font-mono text-[11px] text-stone-500 dark:border-stone-800 dark:bg-stone-900/50 dark:text-stone-400"
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
