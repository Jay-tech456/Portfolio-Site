import React, { useRef, useEffect, useState } from "react";
import "../../styles/Project.css";
import ProjectContents from "./ProjectContents";
import projectData from "../../Hooks/ProjectInfo";
import useScrollAnimationFade from "../../Hooks/useScrollAnimationFade.js"; 


export default function Project() {
  const projectRef = useRef(null);
  useScrollAnimationFade(projectRef);

  const [projectDataArr, setProjectDataArr] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const result = await projectData();
        setProjectDataArr(result || []);
        console.log(result); // Log the result instead of projectDataArr
      } catch (e) {
        console.log("There is an Error: ", e);
        setProjectDataArr([]); // Set an empty array on error
      }
    };

    fetchProjectData();
  }, []);

  return (
    <div ref={projectRef}>
      <section id="Project">
        <h1 className="Project">0.3 Stuff I Built</h1>
        {projectDataArr.length > 0 ? (
          projectDataArr.map((project, index) => (
            <div className="project-content" key={index}>
              <ProjectContents
                title={project.title}
                imageUrl={project.imageUrl}
                description={project.description}
                toolStack={project.toolStack}
                floatDirection={index % 2 === 0 ? 'right' : 'left'}
              />
            </div>
          ))
        ) : (
          <p>No projects available.</p>
        )}
      </section>
    </div>
  );
}
