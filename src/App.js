import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from "./components/PostList";
import {postFixture} from "./components/postlist_data";
import PostAddForm from "./components/PostAddForm";

function App() {
    const [posts,setPosts] = useState(postFixture)
    return (
    <div className="App">
        <PostAddForm classes={'m-3'} setposts={setPosts} posts={posts}/>
        <PostList posts={posts} name="Group 1"/>
    </div>
  );
}
// https://www.youtube.com/watch?v=GNrdg3PzpJQ

export default App;
