import React, { useEffect, useState } from 'react';
import './header.css';
import Contact from './contact';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 500;
      setIsMobile(mobile);
      
      // Only close menu on resize if we've transitioned from mobile to desktop
      if (!mobile) {
        setMenuOpen(false);
      }
    };
    
    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      if (isMobile) {
        setMenuOpen(false);
      }
    }
  };
  
  
  const navItems = [
    { id: 'home-section', label: 'Home' },
    { id: 'features-section', label: 'My Resume' },
    { id: 'skills-section', label: 'Skills' },
    { id: 'projects-section', label: 'Projects' },
    { id: 'education-section', label: 'Education' },
    { id: 'certifications-section', label: 'Certifications' },
    { id: 'strengths-section', label: 'Strengths' },
    { id: 'interests-section', label: 'Interests & Hobbies' }
  ];

  return (
    <>
      {isMobile && (
        <button 
          className="menu-button" 
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      )}
      
      <section 
        id="header-sectino" 
        className={isMobile ? (menuOpen ? "show" : "hide") : ""}
        aria-hidden={isMobile && !menuOpen}
      >
        <div id="images">
          <img src='https://via.placeholder.com/150' alt="Profile" />
        </div>
        
        <div id="items">
          <ol className="nav-menu">
            {navItems.map((item, index) => (
              <li 
                key={index}
                onClick={() => scrollToSection(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    scrollToSection(item.id);
                  }
                }}
              >
                {item.label}
              </li>
            ))}
          </ol>
        </div>
        
        <Contact />
      </section>
    </>
  );
}