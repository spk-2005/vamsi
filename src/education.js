import React from 'react';
import './education.css';

export default function Education() {
  const educationItems = [
    {
      degree: "Bachelor Of Technology (B. Tech) – Mechanical",
      duration: "2019-2023",
      institution: "JNTUK/ VR Siddhartha Engineering College",
      grade: "6.09 CGPA"
    },
    {
      degree: "Mechanical Engineering (12th)",
      duration: "2017-2019",
      institution: "Narayana Junior College",
      grade: "9.1 CGPA"
    },
    {
      degree: "10th Class",
      duration: "2016-2017",
      institution: "SSC/ AP Model School",
      grade: "8.7 CGPA"
    }
  ];

  return (
    <section id="education-section">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {educationItems.map((item, index) => (
            <div key={index} className="education-item">
              <div className="education-point"></div>
              <div className="education-content">
                <h3>{item.degree}</h3>
                <div className="education-duration">{item.duration}</div>
                <div className="education-institution">{item.institution}</div>
                <div className="education-grade">{item.grade}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}