import React from 'react';
import './style.css';
import Card from '../UI/Card';

function Categories(props) {
    return (
        <Card>
            <section className="Categoty">
                <div className="cat_title">
                    <h1>Categories</h1>
                    <h5>You May Like!<span>❤</span></h5>    
                </div>
                <div className="cat_dtl">
                    <ul>
                        <li><a href="#">featured</a></li>
                        <li><a href="#">inspiring</a></li>
                        <li><a href="#">motivational</a></li>
                        <li><a href="#">love</a></li>
                        <li><a href="#">betrayed</a></li>
                        <li><a href="#">poetry</a></li>
                        <li><a href="#">two-liners</a></li>
                    </ul>
                </div>
                

            </section>
        </Card>
    )
}

export default Categories;
