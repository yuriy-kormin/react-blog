import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from "./components/PostList";
import {postFixture} from "./components/postlist_data";
import PostAddForm from "./components/PostAddForm";
import {Alert, Col, Container, Row} from "react-bootstrap";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts,setPosts] = useState(
        postFixture.map(post=>{
            return {...post,is_hidden:false}
        })
    );
    const removePost = (Postid) => {
        setPosts(posts.filter(post => post.id!== Postid))
    }

    const [filter,setFilter] = useState({sort:'',qs:''})
    const processFilter = (sort,qs) => {
        if (sort){
            setPosts([...posts].sort((a,b) =>
                a[sort].toString().localeCompare(b[sort].toString())))
        } else { sort = filter.sort}
        if (qs ||qs === '') {
            setPosts(
                posts.map(post =>
                    !post['body'].toLowerCase().includes(qs.toLowerCase())
                        ? { ...post, is_hidden: true }
                        : { ...post, is_hidden: false }
                )
            )
        } else {qs = filter.qs}
        setFilter({sort:sort,qs:qs})
    }

    return (
    <div className="App">
        <PostAddForm classes={'m-3'} setposts={setPosts} posts={posts}/>
        <hr className="my-4"></hr>
        <PostFilter filter={filter} processFilter={processFilter}></PostFilter>
        <hr className="my-4"></hr>
        <PostList posts={posts} remove={removePost} name="Group 1"/>
    </div>
  );
}
// https://www.youtube.com/watch?v=GNrdg3PzpJQ

export default App;
