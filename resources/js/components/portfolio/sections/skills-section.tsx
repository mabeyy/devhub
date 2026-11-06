import { skills } from '@/components/portfolio/data';
import { SectionHeading } from '@/components/portfolio/parts';
import { TechIcon } from '@/components/portfolio/tech-icons';
import { Badge } from '@/components/ui/badge';

export function SkillsSection() {
    return (
        <section id="skills" className="mt-28">
            <SectionHeading title="Skills" />
            <div className="mt-6 grid gap-x-8 gap-y-6 sm:mt-8 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-3">
                {Object.entries(skills).map(([group, items]) => (
                    <div key={group}>
                        <h3 className="mb-2.5 font-mono text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 sm:mb-3">
                            {group}
                        </h3>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {items.map((item) => (
                                <Badge
                                    key={item}
                                    variant="outline"
                                    className="gap-1.5 bg-white px-2.5 py-1 text-xs font-normal dark:bg-stone-900/60 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-sm"
                                >
                                    <TechIcon name={item} />
                                    {item}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
