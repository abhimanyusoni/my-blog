import React from 'react';
import SinglePost from '../../components/BlogPost/singlePost';
import Sidebar from '../../components/sidebar';

function SinglePostToRead() {
    return (
        <div className="container">
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}

export default SinglePostToRead
