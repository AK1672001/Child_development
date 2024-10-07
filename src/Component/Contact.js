import React from "react";
import { FaEnvelope, FaUser, FaChild, FaPaperPlane } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col justify-center items-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-yellow-300 w-32 h-32 rounded-full absolute top-0 left-10 opacity-40 animate-bounce"></div>
        <div className="bg-pink-300 w-20 h-20 rounded-full absolute top-10 right-10 opacity-40 animate-pulse"></div>
        <div className="bg-green-300 w-28 h-28 rounded-full absolute bottom-10 left-5 opacity-40 animate-spin-slow"></div>
        <div className="bg-purple-300 w-16 h-16 rounded-full absolute bottom-10 right-20 opacity-40 animate-ping"></div>
      </div>

      <h1 className="text-4xl font-extrabold text-blue-900 mb-6 text-center tracking-wide drop-shadow-lg">
        Contact Us for Child Development Support
      </h1>
      <p className="text-3xl text-gray-700 mb-8 text-center max-w-md">
        We're here to help with any questions about your child's growth. Feel
        free to contact us, and we'll respond as soon as possible!
      </p>

      <form className="w-full max-w-lg bg-white p-8 rounded-3xl shadow-2xl relative z-10">
        <div className="mb-6  relative">
          <div className="flex flex-row gap-3">
            <FaUser className=" text-gray-400" size={20} />
            <label
              className="block text-gray-800 text-sm font-semibold mb-1"
              htmlFor="parentName"
            >
              Parent/Guardian's Name
            </label>
          </div>
          <input
            id="parentName"
            type="text"
            placeholder="Enter your name"
            className="w-full px-10 py-3 bg-blue-50 border-2 border-yellow-300 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div className="mb-6 relative">
          <div className="flex flex-row">
            <FaChild className=" text-gray-400" size={20} />
            <label
              className="block text-gray-800 text-sm font-semibold mb-1"
              htmlFor="childName"
            >
              Child's Name
            </label>
          </div>
          <input
            id="childName"
            type="text"
            placeholder="Enter your child's name"
            className="w-full px-10 py-3 bg-pink-50 border-2 border-pink-300 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="mb-6 relative">
          <div className="flex flex-row gap-2">
            <FaEnvelope className=" text-gray-400" size={20} />
            <label
              className="block text-gray-800 text-sm  font-semibold mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
          </div>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-10 py-3 bg-green-50 border-2 border-green-300 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="mb-6 relative">
          <label
            className="block text-gray-800 text-sm font-semibold mb-1"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Write your message here"
            className="w-full px-6 py-3 bg-purple-50 border-2 border-purple-300 rounded-2xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-xl flex items-center justify-center transform hover:scale-105 transition-all ease-in-out duration-300"
          >
            <FaPaperPlane className="mr-2" />
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
