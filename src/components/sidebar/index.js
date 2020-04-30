import React from 'react';
import './style.css';
import Card from '../../components/UI/Card'
import Categories from '../categories';
import SocialICons from '../social';

function Sidebar() {
    return (
        <section className="sidebar">
            <Card style={{textAlign: 'Center', padding: '15px 15px', boxSizing: 'border-box'}}>
                <h1>ABOUT - US</h1>
                <img className="abtusimg" src="https://scontent.famd6-1.fna.fbcdn.net/v/t1.0-9/74470889_2237191509724149_4273649230121271296_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=-whiNbPz1WsAX9N29CR&_nc_ht=scontent.famd6-1.fna&oh=8084d8a60b564e50cb4a2b57818f6e98&oe=5ECF5990&dl=1" />
                <p>Hello! My Name is Abhimanyu Soni. Welcome to my personal blogspot. I am a developer too. I've designed this blog. Hope you guys love my posts.</p>
            </Card>

            <SocialICons/>

            <Categories/>

        </section>
    )
}

export default Sidebar;
