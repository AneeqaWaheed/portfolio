import React, { useState } from 'react';
import { Card, Button, Modal, Carousel } from 'react-bootstrap';
import projects from '../data/projectData';
import './CSS/projects.css';

const ProjectModal = ({ show, onHide, project }) => {
    return (
      <Modal show={show} onHide={onHide} size="lg" >
        <Modal.Header closeButton className='bg-dark text-white'>
          <Modal.Title>{project.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          <Carousel >
            {project.images.map((image, index) => (
              <Carousel.Item key={index}  >
                <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className='my-5'>
            <div className="d-flex my-3">
              <h5 className="fw-medium me-4">Project Title: </h5>
              <p className='m-0 fs-5'>{project.name}</p>
            </div>
  
            <h5 className='fw-medium'>Project Details</h5>
            <p style={{ fontSize: '14px' }}>{project.description}</p>
            <div className="d-flex my-3">
              <h5 className="fw-medium me-4">Category: </h5>
              <p className='m-0 ' style={{ fontSize: '16px' }}>{project.category}</p>
            </div>
            <h5 className='fw-medium'>Technology Used</h5>
            <p style={{ fontSize: '16px' }}>{project.technology}</p>
            <h5 className='fw-medium'>GitHub Link</h5>
            <a className='link-dark' href={project.viewLink} target="_blank" rel="noopener noreferrer">
              {project.viewLink}
            </a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  
const truncateDescription = (description, wordCount) => {
    const words = description.split(' ');
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(' ') + '...';
    }
    return description;
  };

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <>
    <div className="my-3 p-5 " id='project'>
        <h2 className="fw-bold text-center mb-5 " style={{ color: 'orange' }}>Projects </h2>
        <div className="projects-wrapper ">
          {projects.map((project, index) => (
            <div className="col-md-4" key={project.id}>
              <Card>
                <Card.Img variant="top" src={project.imageUrl} alt={project.name} />
                <Card.Body>
                  <Card.Title className="fw-bold text-start">{project.name}</Card.Title>
                  <Card.Text className="text-start">
                    {truncateDescription(project.description, 15)}
                  </Card.Text>
                  <div className="d-flex flex-lg-row justify-content-between">
                    <Button  style={{
                        backgroundColor: '#0077b5',
                        color: '#ffffff', 
                    }} onClick={() => handleShowModal(project)}>
                      View Project
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div> 

      {selectedProject && (
        <ProjectModal show={showModal} onHide={handleHideModal} project={selectedProject} />
      )}

    </>
  );
};

export default Projects;
