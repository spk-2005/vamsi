import React from 'react';
import './certification.css';

export default function Certifications() {
  const certifications = [
    {
      title: "Certification On Data Science– NumPy, Pandas, Matplotlib",
      duration: "02/06/2024 -17/08/2024",
      issuer: "Naresh It Technologies"
    },
    {
      title: "Certification On Python – Python",
      duration: "03/03/2024-10/06/2024",
      issuer: "Naresh It Technologies"
    },
    {
      title: "Certification On Data Analytics and Visualization Job Simulation",
      duration: "06/12/2024",
      issuer: "Accenture Forage"
    },
    {
      title: "Certification On Python and Date Science",
      duration: "25/12/2024",
      issuer: "IBM"
    },
    {
      title: "Certification on Oracle SQL Explorer",
      duration: "05/01/2025",
      issuer: "Oracle"
    },
    {
      title: "Certification on NCC – B cadet",
      duration: "",
      issuer: "VR Siddhartha Engineering College"
    }
  ];

  return (
    <section id="certifications-section">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>
        <div className="certificates-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-icon">
                <i className="fa fa-certificate"></i>
              </div>
              <div className="certificate-content">
                <h3>{cert.title}</h3>
                {cert.duration && <div className="certificate-duration">{cert.duration}</div>}
                <div className="certificate-issuer">{cert.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}