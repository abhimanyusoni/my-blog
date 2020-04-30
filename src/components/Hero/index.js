import React from 'react';
import "./style.css";
import Card from '../UI/Card';
import Logo from '../Logo';
import Navbar from '../Navbar';

function Hero(props) {
    return (
        <div>
        <Card>
            <Logo />
        </Card>
        <Navbar/>
        </div>
    )
}

export default Hero;
