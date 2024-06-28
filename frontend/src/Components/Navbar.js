import React from "react";
import "../styles/Navbar.css"; 
import Logo from "./Images/MPLogo.png"

export default function Navbar() { 
    return ( 
        <div className="navbar-container">
          <span className="animate" style={{ '--i': 1 }}><img  className = "logo" src={Logo} alt="Logo" /></span>


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
