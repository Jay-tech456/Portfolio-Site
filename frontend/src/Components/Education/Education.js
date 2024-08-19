import React, { useRef, useEffect, useState } from 'react';
import '../../styles/Education.css';
import EducationContent from './EducationContent';
import useScrollAnimation from '../../Hooks/useScrollAnimation';
import EducationalComponent from '../../Hooks/Educational';

export default function Education() {
  const educationRef = useRef(null);

  useScrollAnimation(educationRef);

  const [educationData, setEducationData] = useState([]); // Initialize as an empty array
  const [showEducation, setShowEducation] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        const result = await EducationalComponent();
        // console.log("Fetched education data:", result); 
        setEducationData(result || []);
      } catch (e) {
        // console.log("Error in UseEffect", e);
        setEducationData([]);
      }
    };

    fetchEducationData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 430);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="education" id="education" ref={educationRef}>
      <h1>03. My Education Journey</h1>
      {(isSmallScreen || showEducation) && ( // Adjust logic to ensure visibility
        <button
          className="toggle-button"
          onClick={() => {
            setShowEducation(prev => !prev);
            // console.log("clicked");
          }}
        >
          {showEducation ? 'Hide Education' : 'Show Education'}
        </button>
      )}
      {(showEducation || !isSmallScreen) && ( // Ensure content shows on large screens
        <div className="education-row">
          <div className="education-column">
            <div className="education-box">
              {educationData.length > 0 ? (
                educationData.map((edu, index) => (
                  <div className="education-content" key={index}>
                    <EducationContent
                      year={edu.year}
                      degree={edu.degree}
                      institution={edu.institution}
                      description={edu.description}
                      coursework={edu.coursework}
                      extracurricular={edu.extracurricular}
                    />
                  </div>
                ))
              ) : (
                <p>No education data available</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
