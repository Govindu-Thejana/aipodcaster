"use client";
import PodcastCard from "@/components/PodcastCard";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import LoaderSpinner from "@/components/LoaderSpinner";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const TrendingPodcasts = () => {
    const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    if (!trendingPodcasts) return <LoaderSpinner />;

    return (
        <div className="flex-row" ref={ref}>
            <motion.span
                className="flex items-center justify-center text-2xl sm:text-3xl md:text-4xl py-1 font-bold text-transparent bg-clip-text text-gradient bg-gradient-to-r"
                initial={{ opacity: 0, y: -20 }}
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
            >
                Trending Podcasts
            </motion.span>
            <section className="flex flex-col gap-5">
                <h1 className="text-20 font-bold text-gradient text-white-1"></h1>
                <motion.div
                    className="podcast_grid"
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: {
                            opacity: 0,
                            scale: 0.8,
                        },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                                delayChildren: 0.3,
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                >
                    {trendingPodcasts?.map(
                        ({ _id, podcastTitle, podcastDescription, imageUrl, views }) => (
                            <motion.div
                                key={_id}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <PodcastCard
                                    imgUrl={imageUrl as string}
                                    title={podcastTitle}
                                    description={podcastDescription}
                                    podcastId={_id}
                                    views={views}
                                />
                            </motion.div>
                        )
                    )}
                </motion.div>
            </section>
        </div>
    );
}

export default TrendingPodcasts;