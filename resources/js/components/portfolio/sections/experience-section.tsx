import { experience } from '@/components/portfolio/data';
import { SectionHeading } from '@/components/portfolio/parts';
import { Card } from '@/components/ui/card';

export function ExperienceSection() {
    return (
        <section id="experience" className="mt-28">
            <SectionHeading title="Experience" />
            <div className="mt-8 space-y-6">
                {experience.map((job) => (
                    <article key={job.company}>
                        <Card className="group relative overflow-hidden rounded-2xl border-stone-200 bg-white/60 p-6 shadow-none backdrop-blur transition hover:border-stone-300 dark:border-stone-800 dark:bg-stone-900/40 dark:hover:border-stone-700 sm:p-8">
                            <span
                                aria-hidden
                                className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-brand-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:via-brand-400/40"
                            />

                            <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
                                        {job.company}
                                    </p>
                                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-stone-900 dark:text-white sm:text-2xl">
                                        {job.role}
                                    </h3>
                                </div>
                                <div className="shrink-0 font-mono text-xs text-stone-500 dark:text-stone-400 sm:text-right">
                                    <p>{job.period}</p>
                                    <p className="mt-1 text-stone-400 dark:text-stone-500">
                                        {job.location}
                                    </p>
                                </div>
                            </header>

                            <ol className="mt-6 space-y-4 border-t border-stone-200/80 pt-6 text-sm leading-relaxed text-stone-600 dark:border-stone-800 dark:text-stone-300">
                                {job.bullets.map((b, i) => (
                                    <li
                                        key={b}
                                        className="grid grid-cols-[1.75rem_1fr] sm:grid-cols-[2.25rem_1fr]"
                                    >
                                        <span
                                            aria-hidden
                                            className="pt-0.5 font-mono text-[0.7rem] text-stone-300 transition-colors group-hover:text-brand-500/70 dark:text-stone-600 dark:group-hover:text-brand-400/60"
                                        >
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ol>
                        </Card>
                    </article>
                ))}
            </div>
        </section>
    );
}
