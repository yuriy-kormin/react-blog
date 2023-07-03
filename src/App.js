import React, {useState} from "react";
import PostItem from "./components/PostItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from "./components/PostList";

function App() {
    const [posts,setPosts] = useState([
        {id:1,name:'post 1',body:'body 1'},
        {id:2,name:'post 2',body:'body 2'},
        {id:3,name:'post 3',body:'body 3'},
        {id:4,name:'post 4',body:'body 4'},
    ])
    return (
    <div className="App">
        <PostList posts={posts} name="Group 1"/>
    </div>
  );
}
// https://www.youtube.com/watch?v=GNrdg3PzpJQ

export default App;
