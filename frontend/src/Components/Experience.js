import React, { useState } from "react";
import "../styles/Experience.css";
import experience from "../Hooks/Experience";

export default function Experience() {
  const [currentExperience, setCurrentExperience] = useState(experience.kismet);

  const handleExperienceClick = (experienceKey) => {
    setCurrentExperience(experience[experienceKey]);
  };

  return (
    <div>
      <section id="Experience">
        <h1 >02. Where Have I Worked</h1>
        <div className="experience-container">
          <div className="sidebar">
            <button onClick={() => handleExperienceClick('kismet')}>Kismet.XYZ</button>
            <button onClick={() => handleExperienceClick('glocal')}>Glocal.io</button>
            <button onClick={() => handleExperienceClick('infosys')}>Infosys Limited</button>
            <button onClick={() => handleExperienceClick('freelancer')}>Fullstack Freelancer</button>
            <button onClick={() => handleExperienceClick('ripplematch')}>RippleMatch Internship</button>
          </div>
          <div className="content">
            <h2>{currentExperience.title}</h2>
            <ul className="Description">
              {currentExperience.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
            <h3>Technologies I have worked with:</h3>
            <ul className = "tools">
              {currentExperience.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
