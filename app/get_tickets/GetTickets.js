'use client';

import React, { useState } from 'react';
import { FaTicketAlt, FaRegCalendarAlt, FaCalendarAlt, FaClock,  FaPercentage } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const GetTickets = () => {
    const [formData, setFormData] = useState({
        time: '',
        date: '',
        ticketType: '',
        discount: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Ticket Purchased Successfully!');
        console.log(formData);
    };
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white font-sans">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-red-800 to-gray-900 py-20 px-6 text-center">
        <h1 className="text-5xl pt-9 font-bold animate__animated animate__fadeInDown">
          Join Us at TEDxCollege
        </h1>
        <p className="text-lg mt-4 text-gray-300 animate__animated animate__fadeInUp">
          Discover inspiring talks, connect with brilliant minds, and experience
          ideas worth spreading.
        </p>
        <p className="text-lg mt-4 text-gray-300 animate__animated animate__fadeInUp">
            Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon. Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon.
            Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon. Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon.
            Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon. Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon.
            Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon. Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon.
        </p>
      </header>

      {/* Event Details Section */}
      <section className="py-16 px-6">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Event Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
              <MdLocationOn className="text-5xl text-red-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-400">TEDxCollege Auditorium, New York City</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
              <FaRegCalendarAlt className="text-5xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Date & Time</h3>
              <p className="text-gray-400">25th March 2025, 10:00 AM - 5:00 PM</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
              <FaTicketAlt className="text-5xl text-green-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Tickets</h3>
              <p className="text-gray-400">Limited seats available. Get yours now!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section className="py-16 bg-gray-900 px-6">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Choose Your Tickets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-4">General Admission</h3>
              <p className="text-gray-400 mb-6">Access to all sessions</p>
              <p className="text-2xl font-bold text-red-500 mb-6">$50</p>
              <button className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-md text-lg font-medium transition transform hover:scale-105">
                Select
              </button>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-4">VIP Admission</h3>
              <p className="text-gray-400 mb-6">Priority seating + Swag bag</p>
              <p className="text-2xl font-bold text-red-500 mb-6">$100</p>
              <button className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-md text-lg font-medium transition transform hover:scale-105">
                Select
              </button>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-4">Student Admission</h3>
              <p className="text-gray-400 mb-6">Discounted access with student ID</p>
              <p className="text-2xl font-bold text-red-500 mb-6">$30</p>
              <button className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-md text-lg font-medium transition transform hover:scale-105">
                Select
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Form Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="max-w-screen-md mx-auto bg-gray-900 rounded-lg shadow-2xl p-10">
                <h2 className="text-4xl font-bold text-center text-white mb-10">
                    Book Your Tickets
                </h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Date */}
                    <div>
                        <label className="block text-gray-300 font-medium mb-2">
                            Date <FaCalendarAlt className="inline ml-2 text-red-400" />
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full bg-gray-800 text-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-red-500 transition-all"
                            required
                        />
                    </div>
        
                    {/* Time */}
                    <div>
                        <label className="block text-gray-300 font-medium mb-2">
                            Time <FaClock className="inline ml-2 text-red-400" />
                        </label>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full bg-gray-800 text-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-red-500 transition-all"
                            required
                        />
                    </div>
        
                    {/* Ticket Type */}
                    <div>
                        <label className="block text-gray-300 font-medium mb-2">
                            Ticket Type <FaTicketAlt className="inline ml-2 text-red-400" />
                        </label>
                        <select
                            name="ticketType"
                            value={formData.ticketType}
                            onChange={handleChange}
                            className="w-full bg-gray-800 text-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-red-500 transition-all"
                            required
                        >
                            <option value="" disabled>
                                Select a ticket type
                            </option>
                            <option value="Standard">Standard</option>
                            <option value="VIP">VIP</option>
                            <option value="Student">Student</option>
                        </select>
                    </div>
        
                    {/* Discount */}
                    <div>
                        <label className="block text-gray-300 font-medium mb-2">
                            Discount Code (Optional) <FaPercentage className="inline ml-2 text-red-400" />
                        </label>
                        <input
                            type="text"
                            name="discount"
                            value={formData.discount}
                            onChange={handleChange}
                            className="w-full bg-gray-800 text-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500 transition-all"
                            placeholder="Enter discount code"
                        />
                    </div>
        
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 rounded-lg text-lg shadow-md transition-transform transform hover:scale-105"
                    >
                        Purchase Tickets
                    </button>
                </form>
            </div>
        </section>
    </div>
  );
};

export default GetTickets;
