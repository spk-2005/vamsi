import { useEffect, useRef, useState } from 'react';
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

// Animation component wrapper
const AnimatedSection = ({ children, animationClass = 'fade-in' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the component enters the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1 // Trigger when 10% of the element is visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className={`animated-section ${isVisible ? animationClass : 'hidden'}`}
    >
      {children}
    </div>
  );
};

function App() {
  useEffect(() => {
    const updateHeight = () => {
      // Your existing code here
    };

    setTimeout(updateHeight, 500);
    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  useEffect(() => {
    const numStars = 300;

    // Remove existing stars to prevent duplication
    document.querySelectorAll('.star').forEach(star => star.remove());

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';

      // Ensure stars appear across the entire page, not just the viewport
      const pageHeight = document.documentElement.scrollHeight;

      star.style.top = `${Math.random() * pageHeight}px`; // Full page height
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      star.style.animationDelay = `${Math.random()}s`;

      document.body.appendChild(star);
    }
  }, []); // Remove contentHeight dependency

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
          <AnimatedSection animationClass="slide-in-right">
            <Home />
          </AnimatedSection>
          <hr/>
          <AnimatedSection animationClass="slide-in-left">
            <Features />
          </AnimatedSection>
          <hr/>
          <AnimatedSection animationClass="fade-in-up">
            <Skills />
          </AnimatedSection>
          <hr/>
          <AnimatedSection animationClass="zoom-in">
            <Projects />
          </AnimatedSection>
          <hr/>
          <AnimatedSection animationClass="slide-in-right">
            <Education />
          </AnimatedSection>
          <hr/>
          <AnimatedSection animationClass="slide-in-left">
            <Certifications />
          </AnimatedSection>
          <hr/>
          <AnimatedSection animationClass="fade-in-up">
            <Strengths />
          </AnimatedSection>
          <hr/>
          <AnimatedSection animationClass="zoom-in">
            <Interests />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

export default App;