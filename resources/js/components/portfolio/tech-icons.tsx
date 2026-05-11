import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { Database, Rocket, Webhook } from 'lucide-react';
import { ComponentType, useState } from 'react';

type TechIconConfig = {
    slug?: string;
    color?: string;
    darkColor?: string;
    Icon?: ComponentType<{ className?: string }>;
};

const techIcons: Record<string, TechIconConfig> = {
    // Languages
    Python: { slug: 'python', color: '3776AB' },
    JavaScript: { slug: 'javascript', color: 'F7DF1E' },
    TypeScript: { slug: 'typescript', color: '3178C6' },
    PHP: { slug: 'php', color: '777BB4' },
    'C++': { slug: 'cplusplus', color: '00599C' },
    HTML: { slug: 'html5', color: 'E34F26' },
    CSS: { slug: 'css', color: '1572B6' },
    SQL: { Icon: Database },

    // Frameworks & Tools
    Laravel: { slug: 'laravel', color: 'FF2D20' },
    React: { slug: 'react', color: '61DAFB' },
    'Next.js': { slug: 'nextdotjs', color: '000000', darkColor: 'FFFFFF' },
    'Node.js': { slug: 'nodedotjs', color: '5FA04E' },
    Express: { slug: 'express', color: '000000', darkColor: 'FFFFFF' },
    'Tailwind CSS': { slug: 'tailwindcss', color: '06B6D4' },
    PostgreSQL: { slug: 'postgresql', color: '4169E1' },
    MySQL: { slug: 'mysql', color: '4479A1' },
    n8n: { slug: 'n8n', color: 'EA4B71' },
    LangChain: { slug: 'langchain', color: '1C3C3C', darkColor: 'BDD9D7' },
    Ollama: { slug: 'ollama' },
    Vite: { slug: 'vite', color: '646CFF' },
    Git: { slug: 'git', color: 'F05032' },
    Docker: { slug: 'docker', color: '2496ED' },
    Vercel: { slug: 'vercel', color: '000000', darkColor: 'FFFFFF' },
    Postman: { slug: 'postman', color: 'FF6C37' },
    GHL: { Icon: Rocket },
    'REST APIs': { Icon: Webhook },

    // Project stacks
    Inertia: { slug: 'inertia', color: '9553E9' },
    Tailwind: { slug: 'tailwindcss', color: '06B6D4' },
    Stripe: { slug: 'stripe', color: '635BFF' },
    Sentry: { slug: 'sentry', color: '8075E1' },
    BERT: {},
    'Multi-Task Learning': {},
    NLP: {},
};

export function TechIcon({ name }: { name: string }) {
    const cfg = techIcons[name];
    const [loaded, setLoaded] = useState(false);
    const [errored, setErrored] = useState(false);

    if (cfg?.Icon) {
        const Icon = cfg.Icon;
        return (
            <Icon className="h-3.5 w-3.5 shrink-0 text-stone-500 dark:text-stone-400" />
        );
    }

    if (!cfg?.slug || errored) {
        return (
            <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full bg-stone-400 dark:bg-stone-500"
            />
        );
    }

    const baseUrl = `https://cdn.simpleicons.org/${cfg.slug}`;
    const lightUrl = cfg.color ? `${baseUrl}/${cfg.color}` : baseUrl;
    const darkUrl = cfg.darkColor ? `${baseUrl}/${cfg.darkColor}` : lightUrl;
    const hasDarkVariant = lightUrl !== darkUrl;

    return (
        <span className="relative inline-flex h-3.5 w-3.5 shrink-0">
            {!loaded && <Skeleton className="absolute inset-0 rounded-sm" />}
            <img
                src={lightUrl}
                alt=""
                aria-hidden
                loading="lazy"
                onLoad={() => setLoaded(true)}
                onError={() => setErrored(true)}
                className={cn(
                    'absolute inset-0 h-3.5 w-3.5 transition-opacity',
                    hasDarkVariant && 'dark:hidden',
                    loaded ? 'opacity-100' : 'opacity-0',
                )}
            />
            {hasDarkVariant && (
                <img
                    src={darkUrl}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    onLoad={() => setLoaded(true)}
                    className={cn(
                        'absolute inset-0 hidden h-3.5 w-3.5 transition-opacity dark:block',
                        loaded ? 'opacity-100' : 'opacity-0',
                    )}
                />
            )}
        </span>
    );
}
