import React from 'react';
import './home.css';

export default function Home() {
  return (
    <section id="home-section">
      <div className="home-content">
        <h1>Hello,</h1>
        <h1>I'm <span className="name-highlight">Vamsi Chukka</span></h1>
        <h2>
          A passionate <span className="highlight">Web Developer</span> and 
          <span className="highlight">Python Developer</span> dedicated to building innovative and efficient solutions.
        </h2>
        <p>
          With expertise in modern web technologies and Python programming, I specialize in crafting user-friendly, 
          responsive, and scalable applications.
        </p>
      </div>
    </section>
  );
}