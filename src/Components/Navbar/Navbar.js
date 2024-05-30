import React from "react";
import "./Navbar.css"; 

export default function Navbar() { 
    return ( 
        <div className="navbar-container">
            <a href="#" className="logo">MP.<span className="animate" style={{ '--i': 1 }}></span></a>

            <div className="bx bx-menu" id="menu-icon"><span className="animate" style={{ '--i': 2 }}></span></div>

            <nav className="navbar">
                <a href="#About" className= "active">About</a>
                <a href="#education">Experience</a>
                <a href="#skills">Work</a>
                <a href="#contact">Contact</a>
                <a href="#" className="Resume">Resume<span className="animate" style={{ '--i': 1 }}></span></a>
                <span className="active-nav"></span>
                <span className="animate" style={{ '--i': 2 }}></span>
            </nav>
        </div>
    );
}
