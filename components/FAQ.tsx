import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const PodcastCreationFAQ = () => {

    return (
        <div className='grid w-auto sm:w-full'>
            <span className="flex text-2xl sm:text-3xl md:text-4xl py-1 pt-5 font-bold text-transparent bg-clip-text text-gradient bg-gradient-to-r">
                Frequently Asked Questions
            </span>

            <Accordion type="single" collapsible className="w-full py-5 text-white-1">
                <AccordionItem value="item-1">
                    <AccordionTrigger>How does AI text-to-voice work for podcasts?</AccordionTrigger>
                    <AccordionContent>
                        Our AI text-to-voice technology converts your written content into natural-sounding speech. Simply input your script, choose from a variety of voices, and our AI will generate high-quality audio for your podcast.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Can I customize the AI-generated thumbnails?</AccordionTrigger>
                    <AccordionContent>
                        Absolutely! While our AI creates eye-catching thumbnails automatically, you have full control to edit and customize them. You can adjust colors, add text, or incorporate your own images to make them perfectly match your podcast&apos;s style.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Is podcast hosting really free?</AccordionTrigger>
                    <AccordionContent>
                        Yes, we offer free hosting for your AI-generated podcasts. There are no hidden fees or time limits. You can create, upload, and distribute your podcasts to major platforms at no cost. We also offer premium features for those who need advanced analytics or higher bandwidth.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>How easy is it to create a podcast with your platform?</AccordionTrigger>
                    <AccordionContent>
                        Creating a podcast with our platform is incredibly simple. Our intuitive interface guides you through each step: writing or uploading your script, converting it to audio, generating a thumbnail, and publishing. The entire process can be completed in just a few clicks, making podcasting accessible to creators of all experience levels.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>

    )
}

export default PodcastCreationFAQ;
