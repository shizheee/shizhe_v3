import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Breadcrumb.css';
import Card from '../components/Card';

export default function ThreeDPrinting() {
  return (
    <div className="aboutme-bg min-h-screen py-8">
      <div className="container mx-auto px-0 md:px-16 pt-8 md:pt-12">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 px-4 py-3 md:px-0 md:py-4 md:bg-transparent rounded-xl bg-white/80"
        >
          <ol className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <span className="breadcrumb-separator">/</span>
            <li className="active">3D Printing</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Services Card */}
          <div className="card-animate md:col-span-2">
            <Card>
              <div className="card-inner md:card-inner-desktop">
                <h2 className="text-xl font-bold mb-4 text-center">🛠️ 3D Printing Services</h2>
                <div className="space-y-4">
                  <ul className="list-none space-y-3">
                    <li className="flex items-start">
                      <div>
                        <strong>Project Prototyping</strong> – Printing casings, gears, mechanical parts for IoT and electronics builds
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div>
                        <strong>Custom Accessories</strong> – Creating unique keychains, stands, organizers, and more
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div>
                        <strong>Spare Part Replacement</strong> – Replacing broken or hard-to-find components
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div>
                        <strong>Gifts & Decorations</strong> – Personalized items for friends and occasions
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Gallery Card */}
          <div className="card-animate">
            <Card>
              <div className="card-inner !p-2 md:!p-6 md:card-inner-desktop">
                <h2 className="text-xl font-bold mb-4 text-center">📸 Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="w-full mb-4">
                    <img 
                      src="/images/3d-prints/a.jpg" 
                      alt="3D Print Example 1" 
                      style={{ width: '100%', maxWidth: '100%' }}
                      className="h-auto aspect-[4/3] object-cover rounded-lg shadow-sm hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="w-full mb-4">
                    <img 
                      src="/images/3d-prints/b.jpg" 
                      alt="3D Print Example 2" 
                      style={{ width: '100%', maxWidth: '100%' }}
                      className="h-auto aspect-[4/3] object-cover rounded-lg shadow-sm hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="w-full mb-4">
                    <img 
                      src="/images/3d-prints/c.jpg" 
                      alt="3D Print Example 3" 
                      style={{ width: '100%', maxWidth: '100%' }}
                      className="h-auto aspect-[4/3] object-cover rounded-lg shadow-sm hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="w-full mb-4">
                    <img 
                      src="/images/3d-prints/d.jpg" 
                      alt="3D Print Example 3" 
                      style={{ width: '100%', maxWidth: '100%' }}
                      className="h-auto aspect-[4/3] object-cover rounded-lg shadow-sm hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>


          {/* Videos Card */}
          <div className="card-animate">
            <Card>
              <div className="card-inner md:card-inner-desktop">
                <h2 className="text-xl font-bold mb-4 text-center">🎬 Videos</h2>
                <div className="rounded-lg shadow-sm overflow-hidden">
                  <video 
                    style={{ width: '100%', height: 'auto' }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto"
                    preload="metadata"
                  >
                    <source src="/videos/3d-prints/a.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Card */}
          <div className="card-animate md:col-span-2">
            <Card>
              <div className="card-inner md:card-inner-desktop">
                <h2 className="text-xl font-bold mb-4 text-center">Got a Question?</h2>
                <p className="text-center mb-6">
                  Have questions or requests? I'm open to collaboration, sharing advice, or helping you print something unique.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold mb-2 text-center">👉 Inquiry Topics</h3>
                    <ul className="space-y-2">
                      <li>💵 Pricing / Quotation</li>
                      <li>🧪 Sample Request</li>
                      <li>📦 Print Specifications</li>
                      <li>🧠 Design Assistance</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-center">📬 Contact Me</h3>
                    <div className="flex flex-col items-center space-y-2">
                      <a href="mailto:calvin@tanshizhe.com" className="text-pink-600 hover:underline">calvin@tanshizhe.com</a>
                      {/* <a href="#" className="text-pink-600 hover:underline">Contact </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
