import React from 'react';
import Navbar from "@/components/Navbar";
import { GoArrowUpRight } from "react-icons/go";
import HyperText from "@/components/ui/hyper-text";
import Link from 'next/link';

const Hero: React.FC = () => {
    const textGradient = 'bg-gradient-to-br from-teal-200 via-cyan-400 to-blue-600 text-transparent bg-clip-text';

    return (
        <div className="relative min-h-screen bg-pcolor">
            <div className="fixed w-full z-20">
                <Navbar />
            </div>

            <section
                id="home"
                className="relative flex flex-col lg:flex-row min-h-screen items-center justify-center bg-[url('https://i.imgur.com/YOUR_BACKGROUND_IMAGE.jpg')] bg-cover bg-center px-4 sm:px-6 lg:px-8 py-20 lg:py-0"
            >
                <div className="absolute inset-0 bg-black opacity-50" />

                <div className="flex-1 z-10 max-w-3xl mx-auto lg:mx-0 space-y-8 text-center lg:text-left">
                    <div className="text-6xl sm:text-5xl lg:text-8xl font-bold">
                        <HyperText className={`${textGradient} font-serif font-medium`} text="AiPodcastr" />
                    </div>

                    <div className="space-y-4">
                        <h1 className="font-poppins font-medium text-3xl sm:text-4xl lg:text-5xl text-white-1 leading-tight">
                            The Next Generation<br className="hidden sm:inline" />Podcast Platform
                        </h1>
                        <p className="text-gray-300 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg">
                            Discover the Future of Podcasting With our cutting-edge AI platform,<br className="hidden sm:inline" /> whether you're a newcomer or a seasoned pro, our innovative tools streamline your workflow and elevate your podcasting experience.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <span className={`${textGradient} text-lg font-semibold`}>Get Started For Free</span>
                        <Link href="/home" className="inline-block">
                            <button className="bg-scolor hover:bg-light text-white font-bold py-2 px-6 rounded-lg transition duration-300 flex items-center space-x-2">
                                Try AiPodcastr
                                <GoArrowUpRight className="text-xl ml-1" />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex-1 mt-12 lg:mt-0 max-w-2xl mx-auto lg:mx-0">
                    <img
                        className="w-full h-auto object-contain rounded-lg shadow-2xl"
                        src="https://i.imgur.com/8RJDGMU.png"
                        alt="Podcast illustration"
                    />

                </div>
            </section>
        </div>
    );
};

export default Hero;