import React, { useState } from "react";
import "../styles/Experience.css";

const experiences = {
  kismet: {
    title: "Fullstack Engineer March 2024 - Present",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ],
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
    description: [
      "Worked on various projects to improve user experience and backend systems."
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "Kubernetes"
    ]
  },
  infosys: {
    title: "Associate Software Engineer Jun 2022 - Aug 2023",
    description: [
      "Engineered various high-speed network protocols using SOAP, GraphQL, RESTful, and gRPC APIs using an efficient Java-based Object Relational Mapping (ORM) and Object-Oriented Programming (OOPS) techniques for various modern SaaS product at scale. Achieved a consistent 15% reduction in latency and enhanced scalability for modern core services integrating SQL, H2, and NoSQL databases.", 

      "Developed the Core infrastructure utilizing advanced system design patterns including Model-View-Controller (MVC), Model-View-ViewModel (MVVM), and Model-View-Presenter (MVP). Leveraged Core Java, Spring Boot, Spring Cloud, and DB2 to create robust and efficient back-end TSL, TCP, and various web services resulting in a 20% increase in application reliability throughout the SDLC.",

      "Utilized Selenium with Python, Cucumber, Jenkins, and Page Object Model (POM) for automated UI testing, enabling efficient and reliable regression testing; while employing Test-Driven Development (TDD), and Behavioral-Driven Development (BDD) principles, leading to a 30% increase in test coverage, consistently discovering 5 defects, and improved software quality during application’s sprint iterations"
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Hibernate"
    ]
  },
  freelancer: {
    title: "Fullstack Freelancer ",
    description: [
      "Engineered the development of highly responsive and dynamic user interfaces for web applications using ReactJS, NodeJS, JavaScript, elevating user experience and engagement metrics by 30%.", 
      "Engineered and optimized numerous high-impact web applications for small enterprises, employing a versatile toolkit across REST, Microservices, Monolithic, and Full Stack architectures; achieved a 25% improvement in functionality, specifically elevating the performance of custom rendering engines."
    ],
    technologies: [
      "Python",
      "Django",
      "PostgreSQL",
      "AWS"
    ]
  },
  ripplematch: {
    title: "Leadership Internship Jan 2022 - May 2022",
    description: [
      "Selected from a pool of thousands of candidates to work closely with leaders of RippleMatch’s Leadership Team.",
      "Leveraged various growth strategies and tools including social media, email marketing, presentations, and peer and faculty member networking to grow the user base and awareness on campus.",
      "Strategically assessed growth and performance metrics to improve, change and/or help design new growth strategies."
    ],
    technologies: [
      "Communication",
      "Presentation Skills",
      "Digital Marketing", 
      "Public Speaking"
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
        <h1 >02. Where Have I Worked</h1>
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
            <ul className="Description">
              {currentExperience.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
            <h3>Technologies I have worked with:</h3>
            <ul className = "tools">
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
