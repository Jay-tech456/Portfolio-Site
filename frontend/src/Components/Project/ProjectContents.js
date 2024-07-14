import React from "react";
import "../../styles/Project.css";
import OpenD from "../Images/OpenD.gif"
import Foodie from "../Images/Foodie.gif"
import OAT from "../Images/OAT.gif"
import Keeper from "../Images/Keeper.gif"
export default function ProjectContents({ title, imageUrl, description, toolStack, floatDirection }) {
    const images = { 
        OpenD: OpenD, 
        Foodie: Foodie, 
        OAT: OAT, 
        Keeper:Keeper
    }

    const finalImageUrl = images[imageUrl] || "No Image Found"
 
    return (
    <div className={`project-container ${floatDirection}`}>
      <div className="project-image">
        <img className="projectImg" src={finalImageUrl} alt="Project" />
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
