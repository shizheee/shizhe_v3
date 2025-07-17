import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Breadcrumb.css';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <div className="aboutme-bg min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 mx-auto">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <span className="breadcrumb-separator">/</span>
            <li className="active">About Me</li>
          </ol>
        </nav>
        <h1 className="text-3xl font-extrabold text-blue-700 mb-4 aboutme-header">About Me</h1>
        <p className="text-gray-700 mb-4" style={{ textAlign: 'justify' }}>
          <span role="img" aria-label="wave">👋</span> Hello, I'm Tan Shi Zhe<br/>
          I'm currently a final-year IT student at TAR UMT with a passion for building, learning, and exploring—both in code and in life.
        </p>
        <h2 className="text-xl font-bold text-blue-700 mb-2 aboutme-header-h2">💼 What I Do</h2>
        <p className="text-gray-700 mb-4" style={{ textAlign: 'justify' }}>
          Interning at Securities Commission Malaysia, contributing to internal system enhancements using technologies like .NET, Outsystems, and Office 365.<br/>
          Previously interned at CarlinkMY focusing on backend and system development.<br/>
          Skilled in Java, Golang, React, MySQL, Docker, and familiar with SDLC practices.
        </p>
        <h2 className="text-xl font-bold text-blue-700 mb-2 aboutme-header-h2">🧠 What I Enjoy</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4" style={{ textAlign: 'justify' }}>
          <li>Solving complex problems with simple code.</li>
          <li>Exploring new technologies and frameworks during my free time.</li>
          <li>Participating in competitions (🏆 CodeCraft Champion, iSpark Finalist).</li>
        </ul>
        <h2 className="text-xl font-bold text-blue-700 mb-2 aboutme-header-h2">📸 Beyond Work</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4" style={{ textAlign: 'justify' }}>
          <li>Amateur photographer capturing everyday moments and landscapes.</li>
          <li>3D modeling enthusiast — I love experimenting with Blender.</li>
          <li>Often found editing videos, building random side projects, or organizing files no one will ever see.</li>
        </ul>
        <h2 className="text-xl font-bold text-blue-700 mb-2 aboutme-header-h2">🛤 Life Philosophy</h2>
        <p className="text-gray-700 mb-4" style={{ textAlign: 'justify' }}>
          “Make it work, make it right, make it fast.”<br/>
          I believe in starting small, iterating quickly, and always leaving things better than I found them.
        </p>
        <h2 className="text-xl font-bold text-blue-700 mb-2 aboutme-header-h2">🔍 Random Facts</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4" style={{ textAlign: 'justify' }}>
          <li>I love local food (Nasi Lemak supremacy <span role="img" aria-label="nasi lemak">🍛</span>).</li>
          <li>Can spend hours tweaking system UIs no one notices.</li>
          <li>Currently helping my girlfriend plan her upskilling journey (ask me about it!).</li>
        </ul>
      </div>
    </div>
  );
}