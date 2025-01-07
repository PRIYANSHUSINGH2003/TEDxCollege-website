import React from 'react';
import Navbar from '../components/Navbar';
import UpcomingSpeakers from './UpcomingSpeakers';
import Footer from '../components/Footer';


const App = () => {
    return (
        <div>
            <Navbar />
            <UpcomingSpeakers />
            <Footer />
        </div>
    );
};

export default App;
