import React from 'react';
import {ListGroup} from 'react-bootstrap';
import PostItem from "./PostItem";

const PostList = ({posts,name}) => {
    return (
        <div>
            <div className="h2">{name}</div>
            <ListGroup>
                {posts.map(post =>
                    <PostItem post={post} key={post.id}/>
                )}
            </ListGroup>
        </div>

    );
};

export default PostList;