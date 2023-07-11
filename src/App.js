import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from "./components/PostList";
import {postFixture} from "./components/postlist_data";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts,setPosts] = useState(
        postFixture.map(post=>{
            return {...post,is_hidden:false}
        })
    );
    const [showModal,setShowModal] =useState(false)
    return (
    <div className="App">
        <PostFilter
            showModal={showModal} setShowModal={setShowModal}
            posts={posts} setPosts={setPosts}
        ></PostFilter>
        <hr className="my-4"></hr>
        <PostList posts={posts} setPosts={setPosts} name="Group 1"/>
    </div>
  );
}
// https://www.youtube.com/watch?v=GNrdg3PzpJQ

export default App;
