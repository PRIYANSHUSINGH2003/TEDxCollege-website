'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from Next.js
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineCalendar, AiOutlineClockCircle, AiOutlineRead } from 'react-icons/ai'; // React Icons


// Dynamically import ReactPlayer with ssr: false (only on client-side)
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const speakers = [
  {
    name: 'Kiran Bedi',
    title: 'India\'s First Female Officer in the Indian Police Service',
    bio: 'Kiran Bedi is a trailblazer in Indian policing and social reform. She became the first woman officer in the Indian Police Service (IPS) and is known for her transformative work in prison reforms and social justice initiatives.',
    image: '/images/watch2.jpg', // Replace with the actual image path
     // Replace with the actual YouTube link
    social: {
      instagram: 'https://www.instagram.com/kiranbedi',
      twitter: 'https://www.twitter.com/kiranbedi',
      linkedin: 'https://www.linkedin.com/in/kiranbedi',
    },
    location: 'New Delhi, India',
  },
  // Add other upcoming speakers here...
  {
    name: 'Arvind Krishna',
    title: 'Chairman and CEO of IBM',
    bio: 'Arvind Krishna is the Chairman and CEO of IBM, a global technology leader. He is known for his work in advancing cloud computing, artificial intelligence, and quantum computing, shaping the future of technology.',
    image: '/images/watch1.jpg', // Replace with the actual image path
    
    social: {
        instagram: 'https://www.instagram.com/arvindkrishna',
        twitter: 'https://www.twitter.com/arvindkrishna',
        linkedin: 'https://www.linkedin.com/in/arvindkrishna',
    },
    location: 'Armonk, New York, USA',
},
{
    name: 'Dr. Subhash Chandra',
    title: 'Chairman of Essel Group',
    bio: 'Dr. Subhash Chandra is a renowned Indian media mogul and the founder of Essel Group, which includes well-known companies such as Zee Entertainment. He is recognized for his work in media, entertainment, and for his contributions to India\'s broadcasting industry.',
    image: '/images/watch3.jpg', // Replace with the actual image path
    social: {
        instagram: 'https://www.instagram.com/subhashchandra',
        twitter: 'https://www.twitter.com/subhashchandra',
        linkedin: 'https://www.linkedin.com/in/subhashchandra',
    },
    location: 'Mumbai, India',
}

];

const pastSpeakers = [
  {
    name: 'Virendra Valksangkar',
    title: 'Entrepreneur, Innovator, and Social Worker',
    bio: 'Virendra Valksangkar is an entrepreneur and social worker who has been actively involved in various social initiatives aimed at youth development and community empowerment. He is known for his work in leveraging technology and innovation for societal change.',
    image: '/images/patwatch1.jpg', // Replace with the actual image path
    videoUrl: 'https://youtu.be/RfREj7GaTqQ?si=mmrFqYs2W2uGYJH3', // Replace with the actual YouTube link
    social: {
      instagram: 'https://www.instagram.com/virendravalksangkar',
      twitter: 'https://www.twitter.com/virendravalksangkar',
      linkedin: 'https://www.linkedin.com/in/virendravalksangkar',
    },
    location: 'India',
  },
  
  {
    name: 'Ravi Dubey',
    title: 'Actor, Producer, and Television Host',
    bio: 'Ravi Dubey is a popular Indian television actor, producer, and host. He is known for his roles in TV shows like "Sasural Simar Ka" and "Jamai Raja." Apart from acting, Ravi is a successful producer and a motivational speaker, inspiring youth with his journey and achievements.',
    image: '/images/pastwatch2.jpg', 
    videoUrl: 'https://youtu.be/iQaiMoUn-zc?si=mR-G5eEyHy13tH5X', 
    social: {
        instagram: 'https://www.instagram.com/ravidubey2312',
        twitter: 'https://www.twitter.com/ravidubey2312',
        linkedin: 'https://www.linkedin.com/in/ravi-dubey-634019124/',
    },
    location: 'Mumbai, India',
},
{
    name: 'Meera Bavde',
    title: 'Social Entrepreneur and Educator',
    bio: 'Meera Bavde is a passionate social entrepreneur and educator focused on creating opportunities for underprivileged communities. She works extensively in the fields of education, women empowerment, and community development to bring positive change to society.',
    image: '/images/pastwatch3.jpg', 
    videoUrl: 'https://youtu.be/WYpMhEQrfKo?si=9_UGZ7xAt4lXWp8T', 
    social: {
        instagram: 'https://www.instagram.com/meera_bavde',
        twitter: 'https://www.twitter.com/meera_bavde',
        linkedin: 'https://www.linkedin.com/in/meera-bavde',
    },
    location: 'India',
},
{
    name: 'Drishti Sharma',
    title: 'Mental Health Advocate & Public Speaker',
    bio: 'Drishti Sharma is an inspiring mental health advocate, public speaker, and social entrepreneur. She works relentlessly towards raising awareness about mental health issues, particularly among young adults. With a background in psychology and years of experience in counseling, Drishti is committed to breaking the stigma surrounding mental health. Her TEDx talk explores the importance of mental well-being in the modern world and offers actionable insights to help individuals cope with anxiety, stress, and depression.',
    image: '/images/pastwatch4.jpg',  
    videoUrl: 'https://youtu.be/m4uah2EJ1Qc?si=kqUcgqj-7RgJuu-g',  
    social: {
      instagram: 'https://www.instagram.com/drishti_sharma',
      twitter: 'https://www.twitter.com/drishti_sharma',
      linkedin: 'https://www.linkedin.com/in/drishti_sharma',
    },
    location: 'New Delhi, India',
  },
  {
    name: 'D.M. Arvind Malik',
    title: 'Entrepreneur & Innovator',
    bio: 'D.M. Arvind Maliok is a visionary entrepreneur and innovator with a passion for technology and sustainable development. With extensive experience in the startup ecosystem, Arvind is dedicated to creating sustainable business solutions that have a long-term positive impact on communities and the environment. His TEDx talk focuses on the intersection of entrepreneurship, innovation, and sustainability, offering practical insights for aspiring entrepreneurs to make a difference through business.',
    image: '/images/pastwatch5.jpg',  
    videoUrl: 'https://youtu.be/kruM7-U_11Q?si=d1IKowb-_dX8EAaE',  
    social: {
      instagram: 'https://www.instagram.com/arvind_maliok',
      twitter: 'https://www.twitter.com/arvind_maliok',
      linkedin: 'https://www.linkedin.com/in/arvindmaliok',
    },
    location: 'Bangalore, India',
  },
  {
    name: 'Bhavna Pandya',
    title: 'Leadership Coach & Speaker',
    bio: 'Bhavna Pandya is an influential leadership coach, speaker, and advocate who empowers individuals and organizations to unlock their full potential. With years of experience in personal development and professional coaching, Bhavna helps leaders navigate challenges, enhance their decision-making skills, and achieve sustainable success. Her TEDx talk focuses on the power of self-awareness and emotional intelligence in leadership, offering strategies to lead with confidence and empathy.',
    image: '/images/pastwatch6.jpg',  
    videoUrl: 'https://youtu.be/-7_xxWsV91A?si=RiX-g7jJwxSv1Q6S',  
    social: {
      instagram: 'https://www.instagram.com/bhavnacpandya',
      twitter: 'https://www.twitter.com/bhavnacpandya',
      linkedin: 'https://www.linkedin.com/in/bhavnacpandya',
    },
    location: 'Mumbai, India',
  }

];

const blogPosts = [
  {
    title: "Understanding Social Innovation",
    excerpt: "Social innovation has become one of the key driving forces behind societal change. In this post, we explore its significance and impact on global communities...",
    image:"/images/blog1.jpg",
    link: "/blog/social-innovation",
  },
  {
    title: "Leadership in the 21st Century",
    excerpt: "The landscape of leadership is rapidly evolving. Learn how modern leaders are shaping the future of business, technology, and social responsibility...",
    image: "/images/blog3.jpg", 
    link: "/blog/leadership-21st-century",
  },
  {
    title: "The Role of Technology in Education",
    excerpt: "In the era of digital transformation, technology is playing a crucial role in reshaping the education sector. In this post, we dive into the trends and innovations...",
    image: "/images/blog4.jpg", 
    link: "/blog/technology-in-education",
  },
  
];

const WatchPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [upiId, setUpiId] = useState('');
  const [groupCount, setGroupCount] = useState(1);  
  const [collegeName, setCollegeName] = useState('');  

  const handleRegisterClick = (speaker) => {
    setSelectedSpeaker(speaker);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSpeaker(null);
    setPaymentMethod('');
    setCardNumber('');
    setUpiId('');
    setCollegeName('');  
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleGroupCountChange = (e) => {
    setGroupCount(e.target.value);
  };

  const handleSubmitRegistration = (e) => {
    e.preventDefault();
    
    alert(`Registration Submitted! Payment Method: ${paymentMethod}`);
    setShowModal(false);
  };

  
  const pricePerPerson = groupCount >= 5 ? 299 : 399; 

  return (
    <div className="bg-gradient-to-r from-red-800 to-gray-900 text-white  font-sans">
      <header className="text-center py-20 pt-20 " style={{paddingTop:'8em'}}>
        <h1 className="text-2xl font-bold animate__fadeIn">Watch Our TEDx Talks</h1>
        <p className="text-lg mt-4">Explore amazing speakers and their impactful talks.</p>
        
        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-center space-x-12">
          <AiOutlineCalendar
            className="text-4xl text-white cursor-pointer hover:text-blue-400 transform transition duration-300 ease-in-out"
            onClick={() => document.getElementById('upcoming-speakers').scrollIntoView({ behavior: 'smooth' })}
          />
          <AiOutlineClockCircle
            className="text-4xl text-white cursor-pointer hover:text-yellow-400 transform transition duration-300 ease-in-out"
            onClick={() => document.getElementById('past-speakers').scrollIntoView({ behavior: 'smooth' })}
          />
          <AiOutlineRead
            className="text-4xl text-white cursor-pointer hover:text-green-400 transform transition duration-300 ease-in-out"
            onClick={() => document.getElementById('blog').scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
        <div className="mt-8">
         {/* <button 
            className="bg-red-500 text-white py-2 px-6 rounded mr-4 hover:bg-red-400"
            onClick={() => document.getElementById('upcoming-speakers').scrollIntoView({ behavior: 'smooth' })}
          >
            Upcoming Speakers
          </button>*
          <button 
            className="bg-blue-500 text-white py-2 px-6 rounded mr-4 hover:bg-blue-400"
            onClick={() => document.getElementById('past-speakers').scrollIntoView({ behavior: 'smooth' })}
          >
            Past Speakers
          </button>
          <button 
            className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-400"
            onClick={() => document.getElementById('blog-section').scrollIntoView({ behavior: 'smooth' })}
          >
            Blog
          </button>*/}
        </div>
      </header>

      {/* Upcoming Speakers Section */}
      <div id="upcoming-speakers" className=" bg-gradient-to-r from-red-800 to-gray-900 py-16" style={{  }}>
        <h2 className="text-3xl font-bold text-center text-white mb-8">Upcoming TEDx Speakers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 max-w-screen-xl mx-auto">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img src={speaker.image} alt={speaker.name} className="w-full h-48 object-cover" />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 flex justify-center items-center">
                  <ReactPlayer
                    url={speaker.videoUrl}
                    playing={false}
                    controls={true}
                    width="100%"
                    height="100%"
                    config={{
                      youtube: {
                        playerVars: { modestbranding: 1, rel: 0 }
                      }
                    }}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">{speaker.name}</h3>
                <p className="text-lg text-gray-400">{speaker.title}</p>
                <p className="text-sm text-gray-500 my-4">{speaker.bio}</p>
                <div className="flex items-center text-gray-400 mb-4">
                  <span>{speaker.location}</span>
                </div>
                <div className="flex space-x-4">
                  <a href={speaker.social.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400">
                    <AiOutlineInstagram className="text-2xl" />
                  </a>
                  <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    <AiOutlineTwitter className="text-2xl" />
                  </a>
                  <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
                    <AiOutlineLinkedin className="text-2xl" />
                  </a>
                </div>
                <button
                  onClick={() => handleRegisterClick(speaker)}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400"
                >
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Speakers Section */}
      <div id="past-speakers" className="py-16 bg-gray-900">
  <h2 className="text-3xl font-bold text-center text-white mb-8">Past TEDx Speakers</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 max-w-screen-xl mx-auto">
    {pastSpeakers.map((speaker, index) => (
      <div key={index} className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
        <div className="relative" style={{ height: '300px' }}>  {/* Set a fixed height for the video container */}
          <ReactPlayer
            url={speaker.videoUrl}
            playing={false}
            controls={true}
            width="100%"
            height="100%"  
            config={{
              youtube: {
                playerVars: { modestbranding: 1, rel: 0 }
              }
            }}
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold">{speaker.name}</h3>
          <p className="text-lg text-gray-400">{speaker.title}</p>
          <p className="text-sm text-gray-500 my-4">{speaker.bio}</p>
          <div className="flex items-center text-gray-400 mb-4">
            <span>{speaker.location}</span>
          </div>
          <div className="flex space-x-4">
            <a href={speaker.social.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400">
              <AiOutlineInstagram className="text-2xl" />
            </a>
            <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              <AiOutlineTwitter className="text-2xl" />
            </a>
            <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
              <AiOutlineLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Blog Section */}
      <div id="blog" className="py-16 bg-gray-800">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 max-w-screen-xl mx-auto">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-700 text-white rounded-lg shadow-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">{post.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{post.excerpt}</p>
                <a href={post.link} className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Registration */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black p-8 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">
              Register for {selectedSpeaker.name} at just Rs {pricePerPerson} {groupCount >= 5 && <span>(For a group of 5 or more)</span>}
            </h2>
            <form onSubmit={handleSubmitRegistration}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700">College Name</label>
                <input
                  type="text"
                  id="collegeName"
                  name="collegeName"
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  required
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                  placeholder="Enter your college name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="groupCount" className="block text-sm font-medium text-gray-700">Number of People in Group</label>
                <input
                  type="number"
                  id="groupCount"
                  name="groupCount"
                  value={groupCount}
                  onChange={handleGroupCountChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                  min="1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="payment" className="block text-sm font-medium text-gray-700">Payment Method</label>
                <select
                  id="payment"
                  name="payment"
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                >
                  <option value="">Select Payment Method</option>
                  <option value="UPI">UPI</option>
                  <option value="Paytm">Paytm</option>
                  <option value="PhonePay">PhonePay</option>
                  <option value="Card">Card</option>
                </select>
              </div>

              {/* Conditional Fields for Payment */}
              {paymentMethod === 'Card' && (
                <div className="mb-4">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                    placeholder="Enter card number"
                  />
                </div>
              )}

              {paymentMethod === 'UPI' && (
                <div className="mb-4">
                  <label htmlFor="upiId" className="block text-sm font-medium text-gray-700">UPI ID</label>
                  <input
                    type="text"
                    id="upiId"
                    name="upiId"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    required
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                    placeholder="Enter UPI ID"
                  />
                </div>
              )}

              <div className="flex justify-between items-center">
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400">
                  Submit Registration
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="text-gray-600 hover:text-gray-500"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchPage;


