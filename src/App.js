import './App.css';
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from './components/Certifications';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <div className="container">
      <Navbar/>
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer/>
    </div>
  );
}


