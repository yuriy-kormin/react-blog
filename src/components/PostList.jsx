import React, {useEffect} from 'react';
import {Alert, ListGroup} from 'react-bootstrap';
import PostItem from "./PostItem";
import axios from "axios";

const PostList = ({posts,name,setPosts}) => {
    useEffect( () =>{
        async function fetchPosts(){
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

            setPosts(response.data.map(post => {
                return {
                    id:post.id,
                    name:post.title,
                    body:post.body,
                    is_hidden:false,
                }
            }))
        }
        fetchPosts();
    },[])

    if (posts.filter(post=>{return !post.is_hidden}).length === 0) {
        return (<Alert variant={'info'}>Нету постов</Alert>)
    }
    const removePost = (Postid) => {
        setPosts(posts.filter(post => post.id!== Postid))
    }

    return (
        <div>
            <div className="h2 px-3">{name}</div>
            <ListGroup className={"form-control px-5"}>
                {posts.filter(post =>{return !post['is_hidden']}).map(post =>
                    <PostItem post={post} remove={removePost} key={post.id}/>
                )}
            </ListGroup>
        </div>

    );
};

export default PostList;