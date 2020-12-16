import React from "react";
import projects from "./projects.json"
import './Projects.css'



function Projects() {
  return (
    <div>
      <div className="row head-card">
        <div className="col-sm-3 "></div>
        <h5 className="col-sm-3 head-item">Link</h5>
        <h5 className="col-sm-3 head-item">Description</h5>
        <h5 className="col-sm-3 head-item">Tech</h5>
      </div>
      {projects.map(project => (
        <div className="row project-card" key={project.id}>
          <div className="col-sm-3 "><img className="project-img" alt={project.name} src={process.env.PUBLIC_URL + project.image} height="100px" width="200px" /></div>
          <p className="col-sm-3 project-item"><a href={project.link} className="project-link">{project.name}</a></p>
          <p className="col-sm-3 project-item">{project.description}</p>
          <p className="col-sm-3 project-item">{project.tech}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;