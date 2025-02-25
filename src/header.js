import React, { useEffect, useState } from 'react'; 
import './header.css';
import Contact from './contact';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
      if (window.innerWidth > 500) {
        setMenuOpen(false); // Close menu if resized to larger screen
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <>
    
      {isMobile && (
        <button className="menu-button" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </button>
      )}


      <section id="header-sectino" className={menuOpen ? "show" : "hide"}>
        <div id="images">
          <img src='./https://via.placeholder.com/150' alt="Profile" />
        </div>
        <div id="items">
          <ol className="nav-menu">
            <li onClick={() => scrollToSection('home-section')}>Home</li>
            <li onClick={() => scrollToSection('features-section')}>My Resume</li>
            <li onClick={() => scrollToSection('skills-section')}>Skills</li>
            <li onClick={() => scrollToSection('projects-section')}>Projects</li>
            <li onClick={() => scrollToSection('education-section')}>Education</li>
            <li onClick={() => scrollToSection('certifications-section')}>Certifications</li>
            <li onClick={() => scrollToSection('strengths-section')}>Strengths</li>
            <li onClick={() => scrollToSection('interests-section')}>Interests & Hobbies</li>
          </ol>
        </div>
        <Contact />
      </section>
    </>
  );
}
