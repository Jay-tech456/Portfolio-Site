import React from "react";
import "../../styles/Project.css";

export default function ProjectContents({ title, imageUrl, description, toolStack, floatDirection }) {
    return (
        <div className={`project-container ${floatDirection}`}>
            <div className="project-image">
                <img className="projectImg" src={imageUrl} alt="Project" />
            </div>
            <div className="project-info">
                <h3 className="project-title">{title}</h3>
                <div className="project-description">{description}</div>
                <div className="project-toolstack">
                    <strong>Tool-Stack:</strong>
                    <ul>
                        {toolStack.map((tool, index) => (
                            <li key={index}>{tool}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
