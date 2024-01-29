import React, { useState } from 'react';
import { Card, Button, Modal, Carousel } from 'react-bootstrap';
import projects from '../data/projectData';
import './CSS/projects.css';

const ProjectModal = ({ show, onHide, project }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{project.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel>
          {project.images.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>
        <p>{project.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        {/* Add any additional buttons or actions here */}
      </Modal.Footer>
    </Modal>
  );
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
      <div className="my-3 p-5">
        <h2 className="fw-bold text-center mb-5">Trips Packages </h2>
        <div className="projects-wrapper">
          {projects.map((project, index) => (
            <div className="col-md-4" key={project.id}>
              <Card>
                <Card.Img variant="top" src={project.imageUrl} alt={project.name} />
                <Card.Body>
                  <Card.Title className="fw-bold text-start">{project.name}</Card.Title>
                  <Card.Text className="text-start">{project.description}</Card.Text>
                  <div className="d-flex flex-lg-row justify-content-between">
                    <Button variant="primary" onClick={() => handleShowModal(project)}>
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
