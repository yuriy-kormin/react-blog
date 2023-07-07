import React from 'react';
import {ListGroup} from 'react-bootstrap';
import PostItem from "./PostItem";

const PostList = ({posts,name,remove}) => {
    return (
        <div>
            <div className="h2">{name}</div>
            <ListGroup className={"form-control px-3"}>
                {posts.filter(post =>{return !post['is_hidden']}).map(post =>
                    <PostItem post={post} remove={remove} key={post.id}/>
                )}
            </ListGroup>
        </div>

    );
};

export default PostList;