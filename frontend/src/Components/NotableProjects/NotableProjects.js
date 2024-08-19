import React, { useState, useEffect } from 'react';
import ProjectCards from './ProjectCards';
import "../../styles/NotableProjects.css"; 
import fetchNotableProjects from '../../Hooks/NotableProjects';

function NotableProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNotableProjects();
      setProjects(data);
    };
    fetchData();
  }, []);

  return (
    <section id="NotableProject" classname = "NotableProject">
      <h1 className='notable-project-header'>Research is Fun</h1>
      <div className="notable-projects">
        {projects.map((data, index) => (
          <ProjectCards
            key={index}
            image={data.image}
            alt={data.alt}
            title={data.title}
            description={data.description}
            githubLink={data.githubLink}
            projectLink={data.projectLink}
            authors={data.authors}
          />
        ))}
      </div>
    </section>
  );
}

export default NotableProjects;
