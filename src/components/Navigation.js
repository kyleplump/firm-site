import React from 'react';
import './Navigation.css';

export default function Navigation() {

    return (
        <nav className="navbar">
            <div>
                <p>logo</p>
            </div>
            <ul className="nav-items">
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#about-us">About Us</a>
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </nav>
    );
}