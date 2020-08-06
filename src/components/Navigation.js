import React, { useEffect } from 'react';
import './Navigation.css';

export default function Navigation() {

    ;

    function checkIfTop() {

        let  navElement = document.querySelector('.navbar')
        if(window.scrollY === 0) {
            navElement.classList.remove('shadowed');
        }
        else {
            if(!navElement.classList.contains('shadowed')) {
                navElement.classList.add('shadowed');
            }
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', checkIfTop);

        return function cleanup() {
            window.removeEventListener('scroll', checkIfTop);
        }
    }, []);

    return (
        <nav className="navbar">
            <div>
                <p>logo</p>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <a href="#services">Services</a>
                </li>
                <li className="nav-item">
                    <a href="#about-us">About Us</a>
                </li>
                <li className="nav-item">
                <a href="#about-us">Contact</a>
                </li>
            </ul>
        </nav>
    );
}