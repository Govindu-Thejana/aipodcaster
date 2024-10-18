/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lovely-flamingo-139.convex.cloud'

            },
            {
                protocol: 'https',
                hostname: 'acoustic-roadrunner-459.convex.cloud'
            },
            {
                protocol: 'https',
                hostname: 'img.clerk.com'
            },
            {
                protocol: 'https',
                hostname: 'giddy-shrimp-940.convex.cloud'
            },
            {
                protocol: 'https',
                hostname: 'open-ai-text-to-speech1.p.rapidapi.com'
            },
            {
                protocol: 'https',
                hostname: 'dalle-3.p.rapidapi.com'
            },
            {
                protocol: 'https',
                hostname: 'open-ai21.p.rapidapi.com'
            },
            {
                protocol: 'https',
                hostname: 'chatgpt-42.p.rapidapi.com'
            }
            ,
            {
                protocol: 'https',
                hostname: 'img.freepik.com'
            }

        ]
    }
};

export default nextConfig;
