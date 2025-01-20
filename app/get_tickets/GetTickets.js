import React from "react";
import { FaTicketAlt, FaRegCalendarAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const GetTickets = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white font-sans">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-red-800 to-gray-900 py-20 px-6 text-center">
        <h1 className="text-5xl font-bold animate__animated animate__fadeInDown">
          Join Us at TEDxCollege
        </h1>
        <p className="text-lg mt-4 text-gray-300 animate__animated animate__fadeInUp">
          Discover inspiring talks, connect with brilliant minds, and experience
          ideas worth spreading.
        </p>
        <button className="mt-8 px-8 py-3 bg-red-600 hover:bg-red-500 rounded-md text-lg font-medium transition transform hover:scale-105 animate__animated animate__fadeIn">
          Get Tickets Now
        </button>
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

      {/* Ticket Purchase Form */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-screen-md mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Buy Your Ticket
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="mt-2 block w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-2 block w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="ticket-type"
                className="block text-sm font-medium text-gray-300"
              >
                Ticket Type
              </label>
              <select
                id="ticket-type"
                className="mt-2 block w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option>General Admission - $50</option>
                <option>VIP Admission - $100</option>
                <option>Student Admission - $30</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-medium rounded-lg transition transform hover:scale-105"
            >
              Buy Ticket
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-center">
        <p className="text-gray-500">© 2025 TEDx College. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default GetTickets;
