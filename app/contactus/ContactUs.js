import React from "react";

const orgTeam = [
    {
        photo: 'images/speaker1.png',
        name: 'John Doe',
        position: 'Position1',
        email: 'name@example.com',
        phone: '123-456-7890',
    },
    {
        photo: 'images/speaker1.png',
        name: 'John Doe',
        position: 'Position2',
        email: 'name@example.com',
        phone: '098-765-4321',
    },
];

const Authorities = [
    {
        photo: 'images/speaker2.png',
        name: 'John Doe',
        position: 'Position1',
        email: 'name@example.com',
        phone: '123-456-7890',
    },
    {
        photo: 'images/speaker2.png',
        name: 'John Doe',
        position: 'Position2',
        email: 'name@example.com',
        phone: '098-765-4321',
    },
];

const Official = [
    {
        photo: 'images/speaker3.png',
        name: 'John Doe',
        position: 'Position1',
        email: 'name@example.com',
        phone: '123-456-7890',
    },
    {
        photo: 'images/speaker3.png',
        name: 'John Doe',
        position: 'Position2',
        email: 'name@example.com',
        phone: '098-765-4321',
    },
];

const Card = ({ photo, position, email, phone, name }) => {
    return (
        <div className="p-2 m-2">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
                <div className="relative w-full h-64 w-60">
                    <img
                        src={photo}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full object-cover rounded-t-lg transition-transform duration-500 hover:scale-110"
                    />
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
                    <p className="text-lg font-semibold text-gray-400 mb-2">{position}</p>
                    <p className="text-sm text-gray-500 mb-4">{email}</p>
                    <p className="text-sm text-gray-500 mb-4">{phone}</p>
                </div>
            </div>
        </div>
    );
};

const ContactUs = () => {
    return (
        <>
            <header className="relative bg-gradient-to-r from-red-800 to-gray-900 py-24 px-6 text-center">
                <h1 className="text-5xl pt-9 font-extrabold text-white animate__animated animate__fadeInDown">
                    Contact Us
                </h1>
                <p className="text-lg mt-4 text-gray-300 animate__animated animate__fadeInUp">
                    Various ways for you to reach out with questions or feedback.
                </p>
            </header>

            <div className="flex flex-col items-center bg-black mt-4">
                <h1 className="text-2xl md:text-4xl lg:grid-cols-3 px-4 text-white font-bold">Organizing Team</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4">
                    {orgTeam.map((team, index) => (
                        <Card
                            key={index}
                            photo={team.photo}
                            name={team.name}
                            position={team.position}
                            email={team.email}
                            phone={team.phone}
                        />
                    ))}
                </div>
                <hr className="border-t border-white w-1/2 my-4" />

                <h1 className="text-2xl md:text-4xl px-4 text-white font-bold">College Authorities</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4">
                    {Authorities.map((team, index) => (
                        <Card
                            key={index}
                            photo={team.photo}
                            name={team.name}
                            position={team.position}
                            email={team.email}
                            phone={team.phone}
                        />
                    ))}
                </div>
                <hr className="border-t border-white w-1/2 my-4" />

                <h1 className="text-3xl md:text-4xl px-4 text-white font-bold">Official TEDx</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4">
                    {Official.map((team, index) => (
                        <Card
                            key={index}
                            photo={team.photo}
                            name={team.name}
                            position={team.position}
                            email={team.email}
                            phone={team.phone}
                        />
                    ))}
                </div>
            </div>

        </>
    );
};

export default ContactUs;