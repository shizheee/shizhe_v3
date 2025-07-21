
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

export default function Navbar() {
  // Collapse handler
  const handleNavItemClick = () => {
    const collapseEl = document.getElementById('navbarNav');
    const bsCollapse = window.bootstrap.Collapse.getInstance(collapseEl);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          <img
            src="/logo512-menu.png"
            alt="Logo"
            height="40"
            className="bg-white logo-img"
          />
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-1" href="#" onClick={handleNavItemClick}>
                <FaHome /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-1" href="#" onClick={handleNavItemClick}>
                <FaInfoCircle /> About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-1" href="#" onClick={handleNavItemClick}>
                <FaEnvelope /> Contact
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
}
