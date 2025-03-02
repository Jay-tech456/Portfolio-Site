import React from "react";
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import About from '../Components/About';
import IconNavbar from '../Components/IconNavbar';
import Experience from '../Components/Experience';
import Project from "../Components/Project/Project"; 
import NotableProjects from '../Components/NotableProjects/NotableProjects';
import Education from '../Components/Education/Education'; // Fixed typo
import Footer from '../Components/Footer.js'

function LandingPage (){  // Fixed naming convention
    return ( 
        <div className="main-container">
            <Navbar />
            <IconNavbar />
            <div className="content">
                <Home />
                <About />
                <Experience />
                <Education />  {/* Fixed component name */}
                <Project />
                <NotableProjects />
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage;  // Match renamed component