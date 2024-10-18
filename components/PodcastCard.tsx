import { PodcastCardProps } from "@/types";
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
  const [viewCount] = useState(views);
  const router = useRouter();

  const handleClick = async () => {
    router.push(`/podcasts/${podcastId}`, {
      scroll: true,
    });
  };

  return (
    <div className="cursor-pointer podcast_item" onClick={handleClick}>
      <figure className="flex flex-col gap-2">
        <Image
          src={imgUrl}
          width={174}
          height={174}
          alt={title}
          className="aspect-square h-fit w-full rounded-xl "
        />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-4">
            {description}
          </h2>
          <h3 className="text-12 truncate font-extralight text-white-5">
            {viewCount} listeners
          </h3>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
