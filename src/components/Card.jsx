import React from 'react';

export default function Card({ children, className }) {
  return (
    <div className={`bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 ${className || ''}`}>
      {children}
    </div>
  );
}
