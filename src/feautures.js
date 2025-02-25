import React from 'react';
import './features.css';

export default function Features() {
  const resumeFileId = "1xqAhR9fnhgoTct-dXvqOi_mQRRhgkt0Z"; 
  const embedLink = `https://drive.google.com/file/d/${resumeFileId}/preview`; 
  const downloadLink = `https://drive.google.com/uc?export=download&id=${resumeFileId}`;

  return (
    <section id="features-section">
      <div className="feature-container">
        <h2>My Resume</h2>
        <iframe 
          src={embedLink} 
          title="Resume" 
          className="resume-iframe"
        ></iframe>
        <div className="button-container">
          <a href={embedLink.replace("/preview", "/view")} target="_blank" rel="noopener noreferrer" className="view-btn">
            View Resume
          </a>
          <a href={downloadLink} className="download-btn">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
