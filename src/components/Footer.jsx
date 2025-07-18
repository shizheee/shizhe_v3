import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  // Generate a random pastel color for the logo background
  function getRandomPastelColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 85%)`;
  }
  const [logoBg, setLogoBg] = useState(getRandomPastelColor());
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setLogoBg(getRandomPastelColor());
    }, 2500);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <footer className="w-full py-6 mt-12 shadow-inner" style={{ background: '#000' }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-4 gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <img
            src="/logo512-menu.png"
            alt="Logo"
            height="36"
            width="36"
            className="rounded-2xl shadow"
            style={{ borderRadius: '7px', background: logoBg, transition: 'background 0.6s' }}
          />
          <span className="font-bold text-lg tracking-wide m-3" style={{ color: '#fff' }}>shizhe's homepage</span>
        </div>
        {/* Navigation Links */}
        <nav className="flex gap-8 text-sm">
          <Link to="/" style={{ color: '#eebbc3' }} className="hover:underline hover:text-blue-300 transition">Home</Link>
          <Link to="/aboutme" style={{ color: '#eebbc3' }} className="hover:underline hover:text-blue-300 transition m-3">About</Link>
          <a href="mailto:calvin@tanshizhe.com" style={{ color: '#eebbc3' }} className="hover:underline hover:text-blue-300 transition">Contact</a>
        </nav>
        {/* Copyright */}
        <div className="text-xs mt-2 md:mt-0" style={{ color: '#b8c1ec' }}>© 2025 shizhe's homepage. All rights reserved.</div>
      </div>
    </footer>
  );
}
