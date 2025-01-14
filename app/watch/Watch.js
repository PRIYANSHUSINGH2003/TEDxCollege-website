'use client';

import React from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from Next.js
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai';

// Dynamically import ReactPlayer with ssr: false (only on client-side)
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const speakers = [
    {
        name: 'Kiran Bedi',
        title: 'India\'s First Female Officer in the Indian Police Service',
        bio: 'Kiran Bedi is a trailblazer in Indian policing and social reform. She became the first woman officer in the Indian Police Service (IPS) and is known for her transformative work in prison reforms and social justice initiatives.',
        image: '/images/watch2.jpg', // Replace with the actual image path
        videoUrl: 'https://www.youtube.com/watch?v=xyz456', // Replace with the actual YouTube link
        social: {
            instagram: 'https://www.instagram.com/kiranbedi',
            twitter: 'https://www.twitter.com/kiranbedi',
            linkedin: 'https://www.linkedin.com/in/kiranbedi',
        },
        location: 'New Delhi, India',
    },
    
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
        videoUrl: 'https://www.youtube.com/watch?v=xyz789', // Replace with the actual YouTube link
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
        image: '/images/pastwatch2.jpg', // Replace with the actual image path
        videoUrl: 'https://youtu.be/iQaiMoUn-zc?si=mR-G5eEyHy13tH5X', // Replace with the actual YouTube link
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
        image: '/images/pastwatch3.jpg', // Replace with the actual image path
        videoUrl: 'https://youtu.be/WYpMhEQrfKo?si=9_UGZ7xAt4lXWp8T', // Replace with the actual YouTube link
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
        image: '/images/pastwatch4.jpg',  // Replace with the actual image URL
        videoUrl: 'https://youtu.be/m4uah2EJ1Qc?si=kqUcgqj-7RgJuu-g',  // Replace with the actual YouTube link
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
        image: '/images/pastwatch5.jpg',  // Replace with the actual image URL
        videoUrl: 'https://youtu.be/kruM7-U_11Q?si=d1IKowb-_dX8EAaE',  // Replace with the actual YouTube link
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
        image: '/images/pastwatch6.jpg',  // Replace with the actual image URL
        videoUrl: 'https://youtu.be/-7_xxWsV91A?si=RiX-g7jJwxSv1Q6S',  // Replace with the actual YouTube link
        social: {
          instagram: 'https://www.instagram.com/bhavnacpandya',
          twitter: 'https://www.twitter.com/bhavnacpandya',
          linkedin: 'https://www.linkedin.com/in/bhavnacpandya',
        },
        location: 'Mumbai, India',
      }
];


const WatchPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white font-sans">
      <header className="text-center py-20">
        <h1 className="text-4xl font-bold animate__fadeIn">Watch Our TEDx Talks</h1>
        <p className="text-lg mt-4">Explore amazing speakers and their impactful talks.</p>
      </header>

      {/* Current Speakers Section */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Upcoming TEDx Speakers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 max-w-screen-xl mx-auto">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img src={speaker.image} alt={speaker.name} className="w-full h-48 object-cover" />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 flex justify-center items-center">
                  {/* Conditionally render ReactPlayer only on the client */}
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Speakers Section */}
      <div className="py-16 bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Past TEDx Speakers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 max-w-screen-xl mx-auto">
          {pastSpeakers.map((speaker, index) => (
            <div key={index} className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img src={speaker.image} alt={speaker.name} className="w-full h-48 object-cover" />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 flex justify-center items-center">
                  {/* Conditionally render ReactPlayer only on the client */}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
