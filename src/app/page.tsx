'use client'; // Only if using interactive components

import React from 'react';
import Products from '../components/product'; // Use relative path instead
import Reviwes from '@/components/Reviwes';  // Corrected the typo from "Reviwes" to "Reviews"
import Navbar from '@/components/Navbar';  // Use 'Navbar', not 'navbar'
import Footer from "@/components/Footer";      // Adjust path if necessary

const Page: React.FC = () => {
  return (
    <div>
      <Navbar />  {/* Correct usage of Navbar as a component */}
      <main className="p-4">
        <Products />  {/* Add the Products Section */}
        <Reviwes />    {/* Corrected usage of Reviews Section */}
        {/* Other sections... Like Doctors, Testimonials, Contact Us */}
      </main>
      <Footer />  {/* Add the Footer */}
    </div>
  );
};

export default Page;