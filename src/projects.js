import React from 'react';
import './projects.css';

export default function Projects() {
  const projects = [
    {
      title: "Solar Wireless Charging Vehicle",
      duration: "August 2022 – April 2023",
      objective: "To create a sustainable and eco-friendly solution for charging electric vehicles wirelessly using solar energy.",
      contributions: [
        "Designed a solar panel system consisting of 36 cells, each generating 0.33V, to charge a 12V battery.",
        "Integrated a wireless charging module to facilitate contactless energy transfer to vehicles.",
        "Developed a prototype showcasing efficient energy utilization from renewable sources."
      ],
      outcome: "Proposed a green energy solution for EV charging, contributing to advancements in renewable energy technology."
    },
    {
      title: "EDA - Google Play Store",
      duration: "January 2024 – May 2024",
      objective: "To analyze Google Play Store data and uncover insights that help understand app performance metrics.",
      contributions: [
        "Conducted data cleaning to handle missing values, duplicate entries, and inconsistent formats.",
        "Performed statistical analysis to identify patterns in user ratings, pricing models, and download counts.",
        "Visualized relationships between app categories and user engagement using Python libraries like Matplotlib and Seaborn."
      ],
      outcome: "Provided actionable insights into app monetization strategies and popularity trends."
    }
  ];

  return (
    <section id="projects-section">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-duration">{project.duration}</div>
              </div>
              <div className="project-content">
                <div className="project-section">
                  <h4>Objective:</h4>
                  <p>{project.objective}</p>
                </div>
                <div className="project-section">
                  <h4>Key Contributions:</h4>
                  <ul>
                    {project.contributions.map((contribution, idx) => (
                      <li key={idx}>{contribution}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-section">
                  <h4>Outcome:</h4>
                  <p>{project.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}