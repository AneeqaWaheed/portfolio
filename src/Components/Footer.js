import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  

  return (
    <footer className="text-light p-3"
    style={{
        backgroundColor: '#0077b5',
    }}>
      <div className="d-flex justify-content-between align-items-center">
        {/* Left side logo and name */}
        <div className="footer-logo d-flex align-items-center">
          <img src="./assets/logo.png" alt="Logo" width="50" height="50" className="mx-4" />
          <div className="footer-logo d-flex align-items-center">
            <h6 className="m-0">Aneeqa Waheed</h6>
            <p style={{ fontSize: '14px', margin: 0 }}>
              | &copy; 2024 YourWebsite.com. All rights reserved.
            </p>
          </div>
        </div>

        {/* Right side social media links */}
        <div className="footer-social mx-4">
          {/* LinkedIn */}
          <a
            href={`https://www.linkedin.com/in/aneeqa-waheed-84571823b/`}
            target="_blank"
            className="me-3"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ color: 'white', fontSize: '24px' }} />
          </a>
          {/* GitHub */}
          <a
            href={`https://github.com/AneeqaWaheed`}
            target="_blank"
            className="me-3"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} style={{ color: 'white', fontSize: '24px' }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
