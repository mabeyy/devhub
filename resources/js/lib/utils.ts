import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatUrlForDisplay(url: string): string {
    return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
}
