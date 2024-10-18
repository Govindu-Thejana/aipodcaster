import React from 'react';
import { Twitter, Facebook, Instagram, Youtube, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';


const Footer = () => {
    return (
        <footer className="outline bg-blur py-12 pb-5 border-t border-gray-500">
            <div className="container mx-auto px-6">
                <div className="md:flex justify-between gap-x-10">
                    {/* Left Section: Logo and Description */}
                    <div className="mb-8 md:mb-0">
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <Image src="/icons/microphone.png" alt="Logo" width={60} height={60} className="h-12 pt-2" />
                            <h3 className="text-2xl text-gradient text-white-1 font-bold">AIPodcastr</h3>
                        </div>
                        <div className="flex justify-center">
                            <p className="mt-4 text-gray-400 text-sm text-center">
                                Transform your ideas into captivating podcasts with the power of AI,<br /> bringing your voice to life like never before.<br />
                            </p>
                        </div>

                    </div>

                    {/* Middle Section: Useful Links */}
                    <div className="mb-8 md:mb-0">
                        <h4 className="text-scolor font-semibold mb-4">USEFUL LINKS</h4>
                        <ul className="space-y-2">
                            <li><a href="/home" className="text-gray-400 hover:text-white hover:text-white-1">Home</a></li>
                            <li><a href="/discover" className="text-gray-400 hover:text-white hover:text-white-1">Discover</a></li>
                            <li><a href="/create-podcast" className="text-gray-400 hover:text-white-1">Generate</a></li>
                            <li><a href="/profile" className="text-gray-400 hover:text-white-1">Profile</a></li>
                        </ul>
                    </div>

                    {/* Right Section: Subscription */}
                    <div className="md:w-1/3">
                        <h4 className="text-scolor font-semibold mb-4">SUBSCRIBE</h4>
                        <p className="mb-4 text-gray-400 text-sm">
                            Don&apos;t miss to subscribe to our news, kindly fill the form below.
                        </p>
                        <form className="flex space-x-2">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email Here"
                                aria-label="Email"
                                className="w-full px-4 py-2 text-gray-900 rounded"
                            />
                            <button className="bg-scolor hover:bg-light px-4 py-2 text-white rounded" aria-label="Subscribe">
                                &gt;
                            </button>
                        </form>

                    </div>
                </div>

                <div className="flex flex-col items-center justify-center mt-8">
                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mb-4">
                        <a href="https://linkedin.com/in/govindu-thejana" className="text-gray-400 hover:text-white-1" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <Twitter size={24} className="text-gray-400 hover:text-white" aria-label="Twitter" />
                        <Facebook size={24} className="text-gray-400 hover:text-white" aria-label="Twitter" />
                        <Instagram size={24} className="text-gray-400 hover:text-white" aria-label="Twitter" />
                        <Youtube size={24} className="text-gray-400 hover:text-white-" aria-label="Twitter" />
                        <a href="https://github.com/Govindu-Thejana/aipodcaster" className="text-gray-400 hover:text-white-1" aria-label="LinkedIn">
                            <Github size={24} />
                        </a>
                    </div>

                    {/* Privacy and Terms Links */}
                    <div className="space-x-4 mb-4">
                        <span className="text-gray-400 hover:text-white">Privacy Policy</span>
                        <span className="text-gray-400 hover:text-white">Terms of Use</span>
                    </div>
                </div>


                <div className="text-center text-gray-400 text-sm">
                    &copy; 2024 <span className="font-bold">AIPodcastr</span>. Created with 🤍 by
                    <a href="https://linkedin.com/in/govindu-thejana" target="_blank" rel="noopener noreferrer" className="font-bold text-scolor hover:underline">
                        <span> Govindu Thejana</span>
                    </a> . All Rights Reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
