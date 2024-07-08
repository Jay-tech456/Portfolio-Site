import React from "react";

export default function EducationContent({ year, degree, description }) {
  return (
    <div className="education-content">
      <div className="content">
        <div className="year">
          <i className='bx bxs-calendar'></i> {year}
        </div>
        <h3>{degree}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
