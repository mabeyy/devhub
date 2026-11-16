import { skills } from '@/components/portfolio/data';
import { SectionHeading } from '@/components/portfolio/parts';
import { TechIcon } from '@/components/portfolio/tech-icons';

export function SkillsSection() {
    return (
        <section id="skills" className="mt-28">
            <SectionHeading title="Skills" />
            <div className="mt-5 gap-x-10 sm:mt-6 sm:columns-2 lg:columns-3">
                {Object.entries(skills).map(([group, items]) => (
                    <div
                        key={group}
                        className="mb-5 break-inside-avoid last:mb-0"
                    >
                        <h3 className="mb-2 font-mono text-[0.7rem] uppercase tracking-widest text-brand-600 dark:text-brand-400">
                            {group}
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                            {items.map((item) => (
                                <span
                                    key={item}
                                    className="inline-flex items-center gap-1.5 rounded-md border border-stone-200 bg-white px-2 py-1 text-xs text-stone-700 transition hover:border-stone-300 hover:bg-stone-50 dark:border-stone-800 dark:bg-stone-900/50 dark:text-stone-200 dark:hover:border-stone-700 dark:hover:bg-stone-900"
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
    );
}
