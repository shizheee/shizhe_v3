import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import TryGPT from './pages/TryGPT';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe'; // Make sure this page exists
import './index.css';
import ThreeDPrinting from './pages/ThreeDPrinting';

export default function App() {
  const [showPopup, setShowPopup] = React.useState(true);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-100">
        {/* Popup */}
        {showPopup && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.35)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                background: 'white',
                borderRadius: '1.5rem',
                boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                padding: '2rem 2.5rem',
                maxWidth: 350,
                width: '90vw',
                textAlign: 'center',
                position: 'relative',
                animation: 'popupFadeIn 0.6s cubic-bezier(.68,-0.55,.27,1.55)',
              }}
            >
              <h2 className="no-header-bar" style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 12, color: 'rgb(216, 49, 49)' }}>
                🚧 Under Development
              </h2>
              <p style={{ color: '#374151', fontSize: '1rem', marginBottom: 18 }}>
                This website is currently being developed.<br />Some features may not be available yet.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                style={{
                  background: '#000',
                  color: 'white',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '0.5rem 1.5rem',
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(55,48,163,0.08)',
                  transition: 'background 0.2s',
                }}
              >
                OK
              </button>
              <style>{`
                @keyframes popupFadeIn {
                  0% { opacity: 0; transform: scale(0.85) translateY(40px); }
                  100% { opacity: 1; transform: scale(1) translateY(0); }
                }
              `}</style>
            </div>
          </div>
        )}

        {/* Layout */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/3dprinting" element={<ThreeDPrinting />} />
          {/* <Route path="/trygpt" element={<TryGPT />} /> */}
          {/* Add more routes if needed */}
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
