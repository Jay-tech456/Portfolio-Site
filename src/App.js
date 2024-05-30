// src/App.js
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import IconNavbar from './Components/IconNavbar/IconNavbar';

// import AboutMe from './Components/AboutMe/AboutMe';
const App = () => {
  
  return (
    <div>
      <Navbar />
      <IconNavbar />
    <Home />
    <About />
    </div>
  );
};

export default App;
