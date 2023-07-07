import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from "./components/PostList";
import {postFixture, sortOptions} from "./components/postlist_data";
import PostAddForm from "./components/PostAddForm";
import {Alert, Col, Container, Row} from "react-bootstrap";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts,setPosts] = useState(
        postFixture.map(post=>{
            return {...post,is_hidden:false}
        })
    );
    const [sortOption,setSortOption] = useState(" ");
    const removePost = (Postid) => {
        setPosts(posts.filter(post => post.id!== Postid))
    }

    const [filter_str,setFilterStr] = useState("")

    const sortPosts = (sortOption) => {
        setSortOption(sortOption)
        // console.log("posts ",[...posts])
        // console.log("sortOption = ",sortOption)

        setPosts([...posts].sort((a,b) =>
            a[sortOption].toString().localeCompare(b[sortOption].toString())))
    }

    const filterPosts = (searchquery) => {
        setFilterStr(searchquery)
        setPosts(
            posts.map(post =>
                !post['body'].toLowerCase().includes(searchquery.toLowerCase())
                ? { ...post, is_hidden: true }
                : { ...post, is_hidden: false }
            )
        )
    }

    return (
    <div className="App">
        <PostAddForm classes={'m-3'} setposts={setPosts} posts={posts}/>
        <hr className="my-4"></hr>
        <Container>
            <Row>
                <Col>
                    <MySelect
                    values={sortOptions}
                    defaultValue="Выберите сортировку"
                    current={sortOption}
                    onchange={sortPosts}
                    ></MySelect>
                </Col>
                <Col>
                    <MyInput
                        placeholder={"Filter..."}
                        value={filter_str}
                        onChange={(e)=>filterPosts(e.target.value)}
                    ></MyInput>
                </Col>
            </Row>
        </Container>

        <hr className="my-4"></hr>
        { posts.filter(post=>{return !post.is_hidden}).length === 0
            ? <Alert variant={'info'}>Нету постов</Alert>
            : <PostList posts={posts} remove={removePost} name="Group 1"/>
        }

    </div>
  );
}
// https://www.youtube.com/watch?v=GNrdg3PzpJQ

export default App;
