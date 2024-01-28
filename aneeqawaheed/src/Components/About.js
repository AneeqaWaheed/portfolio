// YourComponent.jsx

import React from 'react';
import './CSS/about.css';

const YourComponent = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column h-100 my-4">
      <h1 className="text-center">About</h1>
      <div className="row mt-4">
        {/* Skills Section */}
        <div className="section skills-section">
          <h2 className="fw-medium text-center ">Skills</h2>
          <p className='text-body-secondary'>
          I'm a dedicated web and app developer with a passion for coding.
            As a tech enthusiast, I specialize in a variety of technologies, including:
            ReactJS
            NodeJS
            ExpressJS
            MongoDB
            Flutter
            Bootstrap
            Laravel
            and many more.
            </p>
        </div>

        {/* Journey Section */}
        <div className="section journey-section">
          <h2 className="fw-medium text-center">My Journey</h2>
          <p className='text-body-secondary'> My journey in the world of development is fueled by a genuine love for creating digital solutions that make a difference. Whether it's crafting responsive web interfaces or building robust mobile applications, I bring a creative and solution-driven approach to every project.</p>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
