import React from 'react';
import Card from '../UI/Card';
import './style.css';

function SocialICons() {
    return (
            <Card>
                <div className="socialmenu">
                    <h1>Social Networks</h1>    
                    <div className="sidebar_social_icons">
                        <a target="_blank" href="https://www.facebook.com/abhi.soni.796#_"><img src={require('../../assets/icons/fb.png')} /></a>
                        <a target="_blank" href="https://www.instagram.com/the.brandy.boy/"><img src={require('../../assets/icons/ig.png')} /></a>
                        <a target="_blank" href="https://twitter.com/abhimanyushady"><img src={require('../../assets/icons/tw.png')} /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/abhimanyu-soni-ab107a162/"><img src={require('../../assets/icons/li.png')} /></a>
                        <a target="_blank" href="https://myaccount.google.com/personal-info"><img src={require('../../assets/icons/gp.png')} /></a>
                    </div>
                </div>
            </Card>
    )
}

export default SocialICons
