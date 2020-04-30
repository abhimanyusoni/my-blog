import React from 'react';
import './style.css';
import Card from '../UI/Card';
import PpSinglePost from './postpage_sp';
import Data from '../../data/blog';

function BlogPost() {
    return (
        <div className="post_body">
            <Card>
                <PpSinglePost
                    blogCategory={Data[0].blogCategory}
                    blogTitle={Data[0].blogTitle}
                    blogImage={Data[0].blogImage}
                    postTextHome={Data[0].postTextHome}
                />
            </Card>
            
            <Card>
                <PpSinglePost
                    blogCategory={Data[1].blogCategory}
                    blogTitle={Data[1].blogTitle}
                    blogImage={Data[0].blogImage}
                    postTextHome={Data[1].postTextHome}
                />
            </Card>

            
            <Card>
                <PpSinglePost
                    blogCategory={Data[2].blogCategory}
                    blogTitle={Data[2].blogTitle}
                    blogImage={Data[0].blogImage}
                    postTextHome={Data[2].postTextHome}
                />
            </Card>

            
            <Card>
                <PpSinglePost
                    blogCategory={Data[3].blogCategory}
                    blogTitle={Data[3].blogTitle}
                    blogImage={Data[0].blogImage}
                    postTextHome={Data[3].postTextHome}
                />
            </Card>
        </div>
    )
}

export default BlogPost
