  'use client';

import React from 'react';
import Navbar from './components/Navbar'; // Make sure the Navbar component file is in the same directory or adjust the import path.

const Page = () => {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div className='bg-gray-800'>
      <div className="h-screen flex flex-col">
  
  <h1 className="bg-red-500 flex-grow p-12 text-center text-3xl font-extrabold text-white">
    Happiness is Homemade
  </h1>

  <div className="flex flex-grow">
    <h1 className="bg-green-500 flex-1 p-12 text-center text-3xl font-extrabold text-white">
    Happiness is Homemade
    </h1>
    <h1 className="bg-blue-500 flex-1 p-12 text-center text-3xl font-extrabold text-white">
    Happiness is Homemade
    </h1>
  </div>
</div>
</div>
    
      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4 mt-10  p-7 text-center">
        <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default Page
