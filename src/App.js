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

    const [showModal,setShowModal] =useState(false)
    return (
    <div className="App">
        <PostFilter
            filter={filter} processFilter={processFilter}
            showModal={showModal} setShowModal={setShowModal}
            posts={posts} setPosts={setPosts}
        ></PostFilter>
        <hr className="my-4"></hr>
        <PostList posts={posts} remove={removePost} name="Group 1"/>
    </div>
  );
}
// https://www.youtube.com/watch?v=GNrdg3PzpJQ

export default App;
