import Link from 'next/link';
import Image from 'next/image'; // Import Image for logo

const Header = () => (
    <nav className="flex flex-wrap justify-between items-center p-4 shadow-md z-10 bg-white">
        <div className="flex items-center">
            <Image
                src="/l2.jpg" // Path to your logo image file
                alt="Hospital Logo"
                width={50} // Set the width of the logo
                height={50} // Set the height of the logo
                className="mr-2 logo-effect" // Add margin to the right for spacing
            />
            <div className="text-lg sm:text-xl font-bold hover:rainbow">Hospital</div>
        </div>
        <ul className="flex space-x-4 md:space-x-6">
            <li>
                <Link href="/" className="text-blue-800 hover:underline">Home</Link>
            </li>
            <li>
                <Link href="/about_us" className="text-blue-800 hover:underline">About Us</Link>
            </li>
            <li>
                <Link href="/service" className="text-blue-800 hover:underline">Services</Link>
            </li>
            <li>
                <Link href="/contact" className="text-blue-800 hover:underline">Contact Us</Link>
            </li>
            <li>
                <Link href="/docters" className="text-blue-800 hover:underline">Doctors</Link>
            </li>
            <li>
                <Link href="/SIGN" className="text-blue-800 hover:underline">Sign In</Link>
            </li>
        </ul>
    </nav>
);

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-300 text-white py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">
                <div>
                    <h3 className="text-2xl font-bold">Smart Hospital</h3>
                    <p className="mt-2">"Smart Care for Smart Choices: Where Your Health Is Our Priority."</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <div className="flex flex-col md:flex-row space-y-2 md:space-x-6 md:space-y-0">
                        <Link href="/about" className="text-white hover:underline">About Us</Link>
                        <Link href="/" className="text-white hover:underline">Home</Link>
                        <Link href="/docters" className="text-white hover:underline">Doctors</Link>
                        <Link href="/service" className="text-white hover:underline">Services</Link>
                        <Link href="/appointments" className="text-white hover:underline">Appointments</Link>
                        <Link href="/SIGN" className="text-white hover:underline">Sign In</Link>
                        <Link href="/contact" className="text-white hover:underline">Contact</Link>
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
                    {/* Optional: Add SVG icons for social media */}
                    {/* Replace with your icon */}
                    Instagram
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    Facebook
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    Twitter
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    LinkedIn
                </a>
            </div>

            <div className="text-center mt-6">
                <p className="text-white">© 2025 Smart Hospital. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default function BuyCoursePage() {
    return (
        <div className="bg-cover bg-center min-h-screen flex flex-col" style={{ backgroundImage: `url('/hero23.jpg')` }}>
            {/* Header Component */}
            <Header />

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center flex-1 p-4"> {/* Added padding for mobile views */}
                <h1 className="text-4xl font-bold mb-8 text-white text-center">Sign In</h1>

                <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-semibold mb-5 text-center">Sign In</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <Link href="/login">
                            <button
                                type="button" // Use type="button" to prevent form submission
                                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                            >
                                Sign In
                            </button>
                        </Link>
                    </form>
                </div>
                
                <div className="flex justify-center mt-8 mb-4"> {/* Added mb-4 for spacing between button and footer */}
                    <Link href="/">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>

            {/* Footer Component */}
            <Footer />
        </div>
    );
}