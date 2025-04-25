"use client"; // Ensure correct client-side rendering
import React, { useState, useEffect } from 'react';
import Link from "next/link"; // Import Link for navigation
import Image from 'next/image'; // Import Image for optimized image handling

const doctors = [
    {
        name: "Dr. John Doe",
        specialty: "Cardiologist",
        contact: "(555) 123-4567",
        imageUrl: "/d26.jpg",
        description: "Expert in cardiac care and surgery."
    },
    {
        name: "Dr. Jane Smith",
        specialty: "Neurologist",
        contact: "(555) 987-6543",
        imageUrl: "/d23.jpg",
        description: "Specializes in neurological disorders."
    },
    {
        name: "Dr. Emily Johnson",
        specialty: "Pediatrician",
        contact: "(555) 456-7890",
        imageUrl: "/d24.jpg",
        description: "Dedicated to children's health and wellness."
    },
    {
        name: "Dr. Mark Brown",
        specialty: "Orthopedic Surgeon",
        contact: "(555) 321-0987",
        imageUrl: "/d25.jpg",
        description: "Focuses on musculoskeletal injuries."
    },
    {
        name: "Dr. Amy Adams",
        specialty: "Dermatologist",
        contact: "(555) 654-3210",
        imageUrl: "/d27.jpg",
        description: "Specializes in skin conditions."
    },
    {
        name: "Dr. Robert Brown",
        specialty: "General Practitioner",
        contact: "(555) 555-5555",
        imageUrl: "/d28.jpg",
        description: "Provides overall health management."
    },
    {
        name: "Dr. Sarah Lee",
        specialty: "Endocrinologist",
        contact: "(555) 666-6666",
        imageUrl: "/d29.jpg",
        description: "Diabetes and hormonal disorders specialist."
    },
    {
        name: "Dr. Jessica White",
        specialty: "Psychiatrist",
        contact: "(555) 777-7777",
        imageUrl: "/d30.jpg",
        description: "Focuses on mental health and wellbeing."
    },
];

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-300 text-white py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">
                <div>
                    <h3 className="text-2xl font-bold"> Hospital</h3>
                    <p className="text-white mt-2">"Smart Care for Smart Choices: Where Your Health Is Our Priority."</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <div className="flex flex-col md:flex-row space-y-2 md:space-x-6 md:space-y-0">
                        <Link href="#" className="text-white hover:underline">About Us</Link>
                        <Link href="#" className="text-white hover:underline">Home</Link>
                        <Link href="#" className="text-white hover:underline">Doctors</Link>
                        <Link href="#" className="text-white hover:underline">Services</Link>
                        <Link href="#" className="text-white hover:underline">Sign In</Link>
                        <Link href="#" className="text-white hover:underline">Contact Us</Link>
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
                    <button className="text-white p-2 rounded-r hover:bg-blue-500 mt-2 md:mt-0">Subscribe</button>
                </div>
            </div>

            <div className="text-center mt-6">
                <p className="text-white">© 2025 Smart Hospital. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default function BookAppointment() {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
    const [isOpen, setIsOpen] = useState(false); // Start with the menu closed
    const [isVisible, setIsVisible] = useState(false); // State for slide animation

    // Debounce the search term
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 300);
        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    // Trigger slide effect when component mounts
    useEffect(() => {
        setIsVisible(true);
    }, []);

    const filteredDoctors = doctors.filter(doctor => 
        doctor.name.toLowerCase().includes(debouncedTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(debouncedTerm.toLowerCase())
    );

    const handleLinkClick = () => {
        setIsOpen(false); // Close mobile menu
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
                    {/* Show menu icon or close icon based on isOpen state */}
                    {isOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
                <ul className={`absolute md:flex md:space-x-6 bg-white md:static right-0 w-full md:w-auto transition-transform duration-300 ease-in-out z-20 ${isOpen ? "top-16" : "top-[-490px]"}`}>
                    {[
                        { name: "Home", path: "/" },
                        { name: "Services", path: "/service" },
                        { name: "Contact Us", path: "/contact" },
                        { name: "About Us", path: "/about_us" },
                        { name: "Doctors", path: "/docters" },
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

            <div className="container mx-auto p-4 md:p-8 flex flex-col items-center">
                <Link href="/">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4 hover:bg-blue-700 transition">
                        Back to Home
                    </button>
                </Link>

                <h1 className="text-3xl font-bold text-center mb-4">Book an Appointment</h1>

                <div className="mb-8 flex justify-center w-full">
                    <input
                        type="text"
                        placeholder="Search for a doctor..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {filteredDoctors.length === 0 && (
                    <p className="text-center text-red-600 mb-4">
                        No doctors found. Please adjust your search criteria.
                    </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                    {filteredDoctors.map((doctor) => (
                        <div key={doctor.name} className="bg-white rounded-lg shadow-md p-4 text-center transition duration-300 transform hover:scale-105 relative group">
                            <div className="border-4 border-rainbow rounded-md overflow-hidden mb-4">
                                <Image
                                    src={doctor.imageUrl}
                                    alt={doctor.name}
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="hidden group-hover:block absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-2 z-10">
                                {doctor.description}
                            </div>
                            <h2 className="text-xl font-semibold">{doctor.name}</h2>
                            <p className="text-gray-600">{doctor.specialty}</p>
                            <p className="text-green-600 font-medium">{doctor.contact}</p>
                            <Link href="/from" className="mt-4">
                                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                                    Book Appointment
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />

            <style jsx>{`
                /* CSS for rainbow border effect */
                .border-rainbow {
                    border-image: linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #00ffff, #0000ff, #4b0082, #9400d3);
                    border-image-slice: 1;
                }
            `}</style>
        </div>
    );
}