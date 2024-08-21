import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import './Navbar.css'; 

export default function Navbar() {
  return (
    <header className="navbar-container">
      <div className="navbar">
        <a href="#about" className="navbar-brand">
          UDAY KIRAN
        </a>
        <nav className="nav-menu">
          <ul className="nav-items">
            <li className="nav-item">
              <a href="#projects" className="nav-link">Past Work</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#certifications" className="nav-link">Certifications</a>
            </li>
          </ul>
        </nav>
        <a href="#contact" className="btn-hire-me">
          Hire Me
          <ArrowRightIcon className="arrow-icon" />
        </a>
      </div>
    </header>
  );
}
