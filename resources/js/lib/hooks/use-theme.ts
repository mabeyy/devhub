import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

function readStored(): Theme {
    try {
        const v = localStorage.getItem(STORAGE_KEY);
        return v === 'light' || v === 'dark' || v === 'system' ? v : 'system';
    } catch {
        return 'system';
    }
}

function resolve(t: Theme): ResolvedTheme {
    if (t !== 'system') return t;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
}

function apply(r: ResolvedTheme) {
    document.documentElement.classList.toggle('dark', r === 'dark');
}

export function useTheme() {
    const [theme, setThemeState] = useState<Theme>(() => {
        if (typeof window === 'undefined') return 'system';
        return readStored();
    });
    const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => {
        if (typeof window === 'undefined') return 'light';
        return document.documentElement.classList.contains('dark')
            ? 'dark'
            : 'light';
    });

    useEffect(() => {
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const onSystemChange = () => {
            if (readStored() !== 'system') return;
            const next: ResolvedTheme = mql.matches ? 'dark' : 'light';
            setResolvedTheme(next);
            apply(next);
        };
        mql.addEventListener('change', onSystemChange);
        return () => mql.removeEventListener('change', onSystemChange);
    }, []);

    const setTheme = (next: Theme) => {
        setThemeState(next);
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch {
            /* localStorage unavailable */
        }
        const r = resolve(next);
        setResolvedTheme(r);
        apply(r);
    };

    const toggleTheme = () => {
        const next: Theme =
            theme === 'light'
                ? 'dark'
                : theme === 'dark'
                  ? 'system'
                  : 'light';
        setTheme(next);
    };

    return { theme, resolvedTheme, setTheme, toggleTheme };
}
