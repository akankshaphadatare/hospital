"use client"; // Client component for Next.js

import React from "react";
import Link from "next/link"; // Import Link for navigation
import Image from "next/image"; // Import Image for logo

const Header = () => (
  <nav className="flex flex-wrap justify-between items-center p-4 shadow-md z-10 bg-white">
    <div className="flex items-center">
      <Image
        src="/l2.jpg" // Path to your logo image file
        alt="Hospital Logo"
        width={50}
        height={50}
        className="mr-2 logo-effect" // Add margin to the right for spacing
      />
      <div className="text-lg sm:text-xl font-bold hover:rainbow">Hospital</div>
    </div>
    <ul className="flex flex-wrap space-x-4 md:space-x-6">
      <li>
        <Link href="/" className="text-blue-800 hover:underline">Home</Link>
      </li>
      <li>
        <Link href="/about" className="text-blue-800 hover:underline">About Us</Link>
      </li>
      <li>
        <Link href="/services" className="text-blue-800 hover:underline">Services</Link>
      </li>
      <li>
        <Link href="/contact" className="text-blue-800 hover:underline">Contact Us</Link>
      </li>
      <li>
        <Link href="/doctors" className="text-blue-800 hover:underline">Doctors</Link>
      </li>
      <li>
        <Link href="/gallery" className="text-blue-800 hover:underline">Sign In</Link>
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
            <Link href="/docters" className="text-white hover:underline">docters</Link>
            <Link href="/services" className="text-white hover:underline">Services</Link>
            <Link href="/appointments" className="text-white hover:underline">Appointments</Link>
            <Link href="/Sign In" className="text-white hover:underline">Sign In</Link>
            <Link href="/contact" className="text-white hover:underline">Contact Us</Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-white">© 2025 Smart Hospital. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default function BuyCoursePage() {
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission

    const form = e.currentTarget; // Get the current target form
    const email = form.email.value; // Get email input value
    const password = form.password.value; // Get password input value

    try {
      // Placeholder for login logic (API call)
      console.log("Logging in with credentials: ", { email, password });
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  const handleGoogleLogin = async () => {
    console.log("Logging in with Google...");
  };

  const handleGithubLogin = async () => {
    console.log("Logging in with GitHub...");
  };

  return (
    <div className="min-h-screen flex flex-col"> {/* Removed bg-blue-100 */}
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-1 p-4">
        {/* Left Image Section */}
        <div className="flex-1 flex justify-center mb-4 md:mb-0">
          <Image
            src="/c4.jpg" // Replace with your image path
            alt="Description of the image"
            height={700} // Set the height of the image
            width={700} // Set the width of the image
            className="object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Login Form Section */}
        <div className="flex-1 flex justify-center">
          <form
            className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto border-4 border-rainbow"
            onSubmit={handleLogin}
          >
            <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email" // Use name attribute for access
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password" // Use name attribute for access
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full mb-4"
            >
              Login
            </button>

            <div className="flex items-center justify-between mb-4">
              <hr className="w-full bg-gray-300" />
              <span className="mx-2 text-gray-500">or</span>
              <hr className="w-full bg-gray-300" />
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 w-full mb-2"
            >
              Login with Google
            </button>

            <button
              type="button"
              onClick={handleGithubLogin}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 w-full"
            >
              Login with GitHub
            </button>
          </form>
        </div>
      </div>

      {/* Back To Sign In Button at the Bottom */}
      <div className="flex justify-center mt-4 mb-6">
        <Link href="/SIGN">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Back To Sign In
          </button>
        </Link>
      </div>

      {/* Footer Component */}
      <Footer />

      {/* Custom Styles */}
      <style jsx>{`
        /* Rainbow gradient for border effect */
        .border-rainbow {
          border-image: linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #00ffff, #0000ff, #4b0082, #9400d3);
          border-image-slice: 1;
        }
      `}</style>
    </div>
  );
}