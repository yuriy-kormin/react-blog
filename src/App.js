import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import PostService from "./API/PostService";
import {Alert, Spinner} from "react-bootstrap";
import {useFetching} from "./components/hooks/useFetching";
import {getPageCount} from "./utils/pages";
import MyPagination from "./components/UI/pagination/MyPagination";

function App() {
    const [posts,setPosts] = useState([]);
    const [showModal,setShowModal] =useState(false)
    const [paginationInfo,setPaginationInfo]=useState(
{totalPages:0, limit:10, page:1}
    )
    const [fetchPosts,
        isPostLoading,
        postError
    ] = useFetching(async ()=>{
        const response = await PostService.getAll(
            paginationInfo.limit,paginationInfo.page)
        const pageCount=getPageCount(
            response.headers['x-total-count'],
            paginationInfo.limit)
        setPaginationInfo({...paginationInfo,totalPages: pageCount})
        setPosts(response.data.map(post => {
            return {
                id:post.id,
                name:post.title,
                body:post.body,
                is_hidden:false,
            }
        }))
    })
    useEffect( () =>{fetchPosts()},[paginationInfo.page])
    return (
    <div className="App">
        <PostFilter
            showModal={showModal} setShowModal={setShowModal}
            posts={posts} setPosts={setPosts}
        ></PostFilter>
        {
            postError &&(
                <Alert dismissible variant={'danger'}>{postError}</Alert>
            )
        }
        <hr className="my-4"></hr>
        {isPostLoading
            ?<Spinner animation="grow" variant="warning"/>
            :(<>
                <MyPagination paginationInfo={paginationInfo} setPaginationInfo={setPaginationInfo}/>
                <PostList posts={posts} setPosts={setPosts} name="Group 1"/>
              </>
            )
        }
    </div>
  );
}
// https://www.youtube.com/watch?v=GNrdg3PzpJQ

export default App;
