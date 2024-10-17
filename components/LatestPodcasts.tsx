"use client";
import PodcastCard from "@/components/PodcastCard";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import LoaderSpinner from "@/components/LoaderSpinner";


const LatestPodcasts = () => {
    const latestPodcasts = useQuery(api.podcasts.getLatestPodcasts);

    if (!latestPodcasts) return <LoaderSpinner />;

    return (
        <div className="flex-row">
            <span className="flex items-center justify-center text-2xl sm:text-3xl md:text-4xl py-1 font-bold text-transparent bg-clip-text text-gradient bg-gradient-to-r">
                Latest Podcasts
            </span>
            <section className="flex flex-col gap-5">
                <h1 className="text-20 font-bold text-gradient text-white-1"></h1>
                <div className="podcast_grid">
                    {latestPodcasts?.map(
                        ({ _id, podcastTitle, podcastDescription, imageUrl, views }) => (
                            <PodcastCard
                                key={_id}
                                imgUrl={imageUrl as string}
                                title={podcastTitle}
                                description={podcastDescription}
                                podcastId={_id}
                                views={views}
                            />
                        )
                    )}
                </div>
            </section>
        </div>
    )
}

export default LatestPodcasts;