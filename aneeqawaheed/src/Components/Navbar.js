import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(30, 30, 30, 0.85)',
        padding: '20px 80px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.06)',
        color: '#ffffff',
      }}
    >
      {/* Left side */}
      <div className="navbar-brand" style={{ width: '40%' }}>
      <a className="nav-link fs-3" href="#" style={{ color: '#ffffff' }}>
                Aneeqa Waheed
              </a>
      </div>

      {/* Right side */}
      <div style={{ width: '60%',
     }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto d-flex justify-content-evenly w-100 ">
            <li className="nav-item active">
              <a className="nav-link" href="#" style={{ color: '#ffffff' }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#ffffff' }}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#ffffff' }}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#ffffff' }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
