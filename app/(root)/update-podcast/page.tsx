"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Loader } from "lucide-react";
import GenerateThumbnail from "@/components/GenerateThumbnail";
import LoaderSpinner from "@/components/LoaderSpinner";

const formSchema = z.object({
    podcastTitle: z.string().min(2),
    podcastDescription: z.string().min(2),
});

interface UpdatePodcastProps {
    podcastId: Id<"podcasts">;
}

const UpdatePodcast = ({ podcastId }: UpdatePodcastProps) => {
    const router = useRouter();
    const { toast } = useToast();

    const [imagePrompt, setImagePrompt] = useState("");
    const [imageStorageId, setImageStorageId] = useState<Id<"_storage"> | null>(null);
    const [imageUrl, setImageUrl] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const updatePodcast = useMutation(api.podcasts.updatePodcast);
    const podcastData = useQuery(api.podcasts.getPodcastById, { podcastId });


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            podcastTitle: "",
            podcastDescription: "",
        },
    });

    useEffect(() => {
        if (podcastData) {
            form.reset({
                podcastTitle: podcastData.podcastTitle,
                podcastDescription: podcastData.podcastDescription,
            });
            setImageUrl(podcastData.imageUrl);
            setImageStorageId(podcastData.imageStorageId);
        }
    }, [podcastData, form]);

    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            setIsSubmitting(true);
            await updatePodcast({
                podcastId,
                podcastTitle: data.podcastTitle,
                podcastDescription: data.podcastDescription,
                imageUrl,
                imageStorageId: imageStorageId!,
            });
            toast({ title: "Podcast updated" });
            setIsSubmitting(false);
            router.push("/");
        } catch (error) {
            console.error(error);
            toast({
                title: "Error updating podcast",
                variant: "destructive",
            });
            setIsSubmitting(false);
        }
    }

    if (!podcastData) {
        return <LoaderSpinner />;
    }

    return (
        <section className="mt-10 flex flex-col">
            <h1 className="text-20 font-bold text-white-1">Update Podcast</h1>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="mt-12 flex w-full flex-col"
                >
                    <div className="flex flex-col gap-[30px] border-b border-black-5 pb-10">
                        <FormField
                            control={form.control}
                            name="podcastTitle"
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-2.5">
                                    <FormLabel className="text-16 font-bold text-white-1">
                                        Title
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="input-class focus-visible:ring-offset-[--accent-color]"
                                            placeholder={podcastData?.podcastTitle || "Podcast Title"}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-white-1" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="podcastDescription"
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-2.5">
                                    <FormLabel className="text-16 font-bold text-white-1">
                                        Description
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            className="input-class focus-visible:ring-offset-[--accent-color]"
                                            placeholder={
                                                podcastData?.podcastDescription || "Write a short podcast description"}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-white-1" />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="flex flex-col pt-10">
                        <GenerateThumbnail
                            setImage={setImageUrl}
                            setImageStorageId={setImageStorageId}
                            image={imageUrl}
                            imagePrompt={imagePrompt}
                            setImagePrompt={setImagePrompt}
                        />

                        <div className="mt-10 w-full">
                            <Button
                                type="submit"
                                className="text-16 w-full bg-[--accent-color] py-4 font-extrabold text-white-1 transition-all duration-500 hover:bg-black-1"
                            >
                                {isSubmitting ? (
                                    <>
                                        Updating...
                                        <Loader size={20} className="animate-spin ml-2" />
                                    </>
                                ) : (
                                    "Update Podcast"
                                )}
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>
        </section>
    );
};

export default UpdatePodcast;