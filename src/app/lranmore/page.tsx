"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Header Component
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className="w-full bg-gradient-to-b from-white to-[#cce7ff]">
            <nav className="flex flex-wrap justify-between items-center p-4 shadow-md z-10 bg-white">
                <div className="flex items-center">
                    <Image
                        src="/l2.jpg"
                        alt="Hospital Logo"
                        width={50}
                        height={50}
                        className="mr-2 logo-effect"
                    />
                    <div className="text-lg sm:text-xl font-bold hover:rainbow">Hospital</div>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-blue-800 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
                <ul className={`absolute md:flex md:space-x-6 bg-white md:static right-0 w-full md:w-auto transition-transform duration-300 ease-in-out z-20 ${isOpen ? "top-16" : "top-[-490px]"}`}>
                    {[
                        { name: "Home", path: "/" },
                        { name: "Services", path: "/service" },
                        { name: "About Us", path: "/about_us" },
                        { name: "Doctors", path: "/doctors" },
                        { name: "Contact Us", path: "/contact" },
                        { name: "Sign In", path: "/lranmore" }
                    ].map((item) => (
                        <li key={item.name} className="py-2 px-4 hover:underline hover:rainbow text-center md:text-left">
                            <Link href={item.path} onClick={handleLinkClick}>
                                <span className="text-blue-800">{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-300 text-white py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">
                <div>
                    <h3 className="text-2xl font-bold">Smart Hospital</h3>
                    <p className="text-white mt-2">"Smart Care for Smart Choices: Where Your Health Is Our Priority."</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <div className="flex flex-col md:flex-row space-y-2 md:space-x-4 md:space-y-0">
                        {["Home", "About Us", "Doctors", "Services",  "Contact Us","Sgin In"].map(link => (
                            <Link key={link} href={`/${link.replace(/\s/g, '_').toLowerCase()}`} className="text-white hover:underline">
                                {link}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-4">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-x-4 md:space-y-0">
                    <input
                        type="email"
                        placeholder="Subscribe for updates"
                        className="p-2 rounded-lg border border-gray-400 focus:outline-none w-full md:w-1/3"
                    />
                    <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500 mt-2 md:mt-0">Subscribe</button>
                </div>
            </div>
            <div className="flex justify-center mt-6 space-x-4">
                {['instagram', 'facebook', 'twitter', 'linkedin'].map(platform => (
                    <a key={platform} href={`https://www.${platform}.com`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </a>
                ))}
            </div>
            <div className="text-center mt-6">
                <p className="text-white">© 2025 Smart Hospital. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

// Learn More About Hospital Component
export default function LearnMoreAboutHospital() {
    const [loaded, setLoaded] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        '/bg9.jpg', // Replace with actual image paths
        '/ap10.jpg',
        '/ho00.jpg',
        '/c3.jpg',
        '/u3.jpg',
        '/u11.jpg',
        '/u13.jpg',
        '/bg2.jpg'
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-grow relative py-0 px-4" style={{ backgroundImage: "url('/hero23.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                {/* Set background image to the main section */}
                <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto p-4">
                    {/* Info Section */}
                    <div className={`max-w-md p-4 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 text-white shadow-md rounded-md ${loaded ? 'slide-in' : 'slide-out'} flex-grow`}>
                        <h2 className="text-2xl font-bold text-center mb-4">Learn More About Our Hospital</h2>
                        <p className="mb-4">At Smart Hospital, we aim to provide the best healthcare services to our community. Our dedicated staff and state-of-the-art facilities ensure that you receive the highest quality care.</p>
                        <div className="flex flex-col items-center">
                            <Link href="/service">
                                <button className="bg-white text-blue-800 font-bold px-4 py-2 rounded-lg hover:opacity-75 transition duration-300 mb-2">
                                    Learn More About Our Services
                                </button>
                            </Link>
                            <Link href="/SIGN">
                                <button className="bg-white hover:bg-gray-200 text-blue-800 font-bold px-4 py-2 rounded-lg focus:outline-none focus:shadow-outline">
                                    Sign In
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Image Slideshow Container */}
                    <div className="relative w-64 h-64 border-4 border-blue-600 overflow-hidden rounded-md flex-shrink-0 mx-4 mt-4 md:mt-0">
                        <Image
                            src={images[currentImage]}
                            alt={`Slide image ${currentImage + 1}`}
                            layout="fill"
                            className="object-cover transition-transform duration-300"
                        />
                    </div>
                </div>
            </main>
            <Footer />
            <style jsx global>{`
                /* Slide-in Animation */
                @keyframes slide-in {
                    0% {
                        transform: translateX(-100%);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                .slide-in {
                    animation: slide-in 0.5s forwards;
                }

                .slide-out {
                    opacity: 0;
                }
            `}</style>
        </div>
    );
}