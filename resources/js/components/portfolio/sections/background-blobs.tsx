export function BackgroundBlobs() {
    return (
        <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
        >
            <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-300/30 blur-3xl dark:bg-brand-500/20" />
            <div className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-amber-300/20 blur-3xl dark:bg-amber-500/10" />
        </div>
    );
}
