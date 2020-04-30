import React from 'react';
import './style.css';
import Data from '../../../data/blog';
import Card from '../../UI/Card';
import { NavLink } from 'react-router-dom';

function HomePost() {
        
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    const d = new Date(document.lastModified);

    const month = monthNames[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
 
    return (

      <div className="homepage_posts">
        <Card>
            <section className="hp_post">
                <div className="post_detail">
                    <div className="post_img">
                        <img src={Data[0].blogImage} />
                    </div>
                    <h6>{Data[0].blogCategory}</h6>
                    <h1>{Data[0].blogTitle}</h1>
                    <h5>Posted on <span> {month} {day}, {year} at {h}:{m}:{s} </span> by Abhimanyu Soni. </h5>
                    <p>{Data[0].postTextHome}</p>

                    <NavLink to="/read-more"><button className="homePostButton">READ MORE</button></NavLink>
                </div>
            </section>
        </Card>

                 
        <Card>
        <section className="hp_post">
            <div className="post_detail">
                <div className="post_img">
                    <img src={Data[0].blogImage} />
                </div>
                <h6>{Data[1].blogCategory}</h6>
                <h1>{Data[1].blogTitle}</h1>
                <h5>Posted on <span> {month} {day}, {year} at {h}:{m}:{s} </span> by Abhimanyu Soni. </h5>
                <p>{Data[1].postTextHome}</p>

                <NavLink to="/read-more"><button className="homePostButton">READ MORE</button></NavLink>
            </div>
        </section>
        </Card>
      </div>  
    )
}

export default HomePost;
