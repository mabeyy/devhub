import { HeroPhoto } from '@/components/portfolio/parts';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

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
                    Full Stack Developer.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-600 dark:text-stone-400">
                    I'm a full-stack developer who builds web applications from
                    the interface to the infrastructure behind it. I focus on
                    clean, reliable code and products that serve real users, and
                    I adapt quickly to whatever a team needs. Based in Cagayan
                    de Oro City, Philippines, and open to new opportunities.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild size="lg">
                        <a href="#projects">See projects</a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <a href="mailto:delacruz.jeanmaverick@gmail.com">
                            <Mail className="h-4 w-4" />
                            delacruz.jeanmaverick@gmail.com
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
