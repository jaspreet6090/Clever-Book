import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-900 text-white py-6 px-14 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold ">
          <a href="#" className="text-white  no-underline">
            <img src="/logo.png" alt="CleverBooks Logo" className="inline h-[40px] mr-2" />
            CleverBooks
          </a>
        </div>
        <div className="hidden lg:flex space-x-6 text-lg">
          <a href="#" className="hover:text-purple-400">Product</a>
          <a href="#" className="hover:text-purple-400">Pricing</a>
          <a href="#" className="hover:text-purple-400">Industry</a>
          <a href="#" className="hover:text-purple-400">Customer Stories</a>
          <a href="#" className="hover:text-purple-400">About</a>
          <a href="#" className="hover:text-purple-400">Blog</a>
        </div>
        <div className="hidden lg:flex space-x-4 ">
          <button className="text-white text-lg hover:text-purple-400">Login</button>
          <button className="bg-gradient-to-r text-md from-purple-400 to-pink-600 text-white px-4 py-2 rounded">Talk to Us</button>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="outline-none">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden mt-4  text-xl">
          <a href="#" className="block py-2 text-white hover:text-purple-400">Product</a>
          <a href="#" className="block py-2 text-white hover:text-purple-400">Pricing</a>
          <a href="#" className="block py-2 text-white hover:text-purple-400">Industry</a>
          <a href="#" className="block py-2 text-white hover:text-purple-400">Customer Stories</a>
          <a href="#" className="block py-2 text-white hover:text-purple-400">About</a>
          <a href="#" className="block py-2 text-white hover:text-purple-400">Blog</a>
          <div className="mt-4">
            <button className="block w-full text-left py-2 text-white hover:text-purple-400">Login</button>
            <button className="block  text-left py-2 bg-gradient-to-r from-purple-400 to-pink-600 text-white rounded mt-2 w-auto px-3 ">Talk to Us</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
