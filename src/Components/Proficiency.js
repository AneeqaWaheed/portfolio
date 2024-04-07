import React from 'react';
import './CSS/main.css';
import './CSS/proficiency.css';
const Technologies = () => {
    const proficiencyData = [
        { category: 'Frontend/Design', percentage: 80 },
        { category: 'Backend', percentage: 70 },
        { category: 'Programming', percentage: 65 }
      ];
      
  return (
    <>
      <div className="container-fluid h-100 d-flex align-items-center justify-content-center mb-5" id='home'>
      <div className="row m-3">
    
        
          <div className="col-md-6 ">
        
          <h2 className="h1 fw-bold text-primary" >Proficiency</h2>
      {proficiencyData.map((item, index) => (
        <div key={index} className="proficiency-item">
          <p>{item.category}</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${item.percentage}%` }}></div>
          </div>
        </div>
      ))}
    
          </div>
          <div className="col-md-6 ">
            
            <img
              src="./assets/Proficiency.PNG"
              alt="Right Column"
              className="img-fluid" // Added class for responsive images
              style={{ width: '800px', height: 'auto' }}
            />
         
        </div>
          
        </div>
      </div>
    </>
  );
};

export default Technologies;
