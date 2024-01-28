import React, { useState, useEffect } from 'react';
import './CSS/main.css';
import './CSS/image.css';
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
      <div className="container-fluid h-100 d-flex align-items-center justify-content-center mb-5">
        <div className="row m-3">
          <div className="col-md-6 d-flex p-3 align-items-center justify-content-center">
            <div>
              <h2 className="h1 fw-bold" style={{ color: 'rgba(30, 30, 30, 0.85)' }}>Welcome to {currentText}</h2>
              <p className='fw-mediums text-secondary'>I'm Aneeqa Waheed, 
                Here you'll discover a collection of intriguing projects that reflect my dedication to the coding world. Each project is accompanied by snapshots, offering a visual journey through my development process.


              </p>
            </div>
          </div>

          <div className="col-md-6 ">
            <div className="image-container">
              <img
                src="./assets/1.jpg"
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
