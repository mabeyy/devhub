import { experience } from '@/components/portfolio/data';
import { SectionHeading } from '@/components/portfolio/parts';
import { Card } from '@/components/ui/card';

export function ExperienceSection() {
    return (
        <section id="experience" className="mt-28">
            <SectionHeading title="Experience" />
            <div className="mt-8 space-y-10">
                {experience.map((job) => (
                    <article key={job.company}>
                        <Card className="rounded-2xl border-stone-200 bg-white/60 p-6 shadow-none backdrop-blur transition hover:border-stone-300 dark:border-stone-800 dark:bg-stone-900/40 dark:hover:border-stone-700">
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
                                        <span className="mt-1 text-brand-600 dark:text-brand-400">
                                            ▹
                                        </span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </article>
                ))}
            </div>
        </section>
    );
}
