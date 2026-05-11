import { BackgroundBlobs } from '@/components/portfolio/sections/background-blobs';
import { ContactSection } from '@/components/portfolio/sections/contact-section';
import { ExperienceSection } from '@/components/portfolio/sections/experience-section';
import { HeaderNav } from '@/components/portfolio/sections/header-nav';
import { HeroSection } from '@/components/portfolio/sections/hero-section';
import { ProjectsSection } from '@/components/portfolio/sections/projects-section';
import { SiteFooter } from '@/components/portfolio/sections/site-footer';
import { SkillsSection } from '@/components/portfolio/sections/skills-section';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { useScrollSpy } from '@/lib/hooks/use-scroll-spy';
import { useScrolled } from '@/lib/hooks/use-scrolled';
import { useTheme } from '@/lib/hooks/use-theme';
import { Head } from '@inertiajs/react';

export default function Portfolio() {
    const { theme, toggleTheme } = useTheme();
    const scrolled = useScrolled(16);
    const activeSection = useScrollSpy();

    return (
        <>
            <Head title="Jean Maverick Dela Cruz — Portfolio" />

            <TooltipProvider delayDuration={250}>
                <div className="min-h-screen bg-white font-sans text-stone-700 antialiased transition-colors dark:bg-stone-950 dark:text-stone-200">
                    <BackgroundBlobs />

                    <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-24">
                        <HeaderNav
                            scrolled={scrolled}
                            activeSection={activeSection}
                            theme={theme}
                            onToggleTheme={toggleTheme}
                        />
                        <HeroSection />
                        <ExperienceSection />
                        <ProjectsSection />
                        <SkillsSection />
                        <ContactSection />
                        <SiteFooter />
                    </div>
                </div>
                <Toaster theme={theme} />
            </TooltipProvider>
        </>
    );
}
