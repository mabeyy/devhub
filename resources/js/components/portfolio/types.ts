import { PageProps } from '@/types';

export type Project = {
    title: string;
    subtitle: string;
    period: string;
    stack: string[];
    repo?: string;
    live?: string;
    image?: string;
    bullets: string[];
};

export type FlashProps = PageProps<{
    flash?: { contact_status?: string | null };
}>;
