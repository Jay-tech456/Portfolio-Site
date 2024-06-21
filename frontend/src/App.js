// src/App.js
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About'
import IconNavbar from './Components/IconNavbar';
import Experience from './Components/Experience';
import Project from "./Components/Project/Project"; 
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
