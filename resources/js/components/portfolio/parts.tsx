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

export function HeroPhoto() {
    const [loaded, setLoaded] = useState(false);
    return (
        <div className="relative mx-auto sm:mx-0">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-brand-500 via-amber-400 to-yellow-300 opacity-70 blur" />
            <div className="relative h-44 w-44 sm:h-52 sm:w-52">
                {!loaded && (
                    <Skeleton className="absolute inset-0 rounded-full" />
                )}
                <img
                    src="/images/profile-photo.jpg"
                    alt="Jean Maverick Dela Cruz"
                    onLoad={() => setLoaded(true)}
                    className={cn(
                        'absolute inset-0 h-full w-full rounded-full object-cover ring-4 ring-white transition-opacity dark:ring-stone-950',
                        loaded ? 'opacity-100' : 'opacity-0',
                    )}
                />
            </div>
        </div>
    );
}

export function ProjectImage({ src, alt }: { src: string; alt: string }) {
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
    const isDark = theme === 'dark';
    const label = isDark ? 'Light mode' : 'Dark mode';
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={onToggle}
                    aria-label={label}
                >
                    {isDark ? (
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
                    ) : (
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
                    )}
                </Button>
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
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
