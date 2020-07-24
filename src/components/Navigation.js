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
                    Services
                </li>
                <li>
                    About Us
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </nav>
    );
}