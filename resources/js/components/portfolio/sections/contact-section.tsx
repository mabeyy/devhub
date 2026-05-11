import { GithubIcon, LinkedinIcon } from '@/components/portfolio/icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Check, Copy, Download, Mail } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const EMAIL = 'delacruz.jeanmaverick@gmail.com';

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
                <Card className="relative overflow-hidden rounded-3xl border-stone-800 bg-stone-900 shadow-none">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl"
                    />

                    <CardContent className="relative p-8 sm:p-12 lg:p-14">
                        <p className="font-mono text-xs uppercase tracking-widest text-stone-400">
                            Get in touch
                        </p>

                        <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                            Building{' '}
                            <span className="text-brand-400">
                                something ambitious
                            </span>
                            ?
                        </h2>

                        <p className="mt-6 max-w-2xl text-stone-300">
                            Full-stack developer shipping real product across
                            web and applied AI. Open to internships, freelance,
                            and full-time roles — let&apos;s talk.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <div className="inline-flex">
                                <Button
                                    asChild
                                    className="rounded-r-none text-white hover:text-white"
                                >
                                    <a href={`mailto:${EMAIL}`}>
                                        <Mail className="h-4 w-4" />
                                        {EMAIL}
                                    </a>
                                </Button>

                                <CopyEmailButton email={EMAIL} />
                            </div>

                            <Button asChild variant="outline">
                                <a
                                    href="https://linkedin.com/in/jeanmaverickdelacruz"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <LinkedinIcon className="h-4 w-4" />
                                    LinkedIn
                                </a>
                            </Button>
                            <Button asChild variant="outline">
                                <a
                                    href="https://github.com/mabeyy"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <GithubIcon className="h-4 w-4" />
                                    GitHub
                                </a>
                            </Button>
                            <Button asChild variant="outline">
                                <a
                                    href="/jean-maverick-dela-cruz-cv.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Download className="h-4 w-4" />
                                    CV
                                </a>
                            </Button>
                        </div>

                        <div className="mt-12 flex flex-wrap justify-between gap-6 border-t border-stone-800 pt-8">
                            <div>
                                <p className="font-mono text-xs uppercase tracking-wider text-stone-400">
                                    Location
                                </p>
                                <p className="mt-1 text-sm text-stone-200">
                                    Cagayan de Oro, Philippines · UTC+8
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="font-mono text-xs uppercase tracking-wider text-stone-400">
                                    Availability
                                </p>
                                <p className="mt-1 text-sm text-stone-200">
                                    Remote · Full-time or contract
                                </p>
                            </div>
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
                <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={onCopy}
                    aria-label="Copy email"
                    className="-ml-px rounded-l-none"
                >
                    {copied ? (
                        <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                        <Copy className="h-4 w-4" />
                    )}
                </Button>
            </TooltipTrigger>
            <TooltipContent>{copied ? 'Copied!' : 'Copy email'}</TooltipContent>
        </Tooltip>
    );
}
