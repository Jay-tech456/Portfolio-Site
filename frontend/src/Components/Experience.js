import React, { useState } from "react";
import "../styles/Experience.css";

const experiences = {
  kismet: {
    title: "Fullstack Engineer 2024 - present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: [
      "Amazon Web Service (AWS)",
      "Raspberry PI",
      "Kafka/ Zookeeper",
      "LAMP",
      "Prometheus/ Grafana",
      "React.js"
    ]
  },
  glocal: {
    title: "Software Engineer",
    description: "Worked on various projects to improve user experience and backend systems.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "Kubernetes"
    ]
  },
  infosys: {
    title: "Systems Engineer",
    description: "Involved in large-scale projects, ensuring smooth operation and integration.",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Hibernate"
    ]
  },
  freelancer: {
    title: "Fullstack Freelancer",
    description: "Provided fullstack development services for multiple clients.",
    technologies: [
      "Python",
      "Django",
      "PostgreSQL",
      "AWS"
    ]
  },
  ripplematch: {
    title: "Internship",
    description: "Gained hands-on experience with various development tools and methodologies.",
    technologies: [
      "React Native",
      "Redux",
      "Firebase"
    ]
  }
};

export default function Experience() {
  const [currentExperience, setCurrentExperience] = useState(experiences.kismet);

  const handleExperienceClick = (experienceKey) => {
    setCurrentExperience(experiences[experienceKey]);
  };

  return (
    <div>
      <section id="Experience">
        <h1>02. Where Have I Worked</h1>
        <div className="experience-container">
          <div className="sidebar">
            <button onClick={() => handleExperienceClick('kismet')}>Kismet.XYZ</button>
            <button onClick={() => handleExperienceClick('glocal')}>Glocal.io</button>
            <button onClick={() => handleExperienceClick('infosys')}>Infosys Limited</button>
            <button onClick={() => handleExperienceClick('freelancer')}>Fullstack Freelancer</button>
            <button onClick={() => handleExperienceClick('ripplematch')}>RippleMatch Internship</button>
          </div>
          <div className="content">
            <h2>{currentExperience.title}</h2>
            <p>{currentExperience.description}</p>
            <h3>Technologies I have worked with:</h3>
            <ul>
              {currentExperience.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
