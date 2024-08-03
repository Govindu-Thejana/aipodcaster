"use client";
import PodcastCard from "@/components/PodcastCard";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import LoaderSpinner from "@/components/LoaderSpinner";
import { getLatestPodcasts } from "@/convex/podcasts";
import PodcastTable from "@/components/PodcastTable";

const Home = () => {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);
  const latestPodcasts = useQuery(api.podcasts.getLatestPodcasts);

  if (!trendingPodcasts || !latestPodcasts) return <LoaderSpinner />;

  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

        {/* <div className="flex min-h-screen flex-col items-center justify-between p-24 text-white-1">
          {/* {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)} 
        </div> */}

        <div className="podcast_grid">
          {trendingPodcasts?.map(
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
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Latest Podcasts</h1>
        <div className="flex flex-col">
          {latestPodcasts?.map(
            ({ _id, author, audioUrl, imageUrl, podcastTitle, audioDuration, views, _creationTime }, idx) => (
              <PodcastTable
                index={idx + 1}
                key={_creationTime}
                imgUrl={imageUrl as string}
                title={podcastTitle}
                podcastId={_id}
                views={views}
                duration={audioDuration}
                audioUrl={audioUrl}
                author={author}
                creationTime={_creationTime}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;