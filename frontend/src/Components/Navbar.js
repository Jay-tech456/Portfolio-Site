import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import Logo from "./Images/MPLogo.png";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="navbar-container">
        <div className="logo" > 
      <span className="animate" style={{ "--i": 1 }}>
        <img className = "logo-image"src={Logo} alt="Logo" />
      </span>
      </div>

      <div className="bx bx-menu" >
        <span className="animate" style={{ "--i": 2 }}></span>
      </div>

      <nav className="navbar">

        <a
          href="#about"
          className={activeSection === "home" ? "active" : ""}
          onClick={() => handleClick("about")}
        >
          About
        </a>
        <a
          href="#Experience"
          className={activeSection === "Experience" ? "active" : ""}
          onClick={() => handleClick("experience")}
        >
          Experience
        </a>
        <a
          href="#education"
          className={activeSection === "education" ? "active" : ""}
          onClick={() => handleClick("education")}
        >
          Education
        </a>
        <a
          href="#project"
          className={activeSection === "project" ? "active" : ""}
          onClick={() => handleClick("project")}
        >
          Projects
        </a>
        <a
          href="#resume"
          className={`Resume ${activeSection === "resume" ? "active" : ""}`}
          onClick={() => handleClick("resume")}
        >
          Resume
          <span className="animate" style={{ "--i": 1 }}></span>
        </a>
        <span className="active-nav"></span>
        <span className="animate" style={{ "--i": 2 }}></span>
      </nav>
    </div>
  );
}
