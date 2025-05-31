import React from 'react';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-5 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-700">Calvin's Site</h1>
      <ul className="flex gap-6 text-gray-600">
        <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer"><FaHome /> Home</li>
        <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer"><FaInfoCircle /> About</li>
        <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer"><FaEnvelope /> Contact</li>
      </ul>
    </nav>
  );
}
