import React from 'react';
import "./style.css";
import {NavLink} from 'react-router-dom';

function Navbar() {

    const submitSearch=(e)=>{
        e.preventDefault();
        alert("Hello World!");
    }

    return (
        <div className="navbar">
            <ul className="navbar_menu">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/post">Posts</NavLink>
                </li>
                <li>
                    <NavLink to="/about-us">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/contact-us">Contact Us</NavLink>
                </li>
            </ul>
            <div className="searchButton">
                <form id="demo-2" onSubmit={submitSearch}>
                    <input type="search"></input>
                </form>
            </div>
        </div>
    )
}

export default Navbar
