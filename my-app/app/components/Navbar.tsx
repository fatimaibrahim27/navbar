'use client';

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold">My App</h1>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="hover:text-blue-400 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-blue-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-blue-400 transition duration-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-blue-400 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Burger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-700 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out shadow-lg z-50`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="text-white text-2xl p-4"
        >
          ✕
        </button>
        <ul className="mt-10 space-y-6 text-center">
          <li>
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium hover:text-blue-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium hover:text-blue-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium hover:text-blue-400"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium hover:text-blue-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
