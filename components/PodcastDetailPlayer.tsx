"use client";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { api } from "@/convex/_generated/api";
import { useAudio } from "@/providers/AudioProvider";
import { PodcastDetailPlayerProps } from "@/types";

import LoaderSpinner from "./LoaderSpinner";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

interface SimpleConfirmDialogProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const SimpleConfirmDialog: React.FC<SimpleConfirmDialogProps> = ({ onConfirm, onCancel }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
    <div className="bg-[--accent-color] p-6 rounded shadow-lg">
      <p className="mb-4 py-5 text-white-1 font-bold text-lg">Are you sure you want to delete this podcast ?</p>
      <div className="flex justify-end space-x-4">
        <Button variant="secondary" className="bg-white-5 font-bold text-black-1 hover:bg-slate-50" onClick={onCancel}>Cancel</Button>
        <Button variant="destructive" className=" text-white-1 hover:bg-black-1 bg-black-2 font-extrabold " onClick={onConfirm}>Confirm</Button>
      </div>
    </div>
  </div>
);


const PodcastDetailPlayer = ({
  audioUrl,
  podcastTitle,
  author,
  imageUrl,
  podcastId,
  imageStorageId,
  audioStorageId,
  isOwner,
  authorImageUrl,
  authorId,
  views,
}: PodcastDetailPlayerProps) => {
  const router = useRouter();
  const { setAudio } = useAudio();
  const { toast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);
  const deletePodcast = useMutation(api.podcasts.deletePodcast);
  const [viewCount, setViewCount] = useState(views);
  const updateViews = useMutation(api.podcasts.updatePodcastViews);
  const [showOptions, setShowOptions] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deletePodcast({ podcastId, imageStorageId, audioStorageId });
      toast({ title: "Podcast deleted successfully" });
      router.push("/");
    } catch (error) {
      console.error("Error deleting podcast", error);
      toast({ title: "Error deleting podcast", variant: "destructive" });
    } finally {
      setIsDeleting(false);
      setShowDialog(false);
      setShowOptions(false);
    }
  };

  const handleViews = async () => {
    setViewCount((prev) => prev + 1);
    try {
      await updateViews({ podcastId });
    } catch (error) {
      console.error("Error updating views:", error);
      setViewCount((prev) => prev - 1);
    }
  };

  const handlePlay = () => {
    setAudio({
      title: podcastTitle,
      audioUrl,
      imageUrl,
      author,
      podcastId,
    });
    handleViews();
  };

  const handleUpdate = () => {
    setShowOptions(false); // Hide options after navigating
    router.push(`/podcast-update/${podcastId}`);
  };

  if (!imageUrl || !authorImageUrl) return <LoaderSpinner />;

  return (
    <div className="mt-6 flex w-full justify-between max-md:justify-center">
      <div className="flex flex-col gap-8 max-md:items-center md:flex-row">
        <Image
          src={imageUrl}
          width={250}
          height={250}
          alt="Podcast image"
          className="aspect-square rounded-lg"
        />
        <div className="flex w-full flex-col gap-5 max-md:items-center md:gap-9">
          <article className="flex flex-col gap-2 max-md:items-center">
            <h1 className="text-32 font-extrabold tracking-[-0.32px] text-white-1">
              {podcastTitle}
            </h1>
            <figure
              className="flex cursor-pointer items-center gap-2"
              onClick={() => router.push(`/profile/${authorId}`)}
            >
              <Image
                src={authorImageUrl}
                width={30}
                height={30}
                alt="Caster icon"
                className="rounded-full object-cover"
              />
              <h2 className="text-16 font-normal text-white-3">{author}</h2>
            </figure>
          </article>
          <Button
            onClick={handlePlay}
            className="text-16 w-full max-w-[250px] font-extrabold text-white-1"
          >
            <Image
              src="/icons/Play.svg"
              width={20}
              height={20}
              alt="Play icon"
            />
            &nbsp; Play podcast
          </Button>
          <p className="text-sm text-white-3">Views: {viewCount}</p>
        </div>
      </div>
      {isOwner && (
        <div className="relative mt-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowOptions((prev) => !prev)}
            aria-label="Options"
          >
            <Image
              src="/icons/three-dots.svg"
              width={25}
              height={20}
              alt="Options icon"
            />
          </Button>
          {showOptions && (
            <div className="absolute -left-32 -top-2 z-10 flex w-32 flex-col gap-2 rounded-md bg-black-6 p-2">
              <Button
                variant="ghost"
                className="flex items-center justify-start gap-2 text-white-1"
                onClick={() => {
                  setShowDialog(true);
                  setShowOptions(false); // Hide options when delete is confirmed
                }}
              >
                <Image
                  src="/icons/delete.svg"
                  width={20}
                  height={20}
                  alt="Delete icon"
                />
                Delete
              </Button>
            </div>
          )}
          {isDeleting && <LoaderSpinner />}
        </div>
      )}
      {showDialog && (
        <SimpleConfirmDialog
          onConfirm={handleDelete}
          onCancel={() => setShowDialog(false)}
        />
      )}
    </div>
  );
};

export default PodcastDetailPlayer;
