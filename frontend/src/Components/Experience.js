import React, { useState, useEffect } from "react";
import "../styles/Experience.css";
import experienceData from "../Hooks/Experience";

export default function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [currentExperience, setCurrentExperience] = useState(null);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fetchExperienceData = async () => {
      try {
        const response = await experienceData();
          setExperiences(response);

            // The first experience should be Kismet
          setCurrentExperience(response[0]);
        } catch (e) {
        console.log("There is an error that occurred: ", e);
      }
    };

    fetchExperienceData();
  }, []);

  const handleExperienceClick = (experienceId) => {
    const selectedExperience = experiences.find(exp => exp._id === experienceId);
    if (selectedExperience === currentExperience) {
      return;
    }
    setFade(true);                
    setTimeout(() => {
      setCurrentExperience(selectedExperience);
      setFade(false);
    }, 200);
  };

  return (
    <div>
      <section id="Experience">
        <h1>02. My Work Adventure</h1>
        <div className="experience-container">
          <div className="sidebar">
            {experiences.map(exp => (
              <button key={exp._id} onClick={() => handleExperienceClick(exp._id)}>
                {exp.company}
              </button>
            ))}
          </div>
          {currentExperience && (
            <div className={`content ${fade ? 'fade-out' : 'fade-in'}`}>
              
              <h3 className="date">{currentExperience.date}</h3>
              <h2>{currentExperience.title}</h2>
              <ul className="Description">
                {currentExperience.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              {currentExperience.technologies && (
                <>
                  <h3 className = "work-stack">Technologies I have worked with:</h3>
                  <ul className="tools">
                    {currentExperience.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
