import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home show-animate" id="home">
      <div className="home-content">
        <h1>Hi, I'm <span>Manjesh</span><span className="animate" style={{ "--i": 2 }}></span></h1>
        <div className="text-animate">
          <h3>I Build Things For The Web</h3>
          <span className="animate" style={{ "--i": 3 }}></span>
        </div>
        <p>
          I am a Bay Area based Software Engineer who has experience creating amazing Fullstack Applications. 
          <span className="animate" style={{ "--i": 4 }}></span>
        </p>
        <p>
          I currently work as a Fullstack Engineer @ Kismet XYZ
          <span className="animate" style={{ "--i": 4 }}></span>
        </p>
        <div className="btn-box">
          <a href="#" className="btn">Hire Me</a>
          <a href="#" className="btn">Let's Talk</a>
          <span className="animate" style={{ "--i": 5 }}></span>
        </div>
      </div>
    </section>
  );
};

export default Home;