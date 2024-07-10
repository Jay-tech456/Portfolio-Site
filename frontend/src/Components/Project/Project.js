import React from "react";
import "../../styles/Project.css";
import ProjectContents from "./ProjectContents";
import OpenD from "../Images/OpenD.png"
import ProjectsInfo from "../../Hooks/ProjectInfo";

export default function Project() {
    return (
        <div>
            <section id="Project">
                <h1 className="Project">0.3 Projects I Have Made</h1>
                {ProjectsInfo.map((project, index) => (
                    <ProjectContents
                        key={index}
                        title={project.title}
                        imageUrl={project.imageUrl}
                        description={project.description}
                        toolStack={project.toolStack}
                        floatDirection={index % 2 === 0 ? 'right' : 'left'}
                    />
                ))}
            </section>
        </div>
    );
}
