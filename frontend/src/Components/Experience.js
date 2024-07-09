import React, { useState, useEffect } from "react";
import "../styles/Experience.css";
import experience from "../Hooks/Experience";

export default function Experience() {
  const [currentExperience, setCurrentExperience] = useState(experience.kismet);
  const [fade, setFade] = useState(false);

        // Event Handler for react keypress
  const handleExperienceClick = (experienceKey) => {

      // in case the end user clicks the same button twice
    if(experience[experienceKey] === currentExperience){ 
      return; 
    }
    setFade(true);
    setTimeout(() => {
      setCurrentExperience(experience[experienceKey]);
      setFade(false);
    }, 200);
  };

  return (
    <div>
      <section id="Experience">
        <h1>02. My Work Adventure</h1>
        <div className="experience-container">
          <div className="sidebar">
            <button onClick={() => handleExperienceClick('kismet')}>Kismet.XYZ</button>
            <button onClick={() => handleExperienceClick('glocal')}>Glocal.io</button>
            <button onClick={() => handleExperienceClick('infosys')}>Infosys Limited</button>
            <button onClick={() => handleExperienceClick('freelancer')}>Fullstack Freelancer</button>
            <button onClick={() => handleExperienceClick('ripplematch')}>RippleMatch Internship</button>
          </div>
          <div className={`content ${fade ? 'fade-out' : 'fade-in'}`}>
            <h3 className="date">{currentExperience.date}</h3>
            <h2>{currentExperience.title}</h2>
            <ul className="Description">
              {currentExperience.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
            <h3>Technologies I have worked with:</h3>
            <ul className="tools">
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
