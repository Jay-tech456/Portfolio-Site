import React from 'react';
import ProjectCards from './ProjectCards';
// import "../styles/NotableProjects.css"

export default function NotableProjects() {
  return (
    <div>
      <section>
        <div className="containers">
          <ProjectCards 
            image="0000"
            alt="Image of something"
            title="Amazon Wishlist"
            description="Project Description"
          />


            <ProjectCards 
            image="0000"
            alt="Image of something"
            title="Pokemon API"
            description="Project Description"
          />

        <ProjectCards 
            image="0000"
            alt="Image of something"
            title="Countries I Visited"
            description="Project Description"
          />
        </div>
      </section>
    </div>
  );
}
