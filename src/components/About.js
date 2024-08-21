import React from 'react';
import './About.css'; // Make sure to create and include a CSS file for the styles

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="bhanu">
        <div className="row">
          <div className="text-section">
            <h1 className="title">
              Hi, I'm Uday.
              <br />I love to build amazing apps.
            </h1>
            <p className="description">
              I’m a front-end developer honing my skills in web development, focusing on building scalable and maintainable code. 
              My projects range from single-page applications to complex web platforms,
              all crafted with a keen eye for detail and a commitment to delivering high-quality work.
            </p>
            <div className="buttons">
              <a href="#contact" className="btn btn-success">
                Work With Me
              </a>
              <a href="#projects" className="btn btn-dark">
                See My Past Work
              </a>
            </div>
          </div>
          <div className="image-section">
            <img
              className="image"
              alt="hero"
              src="https://wallpaper.forfun.com/fetch/15/15f9039c4d0d8f7c6412db3a2d386ed3.jpeg?w=1470&r=0.5625"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
