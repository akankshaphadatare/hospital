"use client";
import Image from 'next/image'; 
import React from 'react';

const products = [
  {
    id: 1,
    image: '/ho6.jpg',
    title: 'Smart Hospital Building',
    description: 'Address kasba Peth, Pune - 411011 (Near Apollo Theater Near Daruwala Pool)Its environment is meticulously controlled to ensure a smooth',
  },
  {
    id: 2,
    image: '/ho2.jpg',
    title: 'Operation Room',
    description: 'It contains the medications, equipment, and other supplies that the anesthesiologist may need. Its designed to be a sterile environment,',
  },
  {
    id: 3,
    image: '/ho1.jpg',
    title: 'ICU Room',
    description: 'In the ICU, patients are closely monitored at all times, 24 hours a day, by teams of specialist health practitioners.',
  },
  {
    id: 4,
    image: '/ho7.jpg',
    title: 'Multiple Bed Room',
    description: 'In a hospital multiple-bed room, or ward, patients share a common space with multiple beds. its best hospital',
  },
  {
    id: 5,
    image: '/ho5.jpg',
    title: 'Children Room',
    description: 'Child-friendly environments with play areas, toys, and age-appropriate activities, along with specialized medical staff and equipment.',
  },
  {
    id: 6,
    image: '/ho4.jpg',
    title: 'Hospital Canteen',
    description: 'Provide nutritious and hygienic meals for patients, attendants, and staff, often with diverse menu options and catering to specific dietary needs.',
  },
];

const ProductList = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 welcome-text">Welcome to Smart Hospital</h2>
      <div className="flex flex-wrap justify-center mt-4 max-w-[1200px] mx-auto"> {/* Adjusted margin-top to mt-4 */}
        {products.map((product, index) => {
          let extraClasses = ""; // Variable to hold extra classes for specific products

          if (product.id === 1 || product.id === 2) {
            extraClasses = "w-full sm:w-1/2 md:w-3/4"; // Larger sizes for products 1 and 2
          } else if (product.id === 4) {
            extraClasses = "w-full sm:w-1/2 md:w-1/4"; // Smaller size for product 4
          } else {
            extraClasses = "w-full sm:w-1/2 md:w-1/3"; // Default size for other products
          }

          return (
            <div 
              key={product.id} 
              className={`product-card ${extraClasses} max-w-xs mx-4 mb-8 border-2 border-blue-800`} // Applying size classes
              style={{ animationDelay: `${index * 0.1}s`, animation: `scaleUp 0.5s forwards` }} // Staggered entrance
            >
              <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  width={400} 
                  height={300} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <a href="/lranmore" className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-green-600 transition duration-200">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;