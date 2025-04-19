"use client";
import React, { useEffect, useState } from 'react';

// Sample reviews data
const reviewsData = [
  {
    text: "The service was excellent and the staff were very caring.",
    name: "John Doe",
    role: "Patient",
    rating: 5
  },
  {
    text: "Highly professional and attentive. Highly recommend!",
    name: "Jane Smith",
    role: "Visitor",
    rating: 4
  },
  {
    text: "They took great care of my needs. Thank you!",
    name: "Emily Johnson",
    role: "Patient",
    rating: 5
  },
  {
    text: "A very clean and well-managed facility!",
    name: "Michael Brown",
    role: "Visitor",
    rating: 4
  },
];

// StarRating component to display the rating as stars
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.568 8.292 1.204-6 5.73 1.414 8.267L12 18.897l-7.374 3.87L6.04 15.09l-6-5.73 8.292-1.204z" />
        </svg>
      ))}
    </div>
  );
};

// Main Reviews component
const Reviews = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true); // Set animation to true after the component mounts
    }, 100); // Delay for aesthetic appeal before triggering animation

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <section className="relative py-16 px-6 bg-blue-50 flex flex-col md:flex-row">  {/* Background changed to very light blue */}
      
      {/* Large Image Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0 md:pr-4"> {/* Added padding to right */}
        <img
          src="/c.jpg" // Change this to your actual image path
          alt="Hospital"
          className="w-full h-auto lg:h-[450px] max-w-xl rounded-lg border-4 border-blue-500 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl" // Blue border and hover effect added
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center">
        
        {/* Heading for Reviews */}
        <h2 className="text-3xl font-bold text-center md:text-left mb-6">
          What Our Patients Say
        </h2>

        <div className="flex flex-wrap justify-center mt-8 relative z-10">
          {reviewsData.map((review, index) => (
            <div
              key={index}
              className={`max-w-xs mx-4 mb-8 bg-white shadow-lg rounded-lg overflow-hidden border-2 border-blue-500 transform transition-transform duration-500 ${animate ? 'translate-x-0 opacity-100 animate-jumpSlide' : 'translate-x-10 opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <p className="text-gray-600">"{review.text}"</p>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <p className="text-gray-500">{review.role}</p>
                  <StarRating rating={review.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information about the Hospital */}
        <div className="mt-8 px-4 text-center md:text-left">
          <h3 className="text-xl font-semibold">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>24/7 Emergency Services</li>
            <li>Highly Qualified Medical Staff</li>
            <li>Comprehensive Healthcare Services</li>
            <li>Patient-Centric Approach</li>
            <li>Modern Equipment and Facilities</li>
          </ul>
          <p className="mt-4">
            Contact us for more information or to schedule a visit: 
            <br />
            Phone: (123) 456-7890 | Email: info@hospital.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

// CSS for animations
const styles = `
@keyframes jumpSlide {
  0% {
    transform: translateX(-100%) scale(0); /* Start off the screen to the left and scaled down */
    opacity: 0; /* Start transparent */
  }
  50% {
    transform: translateX(10%) scale(1.1); /* Jump slightly and scale up */
    opacity: 1; /* Fully visible */
  }
  100% {
    transform: translateX(0) scale(1); /* End in original position with normal scale */
    opacity: 1; /* Fully visible */
  }
}

.animate-jumpSlide {
  animation: jumpSlide 0.7s forwards; /* Trigger jumpSlide animation */
}
`;

// Append styles to the head
if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = styles;
  document.head.appendChild(styleTag);
}