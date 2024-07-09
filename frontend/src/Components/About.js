import React from "react";
import "../styles/About.css";
import profileImage from './Images/home.jpg'; 
import AboutData from "../Hooks/About";

export default function About() { 
    return ( 
        <section className="About show-animate" id="About">
            <div className="about-content">
                <h1 className="AboutME">01. About Me</h1>
                {AboutData.description.map((desc, index) => (
                    <p key={index}>
                        {desc}
                        <span className="animate" style={{ "--i": 4 }}></span>
                    </p>
                ))}
                <p>
                    <span>Some of the technologies that I have worked with recently:</span>
                    <ul className="tools">
                        {AboutData.tools.map((tool, index) => (
                            <li key={index}>{tool}</li>
                        ))}
                    </ul>
                    <span className="animate" style={{ "--i": 4 }}></span>
                </p>
            </div>
            <div className="profile-image">
                <div>
                    <img src={profileImage} alt="profile" />
                </div>
                <span className="forward-circle-spin circle-spin-green"></span>
                <span className="forward-circle-spin circle-spin-blue"></span>
                <span className="forward-circle-spin circle-spin-yellow"></span>
            </div>
        </section>
    );
}
