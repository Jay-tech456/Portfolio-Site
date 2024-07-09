import React, { useRef } from 'react';
import '../../styles/Education.css';
import EducationContent from './EducationContent';
import useScrollAnimation from '../../Hooks/useScrollAnimation';
import educational from '../../Hooks/Educational';

export default function Education() {
  const educationRef = useRef(null);

  useScrollAnimation(educationRef);

  return (
    <section className="education" id="education" ref={educationRef}>
      <h1>03. My Education Journey</h1>
      <div className="education-row">
        <div className="education-column">
          <div className="education-box">
            {educational.map((edu, index) => (
              <div className="education-content" key={index}>
                <EducationContent
                  year={edu.year}
                  degree={edu.degree}
                  institution = {edu.institution}
                  description={edu.description}
                  coursework = {edu.coursework}
                  extraciriculat= {edu.extracurricular}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
