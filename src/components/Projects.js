import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import './Project.css';

export default function Projects() {
  // Splitting projects into rows of 2 columns each
  const rows = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2));
  }

  return (
    <section id="projects" className="projects-section">
      <div className="jam">
        <div className="header">
          <CodeIcon className="icon" />
          <h1>Apps I've Built</h1>
          <p className="description">
          Explore the diverse range of applications I've developed, each reflecting my dedication to creating functional, user-centric solutions. 
          These projects span various industries and challenges, showcasing my ability to adapt and innovate.
          </p>
        </div>
        {/* Rendering rows */}
        {rows.map((row, index) => (
          <div className="row" key={index}>
            {row.map((project) => (
              <div className="column" key={project.image}>
                <a href={project.link} className="project-link">
                  <div className="card">
                    <img
                      src={project.image}
                      className="card-img"
                      alt="gallery"
                    />
                    <div className="card-overlay">
                      <h5 className="subtitle">{project.subtitle}</h5>
                      <h4 className="title">{project.title}</h4>
                      <p className="text">{project.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
