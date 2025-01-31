import React from 'react';
import Navbar from '../../components/Navbar';  // Adjust the import path as needed
import Watch from './Watch';  // Import the Watch component
import Footer from '../../components/Footer';  // Adjust the import path as needed

const WatchPage = () => {
    return (
        <div>
            <Navbar />
            <Watch /> {/* This renders the Watch component */}
            <Footer />
        </div>
    );
};

export default WatchPage;

