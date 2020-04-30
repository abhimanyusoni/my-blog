import React from 'react';
import "./style.css";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav className="header_menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about-us">About Us</NavLink>
                <NavLink to="/contact-us">Contact Us</NavLink>
            </nav>
            <div className="social_icons">
                <a target="_blank" href="https://www.facebook.com/abhi.soni.796#_"><img src={require('../../assets/icons/fb.png')} /></a>
                <a target="_blank" href="https://www.instagram.com/the.brandy.boy/"><img src={require('../../assets/icons/ig.png')} /></a>
                <a target="_blank" href="https://twitter.com/abhimanyushady"><img src={require('../../assets/icons/tw.png')} /></a>
                <a target="_blank" href="https://www.linkedin.com/in/abhimanyu-soni-ab107a162/"><img src={require('../../assets/icons/li.png')} /></a>
                <a target="_blank" href="https://myaccount.google.com/personal-info"><img src={require('../../assets/icons/gp.png')} /></a>
            </div>
        </header>
    )
}

export default Header;
