import React from 'react';
import {Alert, ListGroup} from 'react-bootstrap';
import PostItem from "./PostItem";

const PostList = ({posts,name,remove}) => {
    if (posts.filter(post=>{return !post.is_hidden}).length === 0) {
        return (<Alert variant={'info'}>Нету постов</Alert>)
    }

    return (
        <div>
            <div className="h2 px-3">{name}</div>
            <ListGroup className={"form-control px-5"}>
                {posts.filter(post =>{return !post['is_hidden']}).map(post =>
                    <PostItem post={post} remove={remove} key={post.id}/>
                )}
            </ListGroup>
        </div>

    );
};

export default PostList;