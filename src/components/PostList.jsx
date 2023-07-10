import React from 'react';
import {Alert, ListGroup} from 'react-bootstrap';
import PostItem from "./PostItem";

const PostList = ({posts,name,remove}) => {
    if (posts.filter(post=>{return !post.is_hidden}).length === 0) {
        return (<Alert variant={'info'}>Нету постов</Alert>)
    }
    // { posts.filter(post=>{return !post.is_hidden}).length === 0
    //     ? <Alert variant={'info'}>Нету постов</Alert>
    //     : <PostList posts={posts} remove={removePost} name="Group 1"/>
    // }

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