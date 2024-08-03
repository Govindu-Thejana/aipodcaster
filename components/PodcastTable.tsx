import { LatestPodcastCardProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Helper function to format duration
const formatDuration = (seconds: number): string => {
  const date = new Date(seconds * 1000); // Convert seconds to milliseconds
  return date.toISOString().substr(11, 8); // Extract hh:mm:ss from ISO string
};

const PodcastTable = ({
  imgUrl,
  title,
  duration,
  podcastId,
  views,
  author,
  index,

}: LatestPodcastCardProps) => {
  const router = useRouter();

  const handleViews = async () => {

    router.push(`/podcasts/${podcastId}`, {
      scroll: true,
    });
  }

  return (
    <div className="cursor-pointer podcast_item">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 border-b border-gray-800 cursor-pointer" onClick={handleViews}>
          <div className="flex items-center space-x-4">
            <span className="text-16 font-normal text-white-1">{index}</span>
            <Image
              src={imgUrl}
              width={50}
              height={50}
              alt="logo"
              className="w-16 h-16 rounded-xl"
            />
            <div>
              <div className="text-16 font-normal text-white-1">{title}</div>
              <div className="text-16 font-normal text-gray-500">{author}</div>
            </div>
          </div>
          <div className="flex items-center space-x-20">

            <div className="flex items-center space-x-4">
              <Image src="/icons/headphone.svg" width={20} height={20} alt="clock" />
              <span className="text-16 font-normal text-white-1">{views}</span>
            </div>
            <div className="flex items-center space-x-4">
              <Image src="/icons/clock.jpg" className="rounded-full" width={20} height={20} alt="clock" />
              <span className="text-16 font-normal text-white-1">{formatDuration(duration)}</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default PodcastTable;