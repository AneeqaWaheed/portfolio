import React from 'react';
import { Card, Button } from "react-bootstrap";
import projects from '../data/projectData';
import './CSS/projects.css';
const Projects = () => {
  return (
    <>
      <div className="my-3 p-5">
        <h2 className="fw-bold text-center">Trips Packages</h2>
        <div className="projects-wrapper">
          {projects.map((project, index) => (
            <div className="col-md-4" key={project.id}>
              <Card>
                <Card.Img variant="top" src={project.imageUrl} alt={project.name} />
                <Card.Body>
                  <Card.Title className="fw-bold text-start">{project.name}</Card.Title>
                  <Card.Text className="text-start">{project.description}</Card.Text>
                  <div className="d-flex flex-lg-row justify-content-between">
                    <Button variant="primary">View Project</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
