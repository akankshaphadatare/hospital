"use client";

import Link from 'next/link';
import Image from 'next/image'; 
import { useEffect, useState } from 'react';
import Footer from "@/components/Footer"; 

const AboutUs = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach((el) => {
      setTimeout(() => {
        el.classList.add('animate-on');
      }, 100); // Adjust delay as needed
    });
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
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
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-blue-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
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
        <ul className={`absolute md:flex md:space-x-6 bg-white md:static right-0 w-full md:w-auto transition-transform duration-300 ease-in-out z-20 ${isMobileMenuOpen ? "top-16" : "top-[-490px]"}`}>
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/service" },
            { name: "About Us", path: "/about_us" },
            { name: "Doctors", path: "/docters" },
            { name: "Contact Us", path: "/contact" },
            { name: "Sign In", path: "/lranmore" }
          ].map((item) => (
            <li key={item.name} className="py-1 md:py-2 px-4 hover:underline hover:rainbow text-center md:text-left">
              <Link href={item.path} onClick={handleLinkClick}>
                <span className="text-blue-800">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Background Image Section with Sliding Jump Effect */}
      <div className="relative w-full h-64 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center animate slide-in-jump" style={{ backgroundImage: "url('/ap10.jpg')" }}>
          <div className="flex items-center justify-center h-full bg-opacity-50">
            <h1 className="text-3xl md:text-5xl text-black font-bold animate-on">About Us</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 relative mb-8 md:mb-0 animate slide-in-left-jump">
            {/* Add any content here */}
          </div>
        </div>

        {/* Our Mission Section with Images */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/3 md:pr-4 mb-4 md:mb-0 animate slide-in-left-jump">
            <img
              src="/hos2.jpg"
              alt="Mission Image Left"
              className="w-full h-auto rounded-lg shadow-lg animate image-border"
            />
          </div>
          <div className="md:w-1/3 text-center mb-4 md:mb-0 animate slide-in-up">
            <h2 className="text-xl md:text-2xl font-bold animate mb-4">Our Mission</h2>
            <p className="text-base md:text-lg animate mb-4">
              Our mission at Smart Hospital is to provide compassionate, patient-centered care, ensuring that every individual receives the highest quality medical services. We strive to create a safe and supportive environment, focusing on community health improvement and educating our patients about their health.
            </p>
          </div>
          <div className="md:w-1/3 md:pl-4 mb-4 md:mb-0 animate slide-in-right-jump">
            <img
              src="/hos4.jpg"
              alt="Mission Image Right"
              className="w-full h-auto rounded-lg shadow-lg animate image-border"
            />
          </div>
        </div>

        {/* Patient Reviews Section */}
        <div className="mt-8">
          <h2 className="text-xl md:text-2xl font-bold animate mb-4">Patient Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { review: "Exceptional care from all the staff. Feeling better already!", name: "John Doe", rating: "⭐⭐⭐⭐⭐" },
              { review: "Clean, modern facilities. Very comfortable and professional!", name: "Jane Smith", rating: "⭐⭐⭐⭐" },
              { review: "The doctors were attentive and took the time to answer all my questions. I felt very cared for!", name: "Emily Johnson", rating: "⭐⭐⭐⭐⭐" },
              { review: "I appreciated the quick service and the professionalism of the staff. Highly recommend!", name: "Robert Brown", rating: "⭐⭐⭐⭐" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md review-card animate slide-in-up">
                <p className="text-base md:text-lg">"{item.review}"</p>
                <p className="text-sm font-semibold">- {item.name}</p>
                <div className="mt-2 text-yellow-500">{item.rating}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />

      <style jsx>{`
        .animate {
          opacity: 0;
          animation: animate-in 0.5s ease-in-out forwards;
        }
        .animate-on {
          opacity: 1;
        }
        @keyframes animate-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        /* Adjusted Background Jumping Sliding effects */
        .slide-in-jump {
          animation: slide-in-jump 0.5s ease forwards;
        }

        @keyframes slide-in-jump {
          0% {
            opacity: 0;
            transform: translateY(20px); /* Start below */
          }
          60% {
            transform: translateY(-15px); /* Jump up */
          }
          100% {
            opacity: 1;
            transform: translateY(0); /* Slide to final position */
          }
        }

        /* Jumping Sliding effects */
        .slide-in-left-jump {
          animation: slide-in-left-jump 0.5s ease forwards;
        }
        .slide-in-right-jump {
          animation: slide-in-right-jump 0.5s ease forwards;
        }

        @keyframes slide-in-left-jump {
          0% {
            opacity: 0;
            transform: translateX(-50px) translateY(20px);
          }
          60% {
            transform: translateX(10px) translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes slide-in-right-jump {
          0% {
            opacity: 0;
            transform: translateX(50px) translateY(20px);
          }
          60% {
            transform: translateX(-10px) translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }

        /* Styles for the image border effect */
        .image-border {
          border: 4px solid blue;
          transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s; 
          margin-bottom: 20px; 
        }
        .image-border:hover {
          transform: scale(1.05); 
          border-color: darkblue; 
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); 
        }

        /* Styles for Review Cards Hover Effect */
        .review-card {
          transition: transform 0.3s, box-shadow 0.3s; 
        }
        .review-card:hover {
          transform: scale(1.02); 
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); 
        }
      `}</style>
    </div>
  );
};

export default AboutUs;