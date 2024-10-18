"use client";

import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import Hero from "@/components/HeroSection";
import Services from "@/components/Services";
import Sponsors from "@/components/Sponsors";
import { MarqueeDemo } from "@/components/Reviews";

const LatestPodcasts = dynamic(() => import("@/components/LatestPodcasts"));
const TrendingPodcasts = dynamic(() => import("@/components/TrendingPodcasts"));

import { StaggeredFadeIn, Rotate3D, ParallaxSection, TextReveal, GlowEffect, ScaleAndFade } from "@/components/FuturisticAnimations";
import PodcastCreationFAQ from "@/components/FAQ";
import IconCloudDemo from "@/components/IconCloud";

const LandingPage = () => {
    return (
        <div>
            <header>
                <Hero />
            </header>
            <main className="px-4 flex flex-col gap-y-20 sm:px-6 md:px-10 lg:px-16 xl:px-48 py-10">

                <Services />

                <TrendingPodcasts />

                <GlowEffect>
                    <Sponsors />
                </GlowEffect>

            </main>

            <ScaleAndFade>
                <MarqueeDemo />
            </ScaleAndFade>

            <footer>
                <StaggeredFadeIn>
                    <div className="px-4 flex flex-col gap-y-20 sm:px-6 md:px-10 lg:px-16 xl:px-48 py-10">
                        <LatestPodcasts />
                    </div>
                </StaggeredFadeIn>

                <div className="flex flex-col gap-y-20 px-4 py-10 sm:px-6 md:px-10 lg:px-16 xl:px-48 lg:flex-row lg:gap-x-10 lg:gap-y-0">
                    <PodcastCreationFAQ />
                    <div className="flex justify-center">
                        <IconCloudDemo />
                    </div>
                </div>

                <Footer />
            </footer>
        </div>
    );
};

export default LandingPage;