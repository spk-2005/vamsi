import { useEffect, useState } from 'react';
import './App.css';
import Certifications from './certifications';
import Education from './education';
import Features from './feautures';
import Header from './header';
import Home from './home';
import Interests from './Interests';
import Projects from './projects';
import Skills from './skills';
import Strengths from './strengths';

function App() {
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const contentArea = document.getElementById("content-area");
    
    const calculateHeight = () => {
      let totalHeight = contentArea.scrollHeight;
      return totalHeight;
    };

    const updateHeight = () => {
      setContentHeight(calculateHeight());
    };

    setTimeout(() => {
      setContentHeight(calculateHeight());
    }, 500);

    window.addEventListener('resize', updateHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  useEffect(() => {
    const numStars = 200;
    const contentArea = document.getElementById('content-area');

    if (!contentArea) return;

    // Remove existing stars
    const existingStars = document.querySelectorAll('.star');
    existingStars.forEach(star => star.remove());

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * contentHeight}px`; // Use full content height
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      star.style.animationDelay = `${Math.random()}s`;
      contentArea.appendChild(star);
    }
  }, [contentHeight]); // Re-run when content height changes
  const scrollToTop = () => {
    const contentArea = document.getElementById('content-area');
    if (contentArea.scrollTop > 0) {
      contentArea.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  

  return (
    <>
      <div id="top" onClick={scrollToTop} title="Back to Top">
        <ion-icon name="arrow-up-outline" className='topbut'></ion-icon>
      </div>
      <section className='app-section'>
        <div className='header'>
          <Header />         
        </div>
        
        <div id='content-area'>
          <Home />
          <Features />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Strengths />
          <Interests />
        </div>
      </section>
    </>
  );
}

export default App;
