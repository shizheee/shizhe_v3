import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

export default function App() {

  console.log("App component is rendering");
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-100">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
