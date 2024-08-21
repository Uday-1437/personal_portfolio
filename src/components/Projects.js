import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import './Project.css';

const ProjectCard = ({ project }) => (
  <div className="column" key={project.image}>
    <a href={project.link} className="project-link">
      <div className="card">
        <div className="card-img-container">
          <div>
            <img
              src={project.image}
              className="card-img"
              alt={project.title}
            />
            <div className="card-overlay">
              <h5 className="subtitle">{project.subtitle}</h5>
              <h4 className="title">{project.title}</h4>
              <p className="text">{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
);

export default function Projects() {
  const rows = Array.from({ length: Math.ceil(projects.length / 2) }, (_, i) =>
    projects.slice(i * 2, i * 2 + 2)
  );

  return (
    <section id="projects" className="projects-section">
      <div className="jam">
        <div className="header">
          <CodeIcon className="icon" />
          <h1>Apps I've Built</h1>
          <p className="description">
            Explore the diverse range of applications I've developed, each reflecting my dedication to creating functional, user-centric solutions. These projects span various industries and challenges, showcasing my ability to adapt and innovate.
          </p>
        </div>

        {rows.map((row, index) => (
          <div className="row" key={index}>
            {row.map(project => (
              <ProjectCard key={project.image} project={project} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
