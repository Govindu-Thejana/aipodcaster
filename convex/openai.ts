import { action } from "./_generated/server";
import { v } from "convex/values";

import OpenAI from "openai";
import { SpeechCreateParams } from "openai/resources/audio/speech";

//I NEED TO ADD THE HOSTNAME TO next.config.mjs if I am going to change the api

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})


export const generateAudioAction = action({
    args: { input: v.string(), voice: v.string() },
    handler: async (_, { voice, input }) => {

        const rapidApiKey = process.env.RAPID_API_KEY;
        const url = 'https://open-ai-text-to-speech1.p.rapidapi.com/';
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': rapidApiKey as string,
                'x-rapidapi-host': 'open-ai-text-to-speech1.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'tts-1',
                voice: voice as SpeechCreateParams['voice'],
                input,
            })
        };

        try {
            const response = await fetch(url, options);
            const buffer = await response.arrayBuffer(); // Use arrayBuffer() instead of buffer()

            return buffer;

        } catch (error) {
            console.error(error);
            throw new Error('Failed to generate speech');
        }
    },
});


export const generateThumbnailAction = action({
    args: { prompt: v.string() },
    handler: async (_, { prompt }) => {
        const RapidApiKey = process.env.RAPID_API_CHATGPT_42_KEY;

        const url = 'https://chatgpt-42.p.rapidapi.com/texttoimage';
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': RapidApiKey as string,
                'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: prompt,
                width: 1024,
                height: 1024
            })
        };

        try {
            const response = await fetch(url, options);
            console.log('API Response:', response);

            const result = await response.json();
            console.log('result:', result);

            if (!result.generated_image) {
                console.error('Unexpected API response:', result.generated_image);
                throw new Error('Error generating thumbnail');
            }

            const imageUrl = result.generated_image;
            console.log('Generated Image URL:', imageUrl);

            const imageResponse = await fetch(imageUrl);
            const buffer = await imageResponse.arrayBuffer();
            return buffer;

        } catch (error) {
            console.error('Error in handleGenerateThumbnail:', error);
            throw new Error('Error fetching the image');
        }
    }
});


// export const generateThumbnailAction = action({
//     args: { prompt: v.string() },
//     handler: async (_, { prompt }) => {
//         const url = 'https://dalle-3.p.rapidapi.com/api/v1/generate';
//         const options = {
//             method: 'POST',
//             headers: {
//                 'x-rapidapi-key': 'f7966a9fb0msh2df889fd5b80e59p1789bajsnc1b84a7bfabe',
//                 'x-rapidapi-host': 'dalle-3.p.rapidapi.com',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 prompt,
//                 n: 1,
//                 size: '1024x1024',
//                 quality: 'standard'
//             })
//         };

//         try {
//             const response = await fetch(url, options);
//             const result = await response.json();
//            console.log('API Response:', response); // Log the response data to the console
//            console.log('result:', result); // Log the response data to the console

//             if (!result.url) {
//                 console.error('Unexpected API response:', result);
//                 throw new Error('Error generating thumbnail 1');
//             }

//             const imageUrl = result.url;
//            console.log('result:', result); // Log the response data to the console

//             const imageResponse = await fetch(imageUrl);
//             const buffer = await imageResponse.arrayBuffer();
//             return buffer;

//         } catch (error) {
//             console.error('Error in handleGenerateThumbnail:', error);
//             throw new Error('Error fetching the image');
//         }
//     }
// })

// export const generateAudioAction = action({
//     args: { input: v.string(), voice: v.string() },
//     handler: async (_, { voice, input }) => {
//         const mp3 = await openai.audio.speech.create({
//             model: "tts-1",
//             voice: voice as SpeechCreateParams['voice'],
//             input,
//         });

//         const buffer = await mp3.arrayBuffer();

//         return buffer;
//     },
// });

// export const generateThumbnailAction = action({
//     args: { prompt: v.string() },
//     handler: async (_, { prompt }) => {
//         const response = await openai.images.generate({
//             model: 'dall-e-3',
//             prompt,
//             size: '1024x1024',
//             quality: 'standard',
//             n: 1,
//         })

//         const url = response.data[0].url;

//         if (!url) {
//             throw new Error('Error generating thumbnail');
//         }

//         const imageResponse = await fetch(url);
//         const buffer = await imageResponse.arrayBuffer();
//         return buffer;
//     }
// })