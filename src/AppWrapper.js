import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'; // Import brands package
import About from './About';
import Skills from './Skills'; 
import ResumePDF from './Resume R.pdf';
import myImage from './myImage.png';

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const imageRef = useRef(null); // Add a ref for the image container if needed
  const navigate = useNavigate();

  const handleScrollDownToAbout = () => {
    const scrollOffset = aboutRef.current?.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: scrollOffset,
      behavior: 'smooth',
    });
  };

  const handleScrollDownToSkills = () => {
    const scrollOffset = skillsRef.current?.getBoundingClientRect().top + window.scrollY;
    if (skillsRef.current) {
      window.scrollTo({
        top: scrollOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollDownToContact = () => {
    const scrollOffset = contactRef.current?.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: scrollOffset,
      behavior: 'smooth',
    });
  };

  const navigateToContacts = () => {
    navigate('/contacts');
  };

  return (
    <div className="app-container">
      <div className="container">
        <div className="content">
          <div className="header">
            <h1>I'm Doddipatla Rakesh.</h1>
            <div className="image-container">
              <img src={myImage} alt="Description of my image" className="my-image" />
            </div>
          </div>
          <div className="social-icons">
            <a href="+919849066299" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
            </a>
            <a href="mailto:21pa1a1227@vishnu.edu.in" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/doddipatla-rakesh-01b84423a/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={fab.faLinkedin} aria-hidden="true" />
            </a>
            <a href="https://github.com/D-RAKESH-A1227" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={fab.faInstagram} aria-hidden="true" />
            </a>
          </div>
          <div className="buttons">
            <button className="resume-button" onClick={() => window.open(ResumePDF)}>Resume <FontAwesomeIcon icon={faDownload} aria-hidden="true" /></button>
            <button className="contact-button" onClick={handleScrollDownToContact}>Contact</button>
            <button className="skill-button" onClick={handleScrollDownToSkills}>Skills</button>
            <button className="project-button" onClick={navigateToContacts}>Project</button>
          </div>
        </div>
        <div className="scroll-down" onClick={handleScrollDownToAbout}>
          <FontAwesomeIcon icon={fab.faChevronDown} aria-hidden="true" />
        </div>
      </div>
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <div className="contact-section" ref={contactRef}>
        <h2>Contact Me</h2>
        <u>21pa1a1227@vishnu.edu.in</u>
        <p><a href="mailto:21pa1a1227@vishnu.edu.in">Send email</a></p>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/doddipatla-rakesh-01b84423a/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <br />
          <a href="https://github.com/D-RAKESH-A1227" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function Contacts() {
  return <h2>Contacts</h2>;
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;