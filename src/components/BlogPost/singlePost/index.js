import React from 'react';
import './style.css';
import Data from '../../../data/blog';
import Card from '../../UI/Card';

function SinglePost(props) {

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    const d = new Date();

    const month = monthNames[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();

    return (
        <section className="single_post">
            <Card>
                <div className="post_detail">
                    <h6>{Data[0].blogCategory}</h6>
                    <h1>{Data[0].blogTitle}</h1>
                    <h5>Posted on <span> {month} {day}, {year} </span> by Abhimanyu Soni. </h5>
                    <div className="post_img">
                        <img src={Data[0].blogImage} />
                    </div>
                    <p>{Data[0].blogText}</p>
                    
                </div>
            </Card>
        </section>
    )
}

export default SinglePost;
