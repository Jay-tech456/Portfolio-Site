// src/App.js
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import IconNavbar from './Components/IconNavbar/IconNavbar';
import Experience from './Experience/Experience';
import Project from './Project/Project';
import NotableProjects from './Components/NotableProjects/NotableProjects';

// import AboutMe from './Components/AboutMe/AboutMe';
const App = () => {
  
  return (
    <div>
      <Navbar />
      <IconNavbar />
      <Home />
     <About />
     <Experience />
     <Project />
     <NotableProjects />
    </div>
  );
};

export default App;
