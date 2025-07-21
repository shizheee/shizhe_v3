import React from 'react';

export default function Button({ children }) {
  return (
    <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition duration-300">
      {children}
    </button>
  );
}
