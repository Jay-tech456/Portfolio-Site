// src/App.js
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import IconNavbar from './Components/IconNavbar';
import Experience from './Components/Experience';
import Project from "./Components/Project/Project"; 
import NotableProjects from './Components/NotableProjects/NotableProjects';
import Eduction from './Components/Education/Education';
import Footer from './Components/Footer.js'
const App = () => {
  return (
    <div className="main-container">
      <Navbar />
      <IconNavbar />
      <div className="content">
        <Home />
        <About />
        <Experience />
         <Eduction />
        <Project />
        <NotableProjects />
        <Footer />
      </div>
    </div>
  );
};

export default App;
