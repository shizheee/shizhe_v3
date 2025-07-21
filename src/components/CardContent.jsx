import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import './CardContent.css';

export default function Home() {
  return (
    <div className="cardcontent-bg">
      <div className="container mx-auto px-0 md:p-4 md:pt-12">
        <div className="flex flex-col md:flex-row md:space-x-4">
          {/* Profile Card */}
          <div className="w-full md:basis-1/2 md:flex-1 card-animate profile-card">
            <Card>
              <div className="card-inner profile-content text-gray-800 p-4 md:p-0">
                <h1 style={{ color: '#8261d5' }}>
                  Shizhe's Homepage
                </h1>
                <p style={{ textAlign: 'justify' }}>
                  Welcome to my digital corner — a personal homepage where I bring together my journey in technology. Here, you'll find a curated showcase of my background, the technical skills I've honed, the projects that challenged and inspired me, and the milestones that shaped who I am as a developer. This space isn’t just a portfolio; it’s a reflection of my passion for building, learning, and constantly evolving in the world of software development.
                </p>
                <div style={{ marginTop: 12 }}>
                  <Link to="/aboutme" className="text-blue-600 hover:underline font-semibold text-sm">
                    Learn More About Me &gt;
                  </Link>
                </div>
              </div>
            </Card>
          </div>
          {/* Blog Card */}
          <div className="w-full md:basis-1/2 md:flex-1 card-animate blog-card" style={{ background: '#dbeaffff', borderRadius: '1rem' }}>
            <Card>
              <div className="card-inner blog-content text-gray-800 p-4 md:p-0">
                <h1>
                  My Blog
                </h1>
                <p style={{ textAlign: 'justify' }}>
                  Dive deeper into my thoughts, tutorials, and tech explorations on my personal blog. I share coding tips, project breakdowns, and reflections on my learning journey.
                </p>
                <div style={{ marginTop: 12 }}>
                  <a href="https://blog.tanshizhe.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold text-sm">
                    Visit blog.tanshizhe.com &gt;
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
        {/* Skills & Tech Stack */}
        <div className="w-full md:basis-1/2 md:flex-1 card-animate skills-bg md:p-0 mt-4 md:mt-0">
          <Card>
            <div className="card-inner skills-inner-bg p-4 md:p-0">
              <div className="flex justify-center">
                <h2 className="text-xl font-bold mb-2 float-title">
                  Technical Skills
                </h2>
              </div>

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
  );
}
