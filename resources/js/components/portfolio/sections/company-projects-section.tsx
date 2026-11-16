import { projects } from '@/components/portfolio/data';
import { GithubIcon } from '@/components/portfolio/icons';
import { ProjectImage, SectionHeading } from '@/components/portfolio/parts';
import { TechIcon } from '@/components/portfolio/tech-icons';
import { cn, formatUrlForDisplay } from '@/lib/utils';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const ALL = 'All';

/**
 * The Company section as an image carousel: each project is a picture slide
 * that reveals its full description on hover (desktop) or tap (touch). A
 * company filter sits above; arrow controls scroll the snap track.
 */
export function CompanyProjectsSection() {
    const items = projects;
    const [active, setActive] = useState(ALL);
    const [openId, setOpenId] = useState<string | null>(null);
    const [paused, setPaused] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);
    const pointerType = useRef<string | null>(null);

    const companies = useMemo(() => {
        const seen: string[] = [];
        for (const p of items) {
            if (p.company && !seen.includes(p.company)) seen.push(p.company);
        }
        return seen;
    }, [items]);

    const filtered =
        active === ALL ? items : items.filter((p) => p.company === active);

    const selectCompany = (c: string) => {
        setActive(c);
        setOpenId(null);
    };

    // Render the slides three times so there's always a full set of runway on
    // both sides — the scroll position is kept parked in the middle copy.
    const loop = filtered.length > 1;
    const slides = loop ? [...filtered, ...filtered, ...filtered] : filtered;

    // Advance one card. Before stepping, re-park within the middle copy by
    // shifting a whole set (identical content, so invisible) whenever we've
    // drifted into the outer copies — this keeps the loop endless in both
    // directions with no reachable start or end.
    const advance = useCallback(
        (dir: 1 | -1) => {
            const el = trackRef.current;
            if (!el) return;
            // Width of one set = offset of the first card of the middle copy.
            const setW =
                (el.children[filtered.length] as HTMLElement | undefined)
                    ?.offsetLeft ?? 0;
            // Direct assignment is always synchronous + instant (immune to CSS
            // scroll-behavior), so it can't be swallowed by the smooth step below.
            if (loop && setW > 0) {
                if (el.scrollLeft < setW) {
                    el.scrollLeft += setW;
                } else if (el.scrollLeft >= setW * 2) {
                    el.scrollLeft -= setW;
                }
            }
            // Exact width of one card + gap, so each step lands on a slide.
            const a = el.children[0] as HTMLElement | undefined;
            const b = el.children[1] as HTMLElement | undefined;
            const stride =
                a && b ? b.offsetLeft - a.offsetLeft : el.clientWidth;
            el.scrollBy({ left: dir * stride, behavior: 'smooth' });
        },
        [loop, filtered.length],
    );

    // Start (and re-center after filtering) on the second copy so the active
    // card sits centered with a peek on both sides — matching the resting look
    // once the loop is running, instead of flush-left at scroll position 0.
    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;
        const target = (
            loop ? el.children[filtered.length] : el.children[0]
        ) as HTMLElement | undefined;
        if (!target) return;
        el.scrollLeft =
            target.offsetLeft - (el.clientWidth - target.clientWidth) / 2;
    }, [loop, filtered.length, active]);

    // Auto-advance on the seamless loop; pauses on hover/focus, while a card is
    // pinned open, and for reduced motion.
    useEffect(() => {
        if (!loop || paused || openId) return;
        if (
            typeof window !== 'undefined' &&
            window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
        ) {
            return;
        }
        const id = window.setInterval(() => advance(1), 4500);
        return () => window.clearInterval(id);
    }, [loop, paused, openId, advance]);

    return (
        <section id="projects" className="mt-28">
            <SectionHeading title="Company Projects I Worked On" />

            {companies.length >= 1 && (
                <div
                    role="tablist"
                    aria-label="Filter company projects by company"
                    className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-stone-200 pb-3 dark:border-stone-800"
                >
                    {[ALL, ...companies].map((c) => {
                        const isActive = active === c;
                        return (
                            <button
                                key={c}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => selectCompany(c)}
                                className={cn(
                                    'relative pb-3 font-mono text-xs uppercase tracking-[0.2em] transition-colors after:absolute after:inset-x-0 after:-bottom-px after:h-px after:transition-colors',
                                    isActive
                                        ? 'text-brand-600 after:bg-brand-500 dark:text-brand-400 dark:after:bg-brand-400'
                                        : 'text-stone-400 after:bg-transparent hover:text-stone-700 dark:text-stone-500 dark:hover:text-stone-200',
                                )}
                            >
                                {c}
                            </button>
                        );
                    })}
                    <span className="ml-auto font-mono text-xs text-stone-400 dark:text-stone-600">
                        {String(filtered.length).padStart(2, '0')}{' '}
                        {filtered.length === 1 ? 'project' : 'projects'}
                    </span>
                </div>
            )}

            <div
                className="relative mt-8"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onFocusCapture={() => setPaused(true)}
                onBlurCapture={() => setPaused(false)}
                onTouchStart={() => setPaused(true)}
            >
                {/* Arrow controls */}
                {loop && (
                    <>
                        <button
                            type="button"
                            aria-label="Previous project"
                            onClick={() => advance(-1)}
                            className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-2.5 text-white/90 backdrop-blur-md transition hover:border-white/40 hover:bg-black/60 hover:text-white sm:block"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                            type="button"
                            aria-label="Next project"
                            onClick={() => advance(1)}
                            className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-2.5 text-white/90 backdrop-blur-md transition hover:border-white/40 hover:bg-black/60 hover:text-white sm:block"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </>
                )}

                {/* Snap track */}
                <div
                    ref={trackRef}
                    className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {slides.map((p, idx) => {
                        const isOpen = openId === p.title;
                        return (
                            <article
                                key={`${p.title}-${idx}`}
                                onPointerDown={(e) => {
                                    pointerType.current = e.pointerType;
                                }}
                                onClick={() => {
                                    // A mouse already reveals on hover; only
                                    // touch needs a tap to pin the card open.
                                    if (pointerType.current === 'mouse') return;
                                    setOpenId(isOpen ? null : p.title);
                                }}
                                onMouseLeave={() => {
                                    if (isOpen) setOpenId(null);
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setOpenId(isOpen ? null : p.title);
                                    }
                                }}
                                role="button"
                                tabIndex={0}
                                aria-expanded={isOpen}
                                className="group relative w-full shrink-0 basis-full cursor-pointer snap-center overflow-hidden rounded-[1.75rem] border border-stone-200 bg-stone-900 shadow-sm outline-none ring-brand-500/50 transition focus-visible:ring-2 dark:border-stone-800 sm:basis-[88%] lg:basis-[80%]"
                            >
                                <div className="relative aspect-[16/10] w-full">
                                    {p.image && (
                                        <ProjectImage
                                            src={p.image}
                                            alt={`${p.title} screenshot`}
                                            className={p.imageClassName}
                                        />
                                    )}

                                    {/* Resting caption */}
                                    <div
                                        className={cn(
                                            'absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black via-black/60 to-transparent p-5 pt-16 transition-opacity duration-300 sm:p-7 sm:pt-20',
                                            isOpen
                                                ? 'opacity-0'
                                                : 'opacity-100 group-hover:opacity-0',
                                        )}
                                    >
                                        <div>
                                            <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-brand-300">
                                                <span
                                                    aria-hidden
                                                    className="h-px w-6 bg-brand-300/60"
                                                />
                                                {p.subtitle}
                                            </p>
                                            <h3 className="mt-1.5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                                                {p.title}
                                            </h3>
                                        </div>
                                        <span className="hidden shrink-0 font-mono text-[11px] tracking-widest text-white/50 sm:block sm:text-right">
                                            {String(
                                                (idx % filtered.length) + 1,
                                            ).padStart(2, '0')}
                                            <span className="text-white/25">
                                                {' / '}
                                                {String(
                                                    filtered.length,
                                                ).padStart(2, '0')}
                                            </span>
                                        </span>
                                    </div>

                                    {/* Reveal overlay */}
                                    <div
                                        className={cn(
                                            'absolute inset-0 flex flex-col justify-end gap-3 overflow-y-auto bg-black/80 p-6 backdrop-blur-md transition-opacity duration-300 sm:p-8',
                                            isOpen
                                                ? 'opacity-100'
                                                : 'opacity-0 group-hover:opacity-100',
                                        )}
                                    >
                                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                                            <p className="font-mono text-[11px] uppercase tracking-widest text-brand-300">
                                                {p.subtitle}
                                            </p>
                                            <span className="font-mono text-xs text-white/60">
                                                {p.period}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                                            {p.title}
                                        </h3>

                                        <ol className="space-y-2 border-t border-white/10 pt-3 text-sm leading-relaxed text-white/85">
                                            {p.bullets.map((b, i) => (
                                                <li
                                                    key={b}
                                                    className="grid grid-cols-[1.75rem_1fr]"
                                                >
                                                    <span
                                                        aria-hidden
                                                        className="pt-0.5 font-mono text-[11px] text-brand-300/70"
                                                    >
                                                        {String(i + 1).padStart(
                                                            2,
                                                            '0',
                                                        )}
                                                    </span>
                                                    <span>{b}</span>
                                                </li>
                                            ))}
                                        </ol>

                                        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-3">
                                            {p.stack.map((s) => (
                                                <span
                                                    key={s}
                                                    className="inline-flex items-center gap-1.5 font-mono text-[11px] text-white/70"
                                                >
                                                    <TechIcon name={s} />
                                                    {s}
                                                </span>
                                            ))}
                                        </div>

                                        {(p.live || p.repo) && (
                                            <div className="mt-1 flex flex-wrap items-center gap-4">
                                                {p.live && (
                                                    <a
                                                        href={p.live}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                        className="group/link inline-flex items-center gap-2 font-mono text-xs text-brand-300 transition hover:text-brand-200"
                                                    >
                                                        <ExternalLink className="h-3.5 w-3.5" />
                                                        <span className="border-b border-dashed border-brand-300/40 pb-0.5 transition group-hover/link:border-brand-200">
                                                            {formatUrlForDisplay(
                                                                p.live,
                                                            )}
                                                        </span>
                                                    </a>
                                                )}
                                                {p.repo && (
                                                    <a
                                                        href={p.repo}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                        className="group/link inline-flex items-center gap-2 font-mono text-xs text-white/70 transition hover:text-white"
                                                    >
                                                        <GithubIcon className="h-3.5 w-3.5" />
                                                        <span className="border-b border-dashed border-white/25 pb-0.5 transition group-hover/link:border-white/60">
                                                            {formatUrlForDisplay(
                                                                p.repo,
                                                            )}
                                                        </span>
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <p className="mt-1 text-center font-mono text-[11px] text-stone-400 dark:text-stone-600 sm:hidden">
                    Tap a card to read · swipe for more
                </p>
            </div>
        </section>
    );
}
