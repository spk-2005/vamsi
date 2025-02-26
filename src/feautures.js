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
        <div className="resume-container">
          <iframe
            src={embedLink}
            title="Resume"
            className="resume-iframe"
          ></iframe>
          <a href={downloadLink} className="download-icon" aria-label="Download Resume">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  ); 
}