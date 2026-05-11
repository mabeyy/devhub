import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

export function useTheme() {
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(isDark ? 'dark' : 'light');
    }, []);

    const toggleTheme = () => {
        const next: Theme = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        document.documentElement.classList.toggle('dark', next === 'dark');
        try {
            localStorage.setItem('theme', next);
        } catch {
            /* localStorage unavailable */
        }
    };

    return { theme, toggleTheme };
}
