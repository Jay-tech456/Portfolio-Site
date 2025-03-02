import React,  { useRef } from 'react';
import '../styles/Home.css';

// Insert Later
// import useTypewriter from '../Hooks/useTypeWritter';

const Home = () => {

    return (
        <section className="home show-animate" id="home">
            <div className="home-content">
                <h1>Hi, I'm <span>Manjesh</span><span className="animate" style={{ "--i": 2 }}></span></h1>

                {/* Text Animation */}
                <div className="text-animate">
                    <h3>I Build Things For The Web</h3>
                    <span className="animate" style={{ "--i": 3 }}></span>
                </div>

                <p>
                    A Bay Area based Software Engineer who has some experience in UI/UX 
                    <span className="animate" style={{ "--i": 4 }}></span>
                </p>
                <p>
                    I currently work as a Fullstack Engineer @ Kismet XYZ
                    <span className="animate" style={{ "--i": 4 }}></span>
                </p>
      
                <div className="btn-box">
                    <a href="https://www.linkedin.com/in/manjesh-p-91902919a/" className="btn">Hire Me</a>
                    <a href="mailto:manjeshprasad21@gmail.com" className="btn">Let's Chat</a>
                    <span className="animate" style={{ "--i": 5 }}></span>
                </div>
            </div>
        </section>
    );
};

export default Home;
