"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Sample data for hospital services
const services = [
    {
        image: "/c3.jpg",
        name: "Pediatric Services",
        description: "Comprehensive pediatric care by specialized professionals. Pediatric services encompass the comprehensive medical care for infants, children, and adolescents, focusing on their physical, mental, and social well-being."
    },
    {
        image: "/bg9.jpg",
        name: "Emergency Services",
        description: "24/7 emergency services with state-of-the-art facilities. Hospital emergency services, like an Emergency Department (ED) or Emergency Room (ER), provide immediate medical attention for urgent and life-threatening conditions."
    },
    {
        image: "/bg2.jpg",
        name: "Short-term hospitalization",
        description: "Short-term hospitalization providing specialized care. Short-Term Acute Care (STAC) hospital is a type of in-hospital care designed for patients requiring brief hospitalization or observation, usually less than 48 hours."
    },
    {
        image: "/u3.jpg",
        name: "Routine Checkup",
        description: "Regular medical examinations to maintain good health. A hospital routine checkup, also known as a full body checkup, is a comprehensive assessment of your overall health and well-being to detect potential health issues early on and monitor existing conditions."
    }
];

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-300 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between">
                <div>
                    <h3 className="text-2xl font-bold">Smart Hospital</h3>
                    <p className="text-white mt-2">Smart Care for Smart Choices: Where Your Health Is Our Priority.</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <div className="flex flex-col md:flex-row space-y-2 md:space-x-6 md:space-y-0">
                        {["About Us", "Home", "Doctors", "Services", "Gallery", "Contact Us"].map((item, index) => (
                            <Link href="/" key={index} className="text-white hover:underline">{item}</Link>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 mt-4">
                <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-4">
                    <input
                        type="email"
                        placeholder="Subscribe for updates"
                        className="p-2 rounded-l border border-gray-400 focus:outline-none w-full md:w-1/3"
                    />
                    <button className="bg-black text-white p-2 rounded-r hover:bg-blue-500 mt-2 md:mt-0">Subscribe</button>
                </div>
            </div>

            <div className="flex justify-center mt-6 space-x-4">
                {["Instagram", "Facebook", "Twitter", "LinkedIn"].map((platform, index) => (
                    <a key={index} href={`https://www.${platform.toLowerCase()}.com`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">{platform}</a>
                ))}
            </div>

            <div className="text-center mt-6">
                <p className="text-white">© 2025 Smart Hospital. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default function HospitalGallery() {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleLinkClick = () => {
        setIsOpen(false); // Close the mobile menu when a link is clicked
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden text-black bg-gradient-to-b from-white to-[#cce7ff]">
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

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                {services.map((service) => (
                    <div
                        key={service.name}
                        className={`flex flex-col md:flex-row transition-transform duration-500 items-center ${isVisible ? 'animate-slide-jump' : ''}`}
                    >
                        <div className="flex-1 p-2">
                            <Image
                                src={service.image}
                                alt={service.name}
                                width={600}
                                height={450}
                                className="rounded-lg mb-2 object-cover transition-transform duration-500 transform hover:scale-105 rainbow-border"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex-1 p-4">
                            <h4 className="text-xl md:text-2xl font-semibold text-blue-700">{service.name}</h4>
                            <p className="text-base md:text-lg text-blue-600">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-4">
                <Link href="/">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                        Back to Home
                    </button>
                </Link>
            </div>

            <Footer />

            <style jsx>{`
                .hover\:rainbow {
                    background: linear-gradient(90deg, rgb(24, 23, 22), rgb(22, 21, 20), rgb(236, 7, 7), #00ff00, #0000ff, #4b0082, #9400d3);
                    background-size: 300% 100%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    transition: background-position 0.5s ease;
                }

                .hover\:rainbow:hover {
                    background-position: 100% 0;
                }

                @keyframes slide-jump {
                    0% {
                        transform: translateY(0) translateX(-50%);
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                        transform: translateY(-10px) translateX(0);
                    }
                    100% {
                        transform: translateY(0) translateX(0);
                    }
                }
                
                .animate-slide-jump {
                    animation: slide-jump 1s ease forwards;
                }

                .rainbow-border {
                    border: 4px solid transparent; 
                    background-image: linear-gradient(white, white), linear-gradient(90deg, blue, cyan, green, yellow, orange, red);
                    background-origin: border-box; 
                    background-clip: content-box, border-box; 
                    border-radius: 8px; 
                }
            `}</style>
        </div>
    );
}