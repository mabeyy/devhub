import { GithubIcon, LinkedinIcon } from '@/components/portfolio/icons';
import { Card, CardContent } from '@/components/ui/card';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { ArrowUpRight, Check, Copy, Download, Mail } from 'lucide-react';
import { useState, type ComponentType } from 'react';
import { toast } from 'sonner';

const EMAIL = 'delacruz.jeanmaverick@gmail.com';

const channels: {
    label: string;
    value: string;
    href: string;
    icon: ComponentType<{ className?: string }>;
    external?: boolean;
}[] = [
    {
        label: 'LinkedIn',
        value: 'in/jeanmaverickdelacruz',
        href: 'https://linkedin.com/in/jeanmaverickdelacruz',
        icon: LinkedinIcon,
        external: true,
    },
    {
        label: 'GitHub',
        value: 'github.com/mabeyy',
        href: 'https://github.com/mabeyy',
        icon: GithubIcon,
        external: true,
    },
    {
        label: 'Résumé',
        value: 'Download CV (PDF)',
        href: '/jean-maverick-dela-cruz-cv.pdf',
        icon: Download,
        external: true,
    },
];

const facts: [string, string][] = [
    ['Based', 'Cagayan de Oro, PH · UTC+8'],
    ['Setup', 'Remote or on-site'],
    ['Open to', 'Full-time · Contract · Freelance'],
];

async function copyText(text: string): Promise<boolean> {
    if (navigator.clipboard && window.isSecureContext) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch {
            // fall through to execCommand fallback
        }
    }
    try {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.top = '0';
        ta.style.left = '0';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        return ok;
    } catch {
        return false;
    }
}

export function ContactSection() {
    return (
        <section id="contact" className="mt-28">
            <div className="dark">
                <Card className="relative overflow-hidden rounded-3xl border-stone-800 bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 shadow-none">
                    {/* Technical dot grid — fades out to the right so the
                        channel list stays clean. */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:18px_18px] [mask-image:linear-gradient(to_right,black,transparent_70%)]"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent"
                    />

                    <CardContent className="relative grid gap-10 p-6 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:p-14">
                        <div className="flex min-w-0 flex-col">
                            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-stone-500">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
                                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                </span>
                                Available for work
                            </p>

                            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
                                Have something
                                <br />
                                worth building?
                            </h2>

                            <p className="mb-10 mt-5 max-w-md text-sm leading-relaxed text-stone-400">
                                I ship full-stack product across web and applied
                                AI — and I reply to every message, usually
                                within a day.
                            </p>

                            <dl className="mt-auto max-w-sm divide-y divide-stone-800 border-y border-stone-800">
                                {facts.map(([label, value]) => (
                                    <div
                                        key={label}
                                        className="flex items-center justify-between gap-4 py-2.5"
                                    >
                                        <dt className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-stone-500">
                                            {label}
                                        </dt>
                                        <dd className="min-w-0 text-right text-[13px] text-stone-200">
                                            {value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <div className="min-w-0 lg:self-center">
                            <div className="flex gap-2">
                                <a
                                    href={`mailto:${EMAIL}`}
                                    className="group flex min-w-0 flex-1 items-center gap-2.5 rounded-xl bg-brand-500 px-3.5 py-4 text-stone-950 transition hover:bg-brand-400 sm:gap-3 sm:px-4"
                                >
                                    <Mail className="h-4 w-4 shrink-0" />
                                    <span className="min-w-0 flex-1 truncate font-mono text-xs font-medium sm:text-[13px]">
                                        {EMAIL}
                                    </span>
                                    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </a>
                                <CopyEmailButton email={EMAIL} />
                            </div>

                            <ul className="-mx-3 mt-2">
                                {channels.map((c) => (
                                    <li
                                        key={c.label}
                                        className="relative border-b border-stone-800/80 last:border-b-0"
                                    >
                                        <a
                                            href={c.href}
                                            target={
                                                c.external
                                                    ? '_blank'
                                                    : undefined
                                            }
                                            rel={
                                                c.external
                                                    ? 'noreferrer'
                                                    : undefined
                                            }
                                            className="group flex items-center gap-4 rounded-lg px-3 py-4 transition-colors hover:bg-white/[0.04]"
                                        >
                                            <c.icon className="h-4 w-4 shrink-0 text-stone-600 transition-colors group-hover:text-brand-400" />
                                            <div className="min-w-0 flex-1">
                                                <p className="font-mono text-[10px] uppercase tracking-widest text-stone-600 transition-colors group-hover:text-brand-400/70">
                                                    {c.label}
                                                </p>
                                                <p className="mt-0.5 truncate font-mono text-[13px] text-stone-300 transition-colors group-hover:text-white">
                                                    {c.value}
                                                </p>
                                            </div>
                                            <ArrowUpRight className="h-4 w-4 shrink-0 -translate-x-1 text-stone-600 opacity-0 transition-all group-hover:translate-x-0 group-hover:text-brand-400 group-hover:opacity-100" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

function CopyEmailButton({ email }: { email: string }) {
    const [copied, setCopied] = useState(false);

    const onCopy = async () => {
        const ok = await copyText(email);
        if (ok) {
            setCopied(true);
            toast.success('Email copied');
            setTimeout(() => setCopied(false), 2000);
        } else {
            toast.error("Couldn't copy — try selecting manually");
        }
    };

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <button
                    type="button"
                    onClick={onCopy}
                    aria-label="Copy email address"
                    className="shrink-0 rounded-xl border border-stone-700 px-3.5 text-stone-400 transition-colors hover:border-brand-500/60 hover:text-white"
                >
                    {copied ? (
                        <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                        <Copy className="h-3.5 w-3.5" />
                    )}
                </button>
            </TooltipTrigger>
            <TooltipContent>{copied ? 'Copied!' : 'Copy email'}</TooltipContent>
        </Tooltip>
    );
}
