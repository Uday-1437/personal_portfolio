import React from 'react';
import { BadgeCheckIcon, ChipIcon} from "@heroicons/react/solid";
import { skills } from '../data';
import './Skills.css'; // Import the CSS file

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="abc">
        <div className="text-center mb-5">
          <ChipIcon className="mb-4" style={{ width: "40px", height: "40px" }} />
          <h1 className="heading">
            Skills &amp; Technologies
          </h1>
          <p className="description">
          I specialize in modern front-end technologies with a strong focus on creating responsive and 
          interactive web applications. Proficient in version control with Git, build tools, and performance optimization techniques. 
        
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill} className="skill-card">
              <BadgeCheckIcon className="icon" style={{ width: "24px", height: "24px" }} />
              <span className="skill-name">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



