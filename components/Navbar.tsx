import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { SignedIn, SignedOut, useClerk } from '@clerk/nextjs';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { signOut } = useClerk();

    // Handle scroll events to toggle background color
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { href: "/home", label: "Home" },
        { href: "/discover", label: "Discover" },
        { href: "/create-podcast", label: "Generate" },
        { href: "/profile", label: "Profile" },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ${isScrolled ? 'bg-pcolor' : 'bg-acolor'}`}>
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/icons/microphone.png"
                            alt="AIPodcastr logo"
                            width={33}
                            height={33}
                            priority
                        />
                        <h1 className="text-xl sm:text-2xl text-white-1 font-extrabold">
                            AIPodcastr
                        </h1>
                    </Link>

                    {/* Centered Navigation Links */}
                    <div className="flex-grow">
                        <div className="hidden md:flex justify-center items-center space-x-4 lg:space-x-8">
                            <ul className="flex space-x-4 lg:space-x-20 text-white-1 text-lg font-medium">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="hover:text-scolor transition-colors duration-200">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sign In/Sign Out Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <SignedOut>
                            <Button
                                asChild
                                className="text-sm bg-[--accent-color] hover:bg-opacity-80 transition-colors duration-200"
                            >
                                <Link href="/sign-in">Sign in</Link>
                            </Button>
                        </SignedOut>
                        <SignedIn>
                            <Button
                                className="text-sm bg-[--accent-color] hover:bg-opacity-80 transition-colors duration-200"
                                onClick={() => signOut(() => {
                                    window.location.href = '/';
                                })}
                            >
                                Sign Out
                            </Button>
                        </SignedIn>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        type="button"
                        className="md:hidden p-2 text-white-1 hover:bg-scolor focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-expanded={menuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`${menuOpen ? 'block' : 'hidden'} md:hidden mt-4`}
                >
                    <ul className="flex flex-col space-y-2 text-white-1">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="block py-2 hover:bg-scolor hover:bg-opacity-20 transition-colors duration-200">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <SignedOut>
                            <Button
                                asChild
                                className="w-full text-white-1 text-sm bg-[--accent-color] hover:bg-opacity-80 transition-colors duration-200"
                            >
                                <Link href="/sign-in">Sign in</Link>
                            </Button>
                        </SignedOut>
                        <SignedIn>
                            <Button
                                className="w-full text-white-1 text-sm bg-[--accent-color] hover:bg-opacity-80 transition-colors duration-200"
                                onClick={() => signOut(() => {
                                    window.location.href = '/';
                                })}
                            >
                                Sign Out
                            </Button>
                        </SignedIn>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
