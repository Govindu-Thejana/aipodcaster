import { api } from "@/convex/_generated/api";
import { PodcastCardProps } from "@/types";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const PodcastCard = ({
  imgUrl,
  title,
  description,
  podcastId,
  views,

}: PodcastCardProps) => {
  const [viewCount, setViewCount] = useState(views);
  const router = useRouter();
  const updateViews = useMutation(api.podcasts.updatePodcastViews);

  const handleViews = async () => {
    const newViewCount = viewCount + 1;
    setViewCount(newViewCount);

    try {
      await updateViews({ podcastId });
      console.log("Views updated successfully");
    } catch (error) {
      console.error("Error updating views:", error);
      setViewCount(viewCount); // Revert view count if update fails
    }

    router.push(`/podcasts/${podcastId}`, {
      scroll: true,
    });
  };

  return (
    <div className="cursor-pointer podcast_item" onClick={handleViews}>
      <figure className="flex flex-col gap-2">
        <Image
          src={imgUrl}
          width={174}
          height={174}
          alt={title}
          className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
        />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-4">
            {description}
          </h2>
          <h3 className="text-12 truncate font-extralight text-white-5">
            {viewCount} views
          </h3>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
