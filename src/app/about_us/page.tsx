"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Sample hospital data
const hospitals = [
    {
        name: "Apollo Hospital - Main Entrance",
        image: "/ap7.jpg",
        history: "Apollo Hospital has been serving the community since 1990, equipped with state-of-the-art facilities and a commitment to excellence."
    },
    {
        name: "Apollo Hospital - Treatment Room",
        image: "/ap8.jpg",
        history: "Our treatment rooms are designed to provide the highest level of care, blending comfort and technology."
    },
    {
        name: "Apollo Hospital - Emergency Services",
        image: "/ap9.jpg",
        history: "The emergency department operates 24/7, ensuring rapid response and quality care during critical times."
    },
    {
        name: "Apollo Hospital - Patient Recovery Area",
        image: "/ap10.jpg",
        history: "We prioritize patient comfort and well-being in our recovery areas, helping patients recuperate in peace."
    },
    {
        name: "Apollo Hospital - Surgical Suite",
        image: "/ap11.jpg",
        history: "Our surgical suites are equipped with cutting-edge technology to assist our skilled surgeons."
    },
    {
        name: "Apollo Hospital - Radiology Department",
        image: "/ap12.jpg",
        history: "Utilizing the latest imaging technologies, our radiology department provides accurate diagnoses and treatment plans."
    },
];

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
                    <div className="flex flex-col md:flex-row space-y-2 md:space-x-6 md:space-y-0">
                        <a href="/about_us" className="text-white hover:underline">About Us</a>
                        <a href="/" className="text-white hover:underline">Home</a>
                        <a href="/docters" className="text-white hover:underline">Doctors</a>
                        <a href="/service" className="text-white hover:underline">Services</a>
                        <a href="/SIGN" className="text-white hover:underline">Sign In</a>
                        <a href="/contact" className="text-white hover:underline">Contact Us</a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-4">
                <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-4">
                    <input
                        type="email"
                        placeholder="Subscribe for updates"
                        className="p-2 rounded-l border border-gray-400 focus:outline-none w-full md:w-1/3"
                    />
                    <button className="bg-black-600 text-white p-2 rounded-r hover:bg-blue-500 mt-2 md:mt-0">Subscribe</button>
                </div>
            </div>

            <div className="flex justify-center mt-6 space-x-4">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    {/* SVG for Instagram */}
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    {/* SVG for Facebook */}
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    {/* SVG for Twitter */}
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    {/* SVG for LinkedIn */}
                </a>
            </div>

            <div className="text-center mt-6">
                <p className="text-white">© 2025 Smart Hospital. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

// Main Component
export default function HospitalInfo() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
       <div className="relative min-h-screen w-full overflow-hidden text-black bg-gradient-to-b from-white to-[#cce7ff]">
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

            <div className="container mx-auto px-4 mt-2 relative z-10">
                <h2 id="hospitals" className="text-3xl font-bold mb-6 text-center text-blue-800 animate-fadeIn">Explore Our Hospital</h2>

                {/* Hospital Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hospitals.map((hospital, index) => (
                        <div 
                            key={index} 
                            className={`flex flex-col items-center bg-white text-black rounded-lg shadow-lg p-4 animate-slideIn transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
                        >
                            <div className="overflow-hidden relative w-full mb-2 rounded-lg">
                                <div className="border-4 border-transparent rainbow-border">
                                    <div className="inset-0 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 animate-rainbow absolute inset-0"></div>
                                    <Image
                                        src={hospital.image}
                                        alt={hospital.name}
                                        width={300}
                                        height={200}
                                        className="rounded-lg w-full h-48 object-cover relative z-10"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-center">{hospital.name}</h3>
                            <p className="text-sm text-center mt-2">{hospital.history}</p>
                        </div>
                    ))}
                </div>

                {/* About Paragraph */}
                <p id="about" className="text-lg text-center text-blue-800 mt-8 px-4 sm:px-6 md:px-8 lg:px-16 animate-fadeIn">
                    <strong>Our commitment to patient care spans over three decades, with a focus on excellence, innovation, and compassion.</strong>
                    We aim to create a supportive environment for our patients while maintaining the highest standards of healthcare.
                    <strong> At Apollo Hospital, you can expect world-class services equipped with the latest technology and a dedicated team of professionals.</strong>
                </p>
            </div>

            {/* Back Button at the Bottom */}
            <div className="flex justify-center mb-4 z-20 relative">
                <Link href="/">
                    <button className="relative bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition transform hover:scale-105 hover:shadow-lg">
                        <span>Back to Home</span>
                        <span className="absolute inset-0 rounded-md bg-blue-700 transition-transform duration-300 scale-0 hover:scale-100"></span>
                    </button>
                </Link>
            </div>

            {/* Footer Section */}
            <Footer />

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slideIn {
                    from {
                        transform: translateY(20px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                @keyframes rainbowAnimation {
                    0% { background-position: 0%; }
                    100% { background-position: 100%; }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.5s forwards;
                }

                .animate-slideIn {
                    animation: slideIn 0.5s forwards;
                }

                .animate-rainbow {
                    background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
                    background-size: 400%;
                    animation: rainbowAnimation 5s linear infinite; /* Adjust duration for speed of animation */
                }

                /* Rainbow border styles */
                .rainbow-border {
                    position: relative;
                    overflow: hidden;
                    border-width: 4px;
                    border-style: solid;
                    border-image: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet) 1;
                }
            `}</style>
        </div>
    );
}