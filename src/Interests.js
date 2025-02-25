import React from "react";
import "./interests.css";

export default function Interests() {
  const interests = [
    { name: "Designing", icon: "paint-brush" },
    { name: "Travel", icon: "plane" },
    { name: "Photography", icon: "camera" },
    { name: "Cooking", icon: "utensils" },
  ];

  return (
    <section id="interests-section">
      <div className="section-container">
        <h2 className="section-title">Interests & Hobbies</h2>
        <div className="interests-container">
          {interests.map((interest, index) => (
            <div key={index} className="interest-item">
              <div className="interest-icon">
                <i className={`fa fa-${interest.icon}`}></i>
              </div>
              <div className="interest-name">{interest.name}</div>
            </div>
          ))}
        </div>

        <div className="declaration">
          <h3>Declaration</h3>
          <p>
            I hereby declare that the above-mentioned information is true to the
            best of my knowledge.
          </p>
          <div className="signature">CHUKKA VAMSI</div>
        </div>
      </div>
    </section>
  );
}
