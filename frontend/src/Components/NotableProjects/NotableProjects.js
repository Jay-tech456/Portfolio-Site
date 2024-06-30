import React from 'react';
import ProjectCards from './ProjectCards';
import "../../styles/NotableProjects.css"; 
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function NotableProjects() {
  return (
    <div className="notable-projects-container">
      <section>
        <h1>Other Notable Projects</h1>
        <div className="project-cards-container">
          <ProjectCards 

            image="0000"
            alt="Image of something"
            title="Amazon Wishlist"
            description="Project Description"
            link="https://github.com/Jay-tech456/Countries_Visited/blob/main/Images/screenshot2.png"
            className="ProjectCards" // Ensure each ProjectCards component has className="ProjectCards"
          />

          <ProjectCards 
            image="0000"
            alt="Image of something"
            title="Pokemon API"
            description="Project Description"
            className="ProjectCards" // Ensure each ProjectCards component has className="ProjectCards"
          />

          <ProjectCards 
            image="https://github.com/Jay-tech456/Countries_Visited/blob/main/Images/screenshot2.png?raw=true"
            alt="Image of something"
            title="Countries I Visited"
            description="Project Description"
            className="ProjectCards" // Ensure each ProjectCards component has className="ProjectCards"
          />
        </div>
      </section>
    </div>
  );
}
