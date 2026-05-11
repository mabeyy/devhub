import { skills } from '@/components/portfolio/data';
import { SectionHeading } from '@/components/portfolio/parts';
import { TechIcon } from '@/components/portfolio/tech-icons';
import { Badge } from '@/components/ui/badge';

export function SkillsSection() {
    return (
        <section id="skills" className="mt-28">
            <SectionHeading title="Skills" />
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
                {Object.entries(skills).map(([group, items]) => (
                    <div key={group}>
                        <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-brand-600 dark:text-brand-400">
                            {group}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map((item) => (
                                <Badge
                                    key={item}
                                    variant="outline"
                                    className="gap-2 bg-white px-3 py-1.5 text-sm font-normal dark:bg-stone-900/60"
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
