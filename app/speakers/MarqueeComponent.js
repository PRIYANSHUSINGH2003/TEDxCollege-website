import React from "react";
import Marquee from "react-fast-marquee";
import { FaRegSmile, FaHeartbeat, FaHandSparkles, FaRunning } from "react-icons/fa";

const MarqueeComponent = () => {
    return (
        <div className="py-6 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            <Marquee gradient={false} speed={60} className="py-2">
                {[
                    { text: "Expert Care", icon: <FaRegSmile className="text-red-500" /> },
                    { text: "Pain Relief", icon: <FaHeartbeat className="text-blue-500" /> },
                    { text: "Recovery", icon: <FaHandSparkles className="text-yellow-500" /> },
                    { text: "Rehabilitation", icon: <FaRunning className="text-green-500" /> },
                    { text: "Mobility", icon: <FaRunning className="text-teal-500" /> },
                    { text: "Strength", icon: <FaHeartbeat className="text-indigo-500" /> },
                    { text: "Healing", icon: <FaHandSparkles className="text-purple-500" /> },
                    { text: "Wellness", icon: <FaRegSmile className="text-pink-500" /> },
                    { text: "Professional", icon: <FaRunning className="text-orange-500" /> },
                    { text: "Experienced", icon: <FaHeartbeat className="text-red-500" /> },
                    { text: "Trusted", icon: <FaHandSparkles className="text-yellow-500" /> },
                    { text: "Personalized", icon: <FaRegSmile className="text-green-500" /> },
                    { text: "Effective", icon: <FaHeartbeat className="text-indigo-500" /> },
                    { text: "Results", icon: <FaRunning className="text-blue-500" /> },
                ].map((item, index) => (
                    <span
                        key={index}
                        className="mx-8 text-lg md:text-xl font-medium text-white flex items-center space-x-3 bg-black bg-opacity-30 px-5 py-3 rounded-lg shadow-xl transition-transform transform hover:scale-110 hover:bg-opacity-50"
                    >
                        <span className="text-2xl">{item.icon}</span>
                        <span className="italic">{item.text}</span>
                    </span>
                ))}
            </Marquee>
        </div>
    );
};

export default MarqueeComponent;
