import React, { useRef, useEffect, useState } from "react";
import "../../styles/Project.css";
import ProjectContents from "./ProjectContents";
import projectData from "../../Hooks/ProjectInfo";
import useScrollAnimationFade from "../../Hooks/useScrollAnimationFade.js";

export default function Project() {
  const projectRef = useRef(null);
  useScrollAnimationFade(projectRef);

  const [projectDataArr, setProjectDataArr] = useState([]);
  const [showProjects, setShowProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const result = await projectData();
        console.log(result); // Add console log here
        setProjectDataArr(result || []);
      } catch (e) {
        console.log("There is an Error: ", e);
        setProjectDataArr([]);
      }
    };

    fetchProjectData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={projectRef}>
      <section id="project" className="project">
        <h1>0.3 Stuff I Built</h1>
        {isMobile && (
          <button
            className="show-projects-button"
            onClick={() => setShowProjects(!showProjects)}
          >
            {showProjects ? "Hide Projects" : "Show Projects"}
          </button>
        )}
        {(showProjects || !isMobile) && (
          projectDataArr.length > 0 ? (
            projectDataArr.map((project, index) => (
              <div className={`project-content show`} key={index}>
                <ProjectContents
                  title={project.title}
                  imageUrl={project.imageUrl}
                  description={project.description}
                  toolStack={project.toolStack}
                  floatDirection={index % 2 === 0 ? "right" : "left"}
                />
              </div>
            ))
          ) : (
            <p>No projects available.</p>
          )
        )}
      </section>
    </div>
  );
}
