import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGoogle,faGithub  } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  

  return (
    <footer className="text-dark p-3 border-top bg-light"
    style={{
        // backgroundColor: '#0077b5',
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
       
        <div className='my-4'>
         
          {/* GitHub */}
          <a
            href={`https://github.com/AneeqaWaheed`}
            target="_blank"
            
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className='fs-3 mx-3' style={{ color: 'black' }} />
          </a>
      <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className='fs-3 mx-3' style={{ color: 'orange' }}>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href={`https://www.linkedin.com/in/aneeqa-waheed-84571823b/`}
          target="_blank" rel="noopener noreferrer"className='fs-3 mx-3'>
        <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0077b5' }} />
      </a>
      <a href="mailto:aneeqawaheed19@gmail.com" target="_blank" rel="noopener noreferrer" className='fs-3 mx-3'>
        <FontAwesomeIcon icon={faGoogle} style={{ color: '#d93025' }} />
      </a>
      <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className='fs-3 mx-3'>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </div>
        </div>

    </footer>
  );
};

export default Footer;
