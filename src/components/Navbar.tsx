import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const galleryItems = [
    { type: "image", src: "/hero11.jpg", alt: "Achievement 1" },
    { type: "image", src: "/hero12.jpg", alt: "Achievement 2" },
    { type: "image", src: "/hero13.jpg", alt: "Achievement 3" },
    { type: "image", src: "/hero14.jpg", alt: "Achievement 4" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [shown, setShown] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        setShown(true);
    }, []);

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

            {/* Banner & Appointment */}
            <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-10 gap-8">
                {/* Left Content */}
                <div className="flex-1 flex flex-col items-center justify-center text-center h-full">
                    <h2 className={`text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold text-pink-800 mb-4 fade-in ${shown ? 'fade-in-visible' : ''}`}>
                        <span className="text-black"><b>Welcome to Our Hospital</b></span><br />
                        <span className="text-black">Your Health is </span>
                        <span className="text-blue-600 underline decoration-blue-800 decoration-2">Our Priority</span>
                    </h2>
                    <h3 className="text-sm md:text-base text-blue-800 font-semibold mt-2 mb-4">
                        <b>A hospital is a place where healing begins and hope is restored.<br />
                            In a world where you can be anything, be kind.<br /></b>
                    </h3>

                    <div className="flex flex-col md:flex-row items-center justify-center mt-4 gap-4">
                    

<div className="flex items-center bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white rounded-lg p-3 shadow-md">
    <Link href="/service" className="flex items-center w-full"> {/* Add Link component here */}
        <Image 
            src="/l2.jpg" 
            alt="Hospital Icon" 
            width={28} 
            height={28} 
            className="mr-2" 
        />
        <h2 className="text-sm md:text-base font-bold">Hospital Services</h2>
    </Link>
</div>

                        <Link
                            href="/bookappointment"
                            className="relative inline-flex items-center justify-center bg-white text-transparent rounded-lg shadow-lg hover:opacity-80 transition duration-200 btn-hover jump"
                            style={{
                                padding: '12px 16px',
                                border: '2px solid transparent',
                                borderImage: 'linear-gradient(to right, cyan, blue, indigo) 1',
                            }}
                        >
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-transparent bg-clip-text">
                                Book Appointment
                            </span>
                        </Link>
                    </div>

                    <div className="flex justify-center space-x-2 mt-4 border-4 border-black rounded-lg p-2 overflow-x-auto">
                        {["/u23.jpg", "/u24.jpg", "/u26.jpg"].map((src, idx) => (
                            <Image
                                key={idx}
                                src={src}
                                alt={`Thumbnail ${idx + 1}`}
                                width={150}
                                height={150}
                                className="rounded-lg object-cover shadow-md hover:scale-105 transition duration-300 jump"
                            />
                        ))}
                    </div>
                </div>

                {/* Right Content: Image */}
                <div className="flex-1 flex items-center justify-center">  {/* Center Image Vertically and Horizontally */}
                    <Image
                        src="/hero32.jpg" // Replace with your image source
                        alt="Hospital"
                        width={400} // Adjust the width as needed
                        height={400} // Adjust the height as needed
                        className="rounded-lg shadow-md object-cover max-w-full h-auto" // Ensure responsiveness, maximum width 100%
                    />
                </div>
            </div>

            {/* Animation and Effects */}
            <style jsx>{`
                .horizontal-scroll-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 200%;
                    height: 100vh; /* Full screen height */
                    background: linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1));
                    animation: scroll 10s linear infinite; /* Adjust duration for speed */
                    z-index: -1; /* Place behind content */
                }

                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%); /* Moves left by half its width */
                    }
                }

                .fade-in {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
                }

                .fade-in-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .btn-hover {
                    transition: transform 0.3s, background-color 0.3s;
                }

                .btn-hover:hover {
                    transform: scale(1.05);
                    background-color: rgba(255, 255, 255, 0.8);
                }

                .jump {
                    animation: jump 1.5s infinite;
                }

                @keyframes jump {
                    0%, 20%, 50%, 80%, 100% {
                        transform: translateY(0);
                    }
                    40% {
                        transform: translateY(-10px);
                    }
                    60% {
                        transform: translateY(-5px);
                    }
                }

                .logo-effect {
                    animation: rotate 2s infinite linear;
                }

                @keyframes rotate {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                .hover\\:rainbow {
                    background: linear-gradient(90deg, rgb(128, 65, 3), #161514, #ec0707, #00ff00, #0000ff, #4b0082, #9400d3);
                    background-size: 300% 100%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    transition: background-position 0.5s ease;
                }

                .hover\\:rainbow:hover {
                    background-position: 100% 0;
                }
            `}</style>
        </div>
    );
}