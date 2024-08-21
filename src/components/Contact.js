import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="ud">
        <div className="content">
          <div className="map-container">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="map"
              style={{ filter: "opacity(0.7)" }}
              src="https://www.google.com/maps/embed/v1/place?q=btm+layout+stage110th+main&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"/>
          </div>
          <form name="contact" className="contact-form">
            <h2 className="form-title">Get in Touch</h2>
            <p className="form-description">
            I'm always open to discussing new projects, question, want to collaborate, or just want to say hello, 
            feel free to reach out using the form below. 
            </p>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
              />
            </div>
            <button type="submit" className="form-button">Submit</button>
          </form>
        </div>
      </div>
     
    </section>
  );
}
