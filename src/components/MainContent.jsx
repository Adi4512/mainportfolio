import React from 'react';
import { FaHome, FaBriefcase, FaAddressCard } from 'react-icons/fa';
import Navbar from './Navbar';
import { Link } from 'react-scroll';

export default function MainContent() {
  return (
    <>
    <div 
      id="main-content" 
      className="flex justify-center items-center space-x-7 p-2 bg-black bg-opacity-20 rounded-full text-white border border-gray-700 cursor-pointer mx-auto mt-4 mb-10 " 
      style={{ maxWidth: '400px' }} // Set a max-width to control the size
    >
      <a href='/' div className="flex flex-col items-center hover:text-cyan-400">
      
        <FaHome size={18} />
        <span className="mt-2 text-sm">Home</span>
      </a>
      <Link to="projects" smooth={true} duration={1000}  div className="flex flex-col items-center hover:text-cyan-400">
        <FaBriefcase size={18} />
        <span className="mt-2 text-sm">My Projects</span>
      </Link>
      <Link to="contact" smooth={true} duration={1700} div className="flex flex-col items-center hover:text-cyan-400">
        <FaAddressCard size={18} />
        <span className="mt-2 text-sm">About Me</span>
      </Link>
    </div>
    
    </>
  );
}
