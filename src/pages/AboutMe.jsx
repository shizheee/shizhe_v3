import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import '../components/Breadcrumb.css';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <div className="aboutme-bg min-h-screen py-8">
      <div className="container mx-auto px-0 md:px-16 pt-8 md:pt-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 px-4 py-3 md:px-0 md:py-4 md:bg-transparent rounded-xl bg-white/80">
          <ol className="breadcrumb">
            <li><Link to="/">Home</Link></li>
            <span className="breadcrumb-separator">/</span>
            <li className="active">About Me</li>
          </ol>
        </nav>
        
        {/* Grid layout for cards - 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-animate">
            <Card>
              <div className="card-inner md:card-inner-desktop p-4">
                <h2 className="text-xl font-bold mb-2 text-center float-title">👋 About Me</h2>
                <p style={{ textAlign: 'justify' }}>
                  Hello, I'm Tan Shi Zhe<br/>
                  I'm currently a final-year IT student at TAR UMT with a passion for building, learning, and exploring—both in code and in life.
                </p>
              </div>
            </Card>
          </div>
          <div className="card-animate">
            <Card>
              <div className="card-inner md:card-inner-desktop p-4">
                <h2 className="text-xl font-bold mb-2 text-center">💼 What I Do</h2>
                <p style={{ textAlign: 'justify' }}>
                  Interning at Securities Commission Malaysia, contributing to internal system enhancements using technologies like .NET, Outsystems, and Office 365.<br/>
                  Previously interned at CarlinkMY focusing on backend and system development.<br/>
                  Skilled in Java, Golang, React, MySQL, Docker, and familiar with SDLC practices.
                </p>
              </div>
            </Card>
          </div>
          <div className="card-animate">
            <Card>
              <div className="card-inner md:card-inner-desktop p-4">
                <h2 className="text-xl font-bold mb-2 text-center">🧠 What I Enjoy</h2>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Solving complex problems with simple code.</li>
                  <li>Exploring new technologies and frameworks during my free time.</li>
                  <li>Participating in competitions (🏆 CodeCraft Champion, iSpark Finalist).</li>
                </ul>
              </div>
            </Card>
          </div>
          <div className="card-animate">
            <Card>
              <div className="card-inner md:card-inner-desktop p-4">
                <h2 className="text-xl font-bold mb-2 text-center">📸 Beyond Work</h2>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Amateur photographer capturing everyday moments and landscapes.</li>
                  <li>3D modeling enthusiast — I love experimenting with Blender.</li>
                  <li>Often found editing videos, building random side projects, or organizing files no one will ever see.</li>
                </ul>
              </div>
            </Card>
          </div>
          <div className="card-animate">
            <Card>
              <div className="card-inner md:card-inner-desktop p-4">
                <h2 className="text-xl font-bold mb-2 text-center">🛤 Life Philosophy</h2>
                <p style={{ textAlign: 'justify' }}>
                  "Make it work, make it right, make it fast."<br/>
                  I believe in starting small, iterating quickly, and always leaving things better than I found them.
                </p>
              </div>
            </Card>
          </div>
          <div className="card-animate">
            <Card>
              <div className="card-inner md:card-inner-desktop p-4">
                <h2 className="text-xl font-bold mb-2 text-center">🔍 Random Facts</h2>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>I love local food (Nasi Lemak supremacy <span role="img" aria-label="nasi lemak">🍛</span>).</li>
                  <li>Can spend hours tweaking system UIs no one notices.</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}