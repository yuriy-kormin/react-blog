import React from 'react';
import {Button, CardGroup, Form, ListGroup} from 'react-bootstrap';
import PostItem from "./PostItem";
import PostAddForm from "./PostAddForm";

const PostList = ({posts,name}) => {
    return (
        <div>
            <PostAddForm classes={'m-3'}/>
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