import React, { useState, useEffect } from 'react';
import './CSS/main.css';
import './CSS/image.css';
import DownlaodPdf from './pdf/pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faGoogle  } from '@fortawesome/free-brands-svg-icons';

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        // Reset to start the typing from the beginning
        setCurrentText('');
        setCurrentIndex(0);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text]);

  return (
    <>
      <div className="container-fluid h-100 d-flex align-items-center justify-content-center mb-5" id='home'>
        <div className="row m-3">
          <div className="col-md-6 d-flex p-3 align-items-center justify-content-center">
            <div>
              <h2 className="h1 fw-bold text-primary" style={{ color: 'rgba(30, 30, 30, 0.85)' }}>Welcome to {currentText}</h2>
              <p className='fw-medium fs-5 text-secondary'>I'm Aneeqa Waheed, 
                Here you'll discover a collection of intriguing projects that reflect my dedication to the coding world. Each project is accompanied by snapshots, offering a visual journey through my development process.


              </p>
              <div className='my-4'>
      
              <a
            href={`https://github.com/AneeqaWaheed`}
            target="_blank"
            
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className='fs-1 mx-3' style={{ color: 'black' }} />
          </a>
      <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className='fs-1 mx-3' style={{ color: 'orange' }}>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.linkedin.com/in/aneeqa-waheed-84571823b/" target="_blank" rel="noopener noreferrer"className='fs-1 mx-3'>
        <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0077b5' }} />
      </a>
      <a href="mailto:aneeqawaheed19@gmail.com" target="_blank" rel="noopener noreferrer" className='fs-1 mx-3'>
        <FontAwesomeIcon icon={faGoogle} style={{ color: '#d93025' }} />
      </a>
      <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className='fs-1 mx-3'>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </div>

              <div className='d-flex flex-row me-3'>
              <a href="/contact" className="btn btn-lg btn-primary mx-3">Contact me</a>
      <DownlaodPdf />
    </div>

              

            </div>
          </div>

          <div className="col-md-6 ">
            <div className="image-container">
              <img
                src="./assets/images.jpg"
                alt="Right Column"
                className="img-fluid" // Added class for responsive images
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Typewriter;
