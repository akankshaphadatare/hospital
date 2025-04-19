"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function BookAppointment() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        doctor: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Appointment Data:', formData);
        setFormData({
            name: '',
            email: '',
            date: '',
            time: '',
            doctor: ''
        });
    };

    return (
        <div 
            className="relative min-h-screen flex justify-center items-center" 
            style={{ backgroundImage: 'url(/hero23.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-md w-full max-w-md my-4 border-gradient"> {/* Using border-gradient class */}
                <h2 className="text-xl font-bold mb-2 text-blue-800 text-center">Book an Appointment</h2>
                <form onSubmit={handleSubmit}>
                    {/* Form fields remain unchanged */}
                    <div className="mb-2">
                        <label htmlFor="name" className="block text-blue-800 text-sm">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="border border-blue-300 text-blue-800 p-2 w-full focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-blue-800 text-sm">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="border border-blue-300 text-blue-800 p-2 w-full focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="date" className="block text-blue-800 text-sm">Appointment Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="border border-blue-300 text-blue-800 p-2 w-full focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="time" className="block text-blue-800 text-sm">Appointment Time</label>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="border border-blue-300 text-blue-800 p-2 w-full focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="doctor" className="block text-blue-800 text-sm">Select Doctor</label>
                        <select
                            id="doctor"
                            name="doctor"
                            value={formData.doctor}
                            onChange={handleChange}
                            required
                            className="border border-blue-300 text-blue-800 p-2 w-full focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">-- Select Doctor --</option>
                            <option value="Dr. John Doe">Dr. John Doe</option>
                            <option value="Dr. Jane Smith">Dr. Jane Smith</option>
                            <option value="Dr. Emily Johnson">Dr. Emily Johnson</option>
                            <option value="Dr. Michael Brown">Dr. Michael Brown</option>
                            <option value="Dr. Sarah Wilson">Dr. Sarah Wilson</option>
                            <option value="Dr. David Lee">Dr. David Lee</option>
                        </select>
                    </div>
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
                        Book Appointment
                    </button>
                </form>

                <div className="mt-3 text-center">
                    <Link href="/" className="text-blue-600 hover:text-gray-700">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}