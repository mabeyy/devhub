import { HeroPhoto } from '@/components/portfolio/parts';
import { Button } from '@/components/ui/button';

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
                    I build full-stack web apps that ship to real users — from
                    a Stripe-billed lead-generation platform at Zen Intent, to
                    AI-powered school portals on LangChain and Ollama, to
                    BERT-based NLP research on cyberbullying detection. Based
                    in Cagayan de Oro City, Philippines.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild size="lg">
                        <a href="#contact">Get in touch</a>
                    </Button>
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-brand-500/60 bg-brand-50 text-brand-700 hover:bg-brand-100 hover:text-brand-700 dark:bg-brand-500/10 dark:text-brand-200 dark:hover:bg-brand-500/20 dark:hover:text-brand-100"
                    >
                        <a
                            href="/jean-maverick-dela-cruz-cv.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Download CV
                        </a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <a
                            href="https://github.com/mabeyy"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <a
                            href="https://linkedin.com/in/jeanmaverickdelacruz"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
