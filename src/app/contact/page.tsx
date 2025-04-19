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
        <div className="w-full overflow-hidden text-black bg-gradient-to-b from-white to-[#cce7ff]">
            {/* Horizontal Scrolling Effect */}
            <div className="horizontal-scroll-background" />

            {/* Navbar */}
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
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <ul className={`absolute md:flex md:space-x-6 bg-white md:static right-0 w-full md:w-auto transition-transform duration-300 ease-in-out z-20 ${isOpen ? "top-16" : "top-[-490px]"}`}>
                    {[
                        { name: "Home", path: "/" },
                        { name: "Services", path: "/service" },
                        { name: "Contact Us", path: "/contact" },
                        { name: "About Us", path: "/about_us" },
                        { name: "Doctors", path: "/docters" },
                        { name: "Sign In", path: "/SIGN" }
                    ].map((item) => (
                        <li key={item.name} className="py-2 px-4 hover:underline hover:rainbow text-center md:text-left">
                            <Link href={item.path} onClick={handleLinkClick}>
                                <span className="text-blue-800">{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
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
                        {["Home", "About Us", "Doctors", "Services", "Gallery", "Contact Us"].map(link => (
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

// Contact Us Component
export default function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [successMessage, setSuccessMessage] = useState(''); // State for success message

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ name, email, message });
        // Show a success message
        setSuccessMessage("Thank you for your message! We will get back to you soon.");
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <div className="flex-grow relative py-0 px-4"> {/* Removed margin-top and adjusted padding */}
                <div className={`container max-w-sm mx-auto py-4 relative z-10 ${loaded ? 'slide-in' : 'slide-out'}`}>
                    <h2 className="text-1xl font-bold text-center text-black mb-4">Contact Us</h2>
                    <form
                        onSubmit={handleSubmit}
                        className="p-4 rounded-lg shadow-md w-full bg-white border-2 border-blue-800"
                    >
                        <div className="mb-4">
                            <label className="block text-black text-xs font-bold mb-1" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="shadow appearance-none border-2 border-blue-800 rounded w-full py-2 px-3 bg-gray-200 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-xs font-bold mb-1" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="shadow appearance-none border-2 border-blue-800 rounded w-full py-2 px-3 bg-gray-200 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-xs font-bold mb-1" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="shadow appearance-none border-2 border-blue-800 rounded w-full py-2 px-3 bg-gray-200 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                                rows={3}
                                required
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Send</button>
                        </div>
                    </form>
                    {successMessage && ( // Show success message when submitted
                        <div className="mt-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
                            {successMessage}
                        </div>
                    )}
                    <div className="flex justify-center mt-4">
                        <Link href="/">
                            <button className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 text-white font-bold px-4 py-2 rounded-lg hover:opacity-75 transition duration-300">
                                Back to Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
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