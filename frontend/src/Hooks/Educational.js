const educational = [
  {
    institution: "San Jose State University",
    year: "Fall 2023 - Spring 2025 (Expected)",
    degree: "Master of Science in Engineering",
    coursework: [
      "Enterprise Software Platform",
      "Emerging Technologies - Cybersecurity",
      "Systems Engineering",
      "Advance Data Mining"
    ]
  },
  {
    institution: "Udemy Bootcamp",
    year: "Winter 2023 - Spring 2024",
    degree: "The Complete 2024 Web Development Bootcamp",
    description: "Engineered various Web 1.0, 2.0, and 3.0 sites using the robust PostgreSQL, Express, React, and Node.js (PERN) stack, showcasing full-stack proficiency."
  },
  {
    institution: "California State University, East Bay",
    year: "Fall 2020 - Spring 2022",
    degree: "Bachelor of Science in Computer Science",
    coursework: [
      "Data Structures & Algorithms",
      "Artificial Intelligence",
      "Database Architecture",
      "Automata & Computation",
      "Analysis of Algorithms"
    ]
  }
];

const EducationalComponent = async () => {
  try {
    const response = await fetch(`http://localhost:5001/api/education`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("Failed to fetch educational info");
      return educational;
    }
  } catch (error) {
    console.error("Error during fetching educational info:", error);
    return educational; 
  }
};

export default EducationalComponent;
