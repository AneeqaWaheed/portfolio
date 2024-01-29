import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
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
        padding: '20px 5px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.06)',
        color: '#ffffff',
      }}
    >
      {/* Left side with logo */}
      <div className="navbar-brand" style={{ width: '40%', display: 'flex', alignItems: 'center' }}>
        <img src="./assets/logo.png" alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
        
        <Link className="nav-link fs-3 text-white" to="/">
        Aneeqa Waheed
        </Link>
      </div>

      {/* Right side */}
      <div style={{ width: '60%' }}>
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
          <ul className="navbar-nav ml-auto d-flex justify-content-evenly w-100">
            <li className="nav-item active">
            
            <AnchorLink  href="#home" offset={() => 10} style={{ textDecoration: 'none' }}>
                    <button className="nav-link text-white">Home</button>
                </AnchorLink>
            </li>
            <li className="nav-item">
         
            <AnchorLink  href="#about-section" offset={() => 10} style={{ textDecoration: 'none' }}>
                    <button className="nav-link text-white">About</button>
                </AnchorLink>
              
            </li>
            <li className="nav-item">
              
            <AnchorLink href="#project" offset={() => 10} style={{ textDecoration: 'none' }}>
  <button className="nav-link text-white">Project</button>
</AnchorLink>

            </li>
            <li className="nav-item">
             
              <Link className="nav-link text-white" to="/contact">
              Contact
                </Link>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
