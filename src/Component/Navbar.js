import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className="bg-white shadow-lg w-full h-auto p-4">
      <div className="flex justify-between items-center text-black font-mono text-2xl">
        
        <Link to='/' className="text-3xl font-bold">High Sky</Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
                 className="h-8 w-8 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        
        <div className="hidden md:flex space-x-8 text-2xl font-semibold">
          <span className="hover:text-yellow-400">HOME</span>
          <span className="hover:text-yellow-400">ABOUT US</span>
          <Link to='/udeshya' className="hover:text-yellow-400"><span className='text-orange-700'>UDESHYA</span></Link>
          <span className="hover:text-yellow-400">OUR PROGRESS</span>
        </div>

       
        <div className="hidden md:flex space-x-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded-lg">Book a Consultation</button>
          <Link to='/contact' className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded-lg">Contact Us</Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 text-center">
          <span className="hover:text-yellow-400 font-bold text-sm text-black">Home</span>
          <span className="hover:text-yellow-400 font-bold text-sm text-black">About Us</span>
          <span className="hover:text-yellow-400 font-bold text-sm text-black">Udeshya</span>
          <span className="hover:text-yellow-400 font-bold text-sm text-black">Our Progress</span>
          <button className="bg-yellow-400 hover:bg-yellow-500 font-bold text-sm text-white py-2 px-4 rounded-lg">Book a Consultation</button>
          <button className="bg-blue-800 hover:bg-blue-900 font-bold text-sm text-white py-2 px-4 rounded-lg">Contact Us</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
