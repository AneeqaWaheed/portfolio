import React, { useState, useEffect } from 'react';
import './CSS/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faNpm, faNodeJs, faSass, faAws, faPhp, faPython } from '@fortawesome/free-brands-svg-icons';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
const Technologies = () => {
  
  return (
    <>
      <div className="container-fluid h-100 d-flex align-items-center justify-content-center mb-5" id='home'>
      <div className="row m-3">
      <div className="col-md-6 ">
            
              <img
                src="./assets/LANG.PNG"
                alt="Right Column"
                className="img-fluid" // Added class for responsive images
              />
           
          </div>
        
          <div className="col-md-6 ">
            <div>
              <h2 className="h1 fw-bold text-primary" >What I do</h2>
              <p className='fw-medium fs-5 text-secondary'>CRAZY FULL STACK DEVELOPER WHO WANT TO EXPLORE EVERY TECH STACK  

              </p>
              <div>
        <FontAwesomeIcon icon={faJs} size="2x" title="JavaScript" className='fs-1 mx-4 text-body-secondary' />
        <FontAwesomeIcon icon={faReact} size="2x" title="React" className='fs-1 mx-4 text-body-secondary' />
        <FontAwesomeIcon icon={faNpm} size="2x" title="npm" className='fs-1 mx-4 text-body-secondary' />
        <FontAwesomeIcon icon={faNodeJs} size="2x" title="Node.js" className='fs-1 mx-4 text-body-secondary' />
        <FontAwesomeIcon icon={faSass} size="2x" title="Sass" className='fs-1 mx-4 text-body-secondary' />
        <FontAwesomeIcon icon={faAws} size="2x" title="AWS" className='fs-1 mx-4 text-body-secondary'/>
        <FontAwesomeIcon icon={faPython} size="2x" title="Python" className='fs-1 mx-4 text-body-secondary' />
        <FontAwesomeIcon icon={faPhp} size="2x" title="PHP" className='fs-1 mx-4 text-body-secondary' />
        <FontAwesomeIcon icon={faGem} size="2x" title="Ruby" className='fs-1 mx-4 text-body-secondary' />
        <FontAwesomeIcon icon={faCode} size="2x" title="REST API" className='fs-1 mx-4 text-body-secondary' />

       
      </div>
      <div>
      <div className='fw-medium fs-6 text-secondary'>
        <FontAwesomeIcon icon={faBolt} className='me-2' style={{ color: 'orange' }} />
        Develop highly interactive Front-end/User Interfaces for your web and mobile applications
      </div>
      <div className='fw-medium fs-6 text-secondary'>
        <FontAwesomeIcon icon={faBolt} className='me-2' style={{ color: 'orange' }}/>
        Do Backend Development by integrating the APIs with frontend code
      </div>
      <div className='fw-medium fs-6 text-secondary'>
        <FontAwesomeIcon icon={faBolt} className='me-2' style={{ color: 'orange' }} />
        Integration of third-party services such as Firebase
      </div>
    </div>

            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Technologies;
