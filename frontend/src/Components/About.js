import React from "react";
import "../styles/About.css"
import profileImage from './Images/home.jpg'; 

export default function About() { 
    return ( 
        <section className="About show-animate" id="About">
            <div className="about-content">
                <h1 classname ="AboutME">01. About Me</h1>
                <p>
                    I am a Software Sculpture who enjoys finding out new optimal solutions. Currently I am an Master of Science Student at San Jose State University with a focus on Computer Software and Artificial Intelligence. Starting my professional journey in 2021, I have built small websites for smaller organizations including Restaurants, charity events, and for small artist.
                    <span className="animate" style={{ "--i": 4 }}></span>
                </p>
                <p>
                    Fast forwarding to today, I am currently working as an AI Intern for a Startup Glocal.io and working as the first Fullstack Engineer at Kismet. My focus is to design, develop, and test out multiple innovative websites. Making them user friendly and entertaining 
                    <span className="animate" style={{ "--i": 4 }}></span>
                </p>
                <p>
                    <span>Some of the technologies that I have work with recently</span>
                    <ul className = "tools">
                        <li>LAMP Stack</li>
                        <li>PERN Stack</li>
                        <li>MERN Stack</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>AWS</li>
                    </ul>
          <span className="animate" style={{ "--i": 4 }}></span>
        </p>
            </div>
            <div className="profile-image">
                <img src={profileImage} alt="profile" />
            </div>
        </section>
    )
}
