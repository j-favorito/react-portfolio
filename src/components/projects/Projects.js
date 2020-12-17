import React from 'react';
import projects from './projects.json';
import './Projects.css';
import {Container,Row,Col} from 'react-bootstrap';



function Projects() {
  return (
    <div>
      <Container>
      <Row className="head-card">
        <Col md="3"></Col>
        <Col md="3" className="head-item">Link</Col>
        <Col md="3" className="head-item">Description</Col>
        <Col md="3" className="head-item">Tech</Col>
      </Row>
      {projects.map(project => (
        <Row className="row project-card" key={project.id}>
          <Col md="3"><img className="project-img" alt={project.name} src={process.env.PUBLIC_URL + project.image} height="100px" width="200px" /></Col>
          <Col md="3" className="project-item"><a href={project.link} className="project-link">{project.name}</a></Col>
          <Col md="3" className="project-item">{project.description}</Col>
          <Col md="3" className="project-item">{project.tech}</Col>
        </Row>
      ))}
      </Container>
    </div>
  );
}

export default Projects;