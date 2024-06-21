import React from "react";
import "../styles/IconNavbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function IconNavbar() {
    return (
        <div className="icon-navbar">
            <ul>
                <li><a href="https://github.com/Jay-tech456" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-shake fa-lg"></i></a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-lg"></i></a></li>
                <li><a href="mailto:manjeshprasad21@gmail.com"><i className="fas fa-envelope fa-lg"></i></a></li>
                <li><a href="https://www.linkedin.com/in/manjesh-p-91902919a/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-lg"></i></a></li>
            </ul>
        </div>
    );
}