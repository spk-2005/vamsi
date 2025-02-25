import React from 'react';
import './strengths.css';

export default function Strengths() {
  const strengths = [
    "Leadership", 
    "Critical Thinking", 
    "Strategic Planning", 
    "Team Player", 
    "Communication", 
    "Quick Learner",
    "Enthusiasm to do something new"
  ];

  return (
    <section id="strengths-section">
      <div className="section-container">
        <h2 className="section-title">Strengths</h2>
        <div className="strengths-container">
          {strengths.map((strength, index) => (
            <div key={index} className="strength-item">
              <div className="strength-icon">
                <i className={`fa fa-${getIconForStrength(strength)}`}></i>
              </div>
              <div className="strength-name">{strength}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function getIconForStrength(strength) {
  const strengthIcons = {
    'Leadership': 'users',
    'Critical Thinking': 'brain',
    'Strategic Planning': 'chess',
    'Team Player': 'handshake',
    'Communication': 'comments',
    'Quick Learner': 'bolt',
    'Enthusiasm to do something new': 'lightbulb'
  };

  return strengthIcons[strength] || 'star';
}