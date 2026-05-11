import { navItems } from '@/components/portfolio/data';
import { ThemeToggle } from '@/components/portfolio/parts';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Theme } from '@/lib/hooks/use-theme';
import { cn } from '@/lib/utils';

type Props = {
    scrolled: boolean;
    activeSection: string;
    theme: Theme;
    onToggleTheme: () => void;
};

export function HeaderNav({
    scrolled,
    activeSection,
    theme,
    onToggleTheme,
}: Props) {
    return (
        <header
            className={cn(
                'sticky top-4 z-40 mb-16 flex items-center justify-between transition-all duration-300',
                scrolled
                    ? 'rounded-2xl border border-stone-200/80 bg-white/70 px-6 py-4 shadow-sm backdrop-blur-md dark:border-stone-800/80 dark:bg-stone-950/70'
                    : 'border border-transparent',
            )}
        >
            <Tooltip>
                <TooltipTrigger asChild>
                    <a
                        href="#top"
                        className="font-mono text-sm tracking-widest text-brand-600 dark:text-brand-400"
                    >
                        JM.DC
                    </a>
                </TooltipTrigger>
                <TooltipContent>Jean Maverick Dela Cruz</TooltipContent>
            </Tooltip>
            <div className="flex items-center gap-6">
                <nav className="hidden gap-8 text-sm sm:flex">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={cn(
                                    'transition',
                                    isActive
                                        ? 'text-brand-600 dark:text-brand-400'
                                        : 'text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white',
                                )}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </nav>
                <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            </div>
        </header>
    );
}
