import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from 'next/image';

const teamMembers = [
    {
        name: "John Doe",
        role: "Event Coordinator",
        image: "/images/speaker2.png", // Replace with the image path
        social: {
            linkedin: "https://linkedin.com/in/johndoe",
            instagram: "https://instagram.com/johndoe",
        },
    },
    {
        name: "Jane Smith",
        role: "Content Manager",
        image: "/images/speaker2.png", // Replace with the image path
        social: {
            linkedin: "https://linkedin.com/in/janesmith",
            instagram: "https://instagram.com/janesmith",
        },
    },
    {
        name: "Alice Johnson",
        role: "Marketing Lead",
        image: "/images/speaker2.png", // Replace with the image path
        social: {
            linkedin: "https://linkedin.com/in/alicejohnson",
            instagram: "https://instagram.com/alicejohnson",
        },
    },
    {
        name: "John Doe",
        role: "Event Coordinator",
        image: "/images/speaker2.png", // Replace with the image path
        social: {
            linkedin: "https://linkedin.com/in/johndoe",
            instagram: "https://instagram.com/johndoe",
        },
    },
    {
        name: "Jane Smith",
        role: "Content Manager",
        image: "/images/speaker2.png", // Replace with the image path
        social: {
            linkedin: "https://linkedin.com/in/janesmith",
            instagram: "https://instagram.com/janesmith",
        },
    },
    {
        name: "Alice Johnson",
        role: "Marketing Lead",
        image: "/images/speaker2.png", // Replace with the image path
        social: {
            linkedin: "https://linkedin.com/in/alicejohnson",
            instagram: "https://instagram.com/alicejohnson",
        },
    },
    {
        name: "John Doe",
        role: "Event Coordinator",
        image: "/images/speaker2.png", // Replace with the image path
        social: {
            linkedin: "https://linkedin.com/in/johndoe",
            instagram: "https://instagram.com/johndoe",
        },
    },
    {
        name: "Jane Smith",
        role: "Content Manager",
        image: "/images/speaker2.png", // Replace with the image path
        social: {
            linkedin: "https://linkedin.com/in/janesmith",
            instagram: "https://instagram.com/janesmith",
        },
    },
    {
        name: "Alice Johnson",
        role: "Marketing Lead",
        image: "/images/speaker2.png", // Replace with the image path
        social: {
            linkedin: "https://linkedin.com/in/alicejohnson",
            instagram: "https://instagram.com/alicejohnson",
        },
    },
];

const Team = () => {
    return (
        <div className="bg-gray-900 text-white font-sans">
            {/* Hero Section */}
            <header className="relative bg-gradient-to-r from-red-800 to-gray-900 py-24 px-6 text-center">
                <h1 className="text-5xl pt-9 font-extrabold text-white animate__animated animate__fadeInDown">
                    Meet the TEDx College Team
                </h1>
                <p className="text-lg mt-4 text-gray-300 animate__animated animate__fadeInUp">
                    Passionate individuals dedicated to bringing ideas to life and inspiring the community.
                </p>
                <p className="text-lg mt-4 text-gray-300 animate__animated animate__fadeInUp">
                    Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon. Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon.
                    Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon. Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon.
                    Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon. Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon.
                    Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon. Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon.
                </p>
            </header>

            <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
                <h2 className="text-5xl font-extrabold text-center text-red-500 mb-12">
                    Our Amazing Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-screen-xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 group relative"
                        >
                            {/* Hover Overlay for more professional look */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-gray-900 opacity-0 group-hover:opacity-80 transition duration-500 rounded-lg" />

                            {/* Image Section with Hover Effects */}
                            <div className="relative z-10">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={128}
                                    height={128}
                                    className="rounded-full w-32 h-32 mx-auto mt-6 group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-6 relative z-10">
                                <h3 className="text-2xl font-bold text-center text-white">{member.name}</h3>
                                <p className="text-sm text-center text-gray-400 mb-4">{member.role}</p>

                                {/* Social Media Links */}
                                <div className="flex justify-center space-x-6 mt-4">
                                    <a
                                        href={member.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:text-blue-400 transition-transform transform hover:scale-125"
                                    >
                                        <FaLinkedin size={28} />
                                    </a>
                                    <a
                                        href={member.social.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-pink-500 hover:text-pink-400 transition-transform transform hover:scale-125"
                                    >
                                        <FaInstagram size={28} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 py-20 px-6 text-center">
                <h2 className="text-4xl font-semibold text-white mb-8">
                    Join Us and Be Part of the Movement
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                    Become part of a global initiative that fosters innovation, inspires action, and spreads ideas worth sharing.
                </p>
                <button className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300">
                    Join the Team
                </button>
            </section>
        </div>
    );
};

export default Team;
