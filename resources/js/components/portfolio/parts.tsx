import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Theme } from '@/lib/hooks/use-theme';
import { cn } from '@/lib/utils';
import { ReactNode, useState } from 'react';

export function HeroPortrait({ rows }: { rows: [string, ReactNode][] }) {
    const [loaded, setLoaded] = useState(false);
    return (
        <figure className="relative mx-auto w-full max-w-[13.5rem] sm:max-w-[15rem] lg:mr-0">
            <div
                aria-hidden
                className="absolute -inset-5 -z-10 rounded-full bg-gradient-to-tr from-brand-500/25 via-amber-300/15 to-transparent blur-2xl"
            />
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-sm dark:border-stone-800 dark:bg-stone-900/60 dark:shadow-none">
                <div className="relative aspect-square overflow-hidden bg-stone-100 dark:bg-stone-200">
                    {!loaded && <Skeleton className="absolute inset-0" />}
                    <img
                        src="/images/profile-photo.jpg"
                        alt="Jean Maverick Dela Cruz"
                        onLoad={() => setLoaded(true)}
                        className={cn(
                            'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
                            loaded ? 'opacity-100' : 'opacity-0',
                        )}
                    />
                </div>
                <figcaption className="divide-y divide-stone-200/80 border-t border-stone-200 font-mono text-[0.65rem] dark:divide-stone-800/80 dark:border-stone-800">
                    {rows.map(([label, value]) => (
                        <div
                            key={label}
                            className="flex items-center justify-between gap-3 px-3 py-1.5"
                        >
                            <span className="uppercase tracking-widest text-stone-400 dark:text-stone-500">
                                {label}
                            </span>
                            <span className="flex items-center gap-1.5 text-stone-700 dark:text-stone-200">
                                {value}
                            </span>
                        </div>
                    ))}
                </figcaption>
            </div>
        </figure>
    );
}

export function ProjectImage({
    src,
    alt,
    className,
}: {
    src: string;
    alt: string;
    className?: string;
}) {
    const [loaded, setLoaded] = useState(false);
    return (
        <>
            {!loaded && <Skeleton className="absolute inset-0 rounded-none" />}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                className={cn(
                    'h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]',
                    className,
                    loaded ? 'opacity-100' : 'opacity-0',
                )}
            />
        </>
    );
}

export function ThemeToggle({
    theme,
    onToggle,
}: {
    theme: Theme;
    onToggle: () => void;
}) {
    const nextLabel =
        theme === 'light'
            ? 'Switch to dark mode'
            : theme === 'dark'
              ? 'Switch to system theme'
              : 'Switch to light mode';
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={onToggle}
                    aria-label={nextLabel}
                >
                    {theme === 'light' ? (
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden
                            className="fill-none stroke-current"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                        </svg>
                    ) : theme === 'dark' ? (
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden
                            className="fill-none stroke-current"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                        </svg>
                    ) : (
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden
                            className="fill-none stroke-current"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="4" width="18" height="12" rx="2" />
                            <path d="M8 20h8M12 16v4" />
                        </svg>
                    )}
                </Button>
            </TooltipTrigger>
            <TooltipContent>{nextLabel}</TooltipContent>
        </Tooltip>
    );
}

export function SectionHeading({ title }: { title: string }) {
    return (
        <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold text-stone-900 dark:text-white sm:text-3xl">
                {title}
            </h2>
            <span className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
        </div>
    );
}

export function FormField({
    label,
    error,
    htmlFor,
    children,
}: {
    label: string;
    error?: string;
    htmlFor: string;
    children: ReactNode;
}) {
    return (
        <div className="space-y-1.5">
            <Label
                htmlFor={htmlFor}
                className="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400"
            >
                {label}
            </Label>
            {children}
            {error && <p className="text-xs text-destructive">{error}</p>}
        </div>
    );
}
