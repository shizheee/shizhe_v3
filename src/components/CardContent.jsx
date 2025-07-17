import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import './CardContent.css';

export default function Home() {
  return (
    <div className="cardcontent-bg">
      <div className="container mx-auto px-0 md:p-4">
        <div className="flex flex-col md:flex-row md:space-x-4">
          {/* Profile Card */}
          <div className="w-full md:basis-1/2 md:flex-1 card-animate profile-card">
            <Card>
              <div className="card-inner profile-content text-gray-800">
                <h1 style={{ color: '#8261d5' }}>
                  Shizhe's Homepage
                </h1>
                <p style={{ textAlign: 'justify' }}>
                  This personal homepage serves as a central portfolio to showcase my background, technical skills, projects, and achievements.
                </p>
                <div style={{ textAlign: 'right', marginTop: 12 }}>
                  <Link to="/aboutme" className="text-blue-600 hover:underline font-semibold text-sm">
                    Learn More About Me &gt;
                  </Link>
                </div>
              </div>
            </Card>
          </div>
          {/* Skills & Tech Stack */}
          <div className="w-full md:basis-1/2 md:flex-1 card-animate skills-bg">
            <Card>
              <div className="card-inner skills-inner-bg">
                <h2 className="text-xl font-bold mb-2 rainbow-text text-center">
                  Technical Skills
                </h2>
                <div className="tag-cloud">
                  <span className="tag">Java</span>
                  <span className="tag">Go</span>
                  <span className="tag">PHP</span>
                  <span className="tag">Python</span>
                  <span className="tag">C</span>
                  <span className="tag">HTML/CSS</span>
                  <span className="tag">Spring Boot</span>
                  <span className="tag">React.js</span>
                  <span className="tag">Laravel</span>
                  <span className="tag">Docker</span>
                  <span className="tag">Git</span>
                  <span className="tag">CI/CD</span>
                  <span className="tag">MySQL</span>
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">AWS</span>
                  <span className="tag">Office 365</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
