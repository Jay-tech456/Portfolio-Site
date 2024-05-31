import React from 'react';
import ProjectCards from './ProjectCards';

export default function NotableProjects() {
  return (
    <div>
      <section>
        <div className="containers">
          <ProjectCards 
            image="0000"
            alt="Image of something"
            title="Title"
            description="Project Description"
          />


            <ProjectCards 
            image="0000"
            alt="Image of something"
            title="Title"
            description="Project Description"
          />

        <ProjectCards 
            image="0000"
            alt="Image of something"
            title="Title"
            description="Project Description"
          />
        </div>
      </section>
    </div>
  );
}
