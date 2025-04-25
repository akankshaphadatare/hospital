"use client"; // Client component for Next.js

import React from "react";
import Link from "next/link"; // Import Link for navigation
import Image from "next/image"; // Import Image for logo

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