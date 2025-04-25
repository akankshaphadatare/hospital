"use client";
import { useState, useEffect } from "react"; 
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer"; 

// Doctor data array
const doctors = [
    {
        name: "Dr. John Doe",
        image: "/d23.jpg",
        specialization: "Cardiologist",
        bio: "Dr. John Doe is an experienced cardiologist dedicated to heart health.",
    },
    {
        name: "Dr. Jane Smith",
        image: "/d24.jpg",
        specialization: "Pediatrician",
        bio: "Dr. Jane Smith specializes in children's health and development.",
    },
    {
        name: "Dr. Emily Johnson",
        image: "/d25.jpg",
        specialization: "Dermatologist",
        bio: "Dr. Emily Johnson offers expert care for skin conditions.",
    },
    {
        name: "Dr. Michael Brown",
        image: "/d30.jpg",
        specialization: "Orthopedic Surgeon",
        bio: "Dr. Michael Brown specializes in bone and joint health.",
    },
    {
        name: "Dr. Sarah Wilson",
        image: "/d28.jpg",
        specialization: "Neurologist",
        bio: "Dr. Sarah Wilson helps patients with nervous system disorders.",
    },
    {
        name: "Dr. David Lee",
        image: "/d29.jpg",
        specialization: "General Practitioner",
        bio: "Dr. David Lee provides general medical services to patients.",
    },
    {
        name: "Dr. Pratiksha",
        image: "/hero13.jpg",
        specialization: "Surgeon",
        bio: "Dr. Pratiksha provides expert surgical services.",
    },
    {
        name: "Dr. Shhradha Vaishya",
        image: "/hero12.jpg",
        specialization: "Neurologist",
        bio: "Dr. Shhradha provides thorough neurologic evaluations.",
    },
];

export default function Doctors() {
    const [isOpen, setIsOpen] = useState(false); 
    const [loaded, setLoaded] = useState(false); 

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100); 
        return () => clearTimeout(timer);
    }, []);

    const handleLinkClick = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden text-black bg-gradient-to-b from-white to-[#cce7ff]">
            <nav className="flex flex-wrap justify-between items-center p-4 shadow-md z-10 bg-white"> {/* Increased padding */}
                <div className="flex items-center">
                    <Image
                        src="/l2.jpg"
                        alt="Hospital Logo"
                        width={60}
                        height={60}
                        className="mr-2 logo-effect"
                    />
                    <div className="text-lg sm:text-3xl font-bold hover:rainbow">Hospital</div> {/* Increased font size */}
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

            <div className="container mx-auto px-4 mt-4 relative z-10">
                <h2 id="doctors" className="text-2xl font-bold mb-4 text-center text-black">Meet Our Doctors</h2>
                
                {/* Info Section at the Top */}
                <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <p className="text-lg text-center text-black">
                        Our team of dedicated medical professionals includes experts from various specializations who prioritize patient care. Each doctor brings a wealth of knowledge and experience, ensuring the highest standard of health services to meet your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {doctors.map((doctor, index) => (
                        <div key={index} className={`flex flex-col items-center transform transition duration-300 hover:scale-105 hover:translate-x-2 p-4 bg-gray-100 rounded-lg ${loaded ? 'slide-in' : 'slide-out'}`}>
                            <div className="relative rounded-lg overflow-hidden border-4 border-blue-600">
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    width={150}
                                    height={150}
                                    className="rounded-lg mb-2 w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-black mt-2">{doctor.name}</h3>
                            <p className="text-md text-black">{doctor.specialization}</p>
                            <p className="text-sm text-center text-black mt-2 px-2">{doctor.bio}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />

            <style jsx global>{`
                footer {
                    background: rgba(17, 83, 236, 0.8);
                    position: relative;
                    z-index: 20;
                }
                
                /* Rainbow gradient for hover effect */
                .hover\:rainbow {
                    background: linear-gradient(90deg, rgb(24, 22, 22), rgb(19, 17, 17), rgb(243, 11, 11), #00ff00, #0000ff, #4b0082, #9400d3);
                    background-size: 300% 100%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    transition: background-position 0.5s ease;
                }

                .hover\:rainbow:hover {
                    background-position: 100% 0;
                }

                /* Slide-in Animation */
                @keyframes slide-in {
                    0% {
                        transform: translateX(-50%);
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
            `}</style>
        </div>
    );
}