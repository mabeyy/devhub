import { FormField } from '@/components/portfolio/parts';
import { FlashProps } from '@/components/portfolio/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm, usePage } from '@inertiajs/react';
import { FormEvent, useEffect } from 'react';
import { toast } from 'sonner';

export function ContactSection() {
    const { flash } = usePage<FlashProps>().props;
    const sent = flash?.contact_status === 'sent';

    const form = useForm({
        name: '',
        email: '',
        message: '',
    });

    useEffect(() => {
        if (sent) form.reset();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sent]);

    const submit = (e: FormEvent) => {
        e.preventDefault();
        form.post(route('contact.store'), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Message sent', {
                    description: "Thanks — I'll reply soon.",
                });
            },
            onError: (errors) => {
                const firstError = Object.values(errors)[0];
                toast.error('Couldn’t send your message', {
                    description:
                        typeof firstError === 'string'
                            ? firstError
                            : 'Please check the form and try again.',
                });
            },
        });
    };

    return (
        <section id="contact" className="mt-28">
            <div className="text-center">
                <p className="font-mono text-sm uppercase tracking-widest text-brand-600 dark:text-brand-400">
                    What&apos;s Next
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-stone-900 dark:text-white sm:text-4xl">
                    Let&apos;s build something.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-stone-600 dark:text-stone-400">
                    I&apos;m open to internships, freelance gigs, and full-time
                    roles in full-stack development and applied AI. Drop a
                    message below or email{' '}
                    <a
                        href="mailto:delacruz.jeanmaverick@gmail.com"
                        className="text-brand-600 underline-offset-4 hover:underline dark:text-brand-300"
                    >
                        delacruz.jeanmaverick@gmail.com
                    </a>
                    .
                </p>
            </div>

            <Card className="mx-auto mt-10 max-w-xl border-stone-200 bg-white/60 backdrop-blur dark:border-stone-800 dark:bg-stone-900/40">
                <CardContent className="p-6">
                    <form onSubmit={submit} className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <FormField
                                label="Name"
                                htmlFor="name"
                                error={form.errors.name}
                            >
                                <Input
                                    id="name"
                                    type="text"
                                    autoComplete="name"
                                    value={form.data.name}
                                    onChange={(e) =>
                                        form.setData('name', e.target.value)
                                    }
                                    placeholder="Your name"
                                />
                            </FormField>
                            <FormField
                                label="Email"
                                htmlFor="email"
                                error={form.errors.email}
                            >
                                <Input
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    value={form.data.email}
                                    onChange={(e) =>
                                        form.setData('email', e.target.value)
                                    }
                                    placeholder="you@example.com"
                                />
                            </FormField>
                        </div>

                        <FormField
                            label="Message"
                            htmlFor="message"
                            error={form.errors.message}
                        >
                            <Textarea
                                id="message"
                                rows={5}
                                value={form.data.message}
                                onChange={(e) =>
                                    form.setData('message', e.target.value)
                                }
                                placeholder="Tell me about your project, role, or idea…"
                            />
                        </FormField>

                        <div className="flex items-center justify-end gap-3 pt-1">
                            <Button type="submit" disabled={form.processing}>
                                {form.processing ? 'Sending…' : 'Send message'}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
}
