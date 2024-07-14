const experience = [
  {
      "_id": "668f299b066f4dd31026a35e",
      "company": "Kismet",
      "title": "Fullstack Engineer",
      "date": "March 2024 - Present",
      "description": [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      ],
      "technologies": [
          "Amazon Web Service (AWS)",
          "Raspberry PI",
          "Kafka/ Zookeeper",
          "LAMP",
          "Prometheus/ Grafana",
          "React.js"
      ]
  },
  {
      "_id": "668f29b9066f4dd31026a35f",
      "company": "Glocal",
      "title": "Software Engineer",
      "date": "September 2023 - May 2024",
      "description": [
          "Joined Glocal on September 15, 2023, as a member of the Backend Development, DevOps, API, and the official facilitator of the Artificial Intelligence team.",
          "Collaborated effectively with fellow software engineers to containerize the application using Docker, enhancing scalability and deployment efficiency."
      ],
      "technologies": [
          "Java",
          "Grails",
          "API",
          "Docker",
          "RAG Chatbot"
      ]
  },
  {
      "_id": "668f29db066f4dd31026a360",
      "company": "Infosys",
      "title": "Associate Software Engineer",
      "date": "June 2022 - August 2023",
      "description": [
          "Engineered various high-speed network protocols using SOAP, GraphQL, RESTful, and gRPC APIs using an efficient Java-based Object Relational Mapping (ORM) and Object-Oriented Programming (OOPS) techniques for various modern SaaS product at scale. Achieved a consistent 15% reduction in latency and enhanced scalability for modern core services integrating SQL, H2, and NoSQL databases.",
          "Developed the Core infrastructure utilizing advanced system design patterns including Model-View-Controller (MVC), Model-View-ViewModel (MVVM), and Model-View-Presenter (MVP). Leveraged Core Java, Spring Boot, Spring Cloud, and DB2 to create robust and efficient back-end TSL, TCP, and various web services resulting in a 20% increase in application reliability throughout the SDLC.",
          "Utilized Selenium with Python, Cucumber, Jenkins, and Page Object Model (POM) for automated UI testing, enabling efficient and reliable regression testing; while employing Test-Driven Development (TDD), and Behavioral-Driven Development (BDD) principles, leading to a 30% increase in test coverage, consistently discovering 5 defects, and improved software quality during application’s sprint iterations"
      ],
      "technologies": [
          "Java",
          "Spring Boot",
          "MySQL",
          "Hibernate"
      ]
  },
  {
      "_id": "668f29fa066f4dd31026a361",
      "company": "Freelancer",
      "title": "Fullstack Freelancer",
      "date": "October 2021 - May 2022",
      "description": [
          "Engineered the development of highly responsive and dynamic user interfaces for web applications using ReactJS, NodeJS, JavaScript, elevating user experience and engagement metrics by 30%.",
          "Engineered and optimized numerous high-impact web applications for small enterprises, employing a versatile toolkit across REST, Microservices, Monolithic, and Full Stack architectures; achieved a 25% improvement in functionality, specifically elevating the performance of custom rendering engines."
      ],
      "technologies": [
          "Python",
          "Django",
          "PostgreSQL",
          "AWS"
      ]
  },
  {
      "_id": "668f2a3a3a42fa64b56dc8d3",
      "company": "RippleMatch",
      "title": "Leadership Internship",
      "date": "January 2022 - May 2022",
      "description": [
          "Selected from a pool of thousands of candidates to work closely with leaders of RippleMatch’s Leadership Team.",
          "Leveraged various growth strategies and tools including social media, email marketing, presentations, and peer and faculty member networking to grow the user base and awareness on campus.",
          "Strategically assessed growth and performance metrics to improve, change and/or help design new growth strategies."
      ],
      "technologies": [
          "Communication",
          "Presentation Skills",
          "Digital Marketing",
          "Public Speaking"
      ]
  }
]


const experienceData = async () => {
  try {
    const response = await fetch(`http://localhost:5001/api/experience`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("Failed to fetch information");
      // in case the server is down, a valeu will be returned either way
      return experience;
    }
  } catch (e) {
    console.log("There is an error: ", e);
    return experience
  }
};

export default experienceData;
