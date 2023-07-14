import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {Spinner} from "react-bootstrap";

const PostPage = () => {
    const params = useParams()
    const [post,setPost] = React.useState(null)
    const [fetchPostById,isLoading,error] = useFetching(async (id)=>{
        const response= await  PostService.getById(params.id)
        setPost(response.data);
    })
    // console.log(fetchPostById(params.id))
    useEffect( () =>{
        fetchPostById(params.id)
    },[])
    return (
        <div>
            <h1> Post Page {params.id} </h1>
            {isLoading
            ?<Spinner animation="grow" variant="warning"/>
            :(<div>
                    {post && <div>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>}
                </div>)
            }
        </div>
    );
};

export default PostPage;