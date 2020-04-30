import React from 'react';
import './style.css';
import Categories from '../categories';
import SocialICons from '../social';
import Card from '../UI/Card';

function Footer() {
    return (
        <div className="ftr">
            <div className="footer">
                <Categories />
                <div className="verticalLine"></div>
                <SocialICons/>
                <div className="verticalLine"></div>
                <Card>
                    <div className="footerAbtUs">
                        <h1>ABOUT - US</h1>
                        <div className="ftrabtdtl">
                            <img className="abtusimg" src="https://scontent.famd6-1.fna.fbcdn.net/v/t1.0-9/74470889_2237191509724149_4273649230121271296_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=-whiNbPz1WsAX9N29CR&_nc_ht=scontent.famd6-1.fna&oh=8084d8a60b564e50cb4a2b57818f6e98&oe=5ECF5990&dl=1"/>
                            <p>Hi. My name is Abhimanyu Soni. Welcome to my Blogspot. I am a front end developer. I also like to write. I've designed this Blog. Hope you guys loved my posts.</p>
                        </div>
                    </div>
                </Card>
            </div>
            
            <div className="copyright">
                <p>Made with ❤️ by <span>Abhimanyu Soni.</span> </p>
            </div>
        </div>
    )
}

export default Footer;
