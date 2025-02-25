import React from 'react';
import './skills.css';

export default function Skills() {
  return (
    <section id="skills-section">
      <div className="section-container">
        <h2 className="section-title">Professional Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Software Knowledge</h3>
            <div className="skills-grid">
              {['Python', 'NumPy', 'Pandas', 'HTML', 'CSS', 'JavaScript', 'Matplotlib', 'MySQL', 'Java'].map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-name">{skill}</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}