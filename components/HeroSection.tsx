import React from 'react';
import Navbar from "@/components/Navbar";
import { GoArrowUpRight } from "react-icons/go";
import HyperText from "@/components/ui/hyper-text";
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
    const textGradient = 'bg-gradient-to-br from-teal-200 via-cyan-400 to-blue-600 text-transparent bg-clip-text';

    return (
        <div className="relative min-h-screen bg-pcolor overflow-hidden">
            <div className="fixed w-full z-20">
                <Navbar />
            </div>

            <section
                id="home"
                className="relative flex min-h-screen items-center justify-center bg-[url('/images/bg.jpeg')] bg-cover bg-center bg-fixed px-4 sm:px-6 lg:px-8 py-24 lg:py-0"
            >
                {/* Enhanced overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/50 backdrop-blur-[2px]" />

                {/* Decorative circle */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-blue-600/20 rounded-full blur-3xl" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-5xl mx-auto text-center space-y-10 px-4 sm:px-6 lg:px-8"
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0. }}
                        className="relative inline-block"
                    >
                        <HyperText
                            className={`${textGradient} font-serif font-medium text-7xl sm:text-8xl lg:text-9xl relative`}
                            text="AIPodcastr"
                        />
                    </motion.div>

                    <div className="space-y-8 max-w-3xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="font-poppins font-medium text-3xl sm:text-4xl lg:text-5xl text-white-1 leading-tight"
                        >
                            The Next Generation
                            <span className="relative block mt-2">
                                <span className="absolute -inset-1 bg-gradient-to-r from-teal-200 to-blue-600 blur opacity-20" />
                                <span className="relative">Podcast Platform</span>
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-gray-300 text-lg sm:text-xl leading-relaxed"
                        >
                            Discover the Future of Podcasting with our cutting-edge AI platform.
                            Whether you&apos;re a newcomer or a seasoned pro, our innovative tools
                            streamline your workflow and elevate your podcasting experience.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8"
                    >
                        <span className={`${textGradient} text-xl font-semibold hover:scale-105 transition-transform group`}>
                            Get Started For Free
                            <span className="block h-0.5 bg-gradient-to-r from-teal-200 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                        </span>
                        <Link href="/home" className="inline-block w-full sm:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative w-full sm:w-auto bg-scolor text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group overflow-hidden"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative flex items-center text-white-1">
                                    Try AIPodcastr
                                    <GoArrowUpRight className="text-2xl ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                </span>
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
};

export default Hero;