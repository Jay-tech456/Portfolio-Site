import React from "react";

export default function EducationContent({ year, degree, institution, description, coursework, extracurricular }) {
  return (
    <div className="education-content">
      <div className="content">
        <div className="year">
          <i className='bx bxs-calendar'></i> {year}
        </div>
        <h3>{degree} - {institution}</h3>
        {description && <p>{description}</p>}
        {coursework && (
          <div>
            <h4>Coursework:</h4>
            <ul className="coursework">
              {coursework.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        )}
        {extracurricular && (
          <div>
            <h4>Extracurricular:</h4>
            <p>{extracurricular}</p>
          </div>
        )}
      </div>
    </div>
  );
}
