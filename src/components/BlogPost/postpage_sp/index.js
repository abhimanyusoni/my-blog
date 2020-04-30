import React from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';

function PpSinglePost(props) {

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    const d = new Date();

    const month = monthNames[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();

    return (
        <section className="hp_post">
            <div className="post_detail">
                <h6>{props.blogCategory}</h6>
                <h1>{props.blogTitle}</h1>
                <h5>Posted on <span> {month} {day}, {year} </span> by Abhimanyu Soni. </h5>
                <div className="post_img">
                    <img src={props.blogImage} />
                </div>
                <p>{props.postTextHome}</p>
                
                <NavLink to="/read-more"><button className="homePostButton">READ MORE</button></NavLink>
            </div>
        </section>
    )
}

export default PpSinglePost;
