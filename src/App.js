import React, {useEffect, useMemo, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import PostService from "./API/PostService";
import {Alert, Pagination, Spinner} from "react-bootstrap";
import {useFetching} from "./components/hooks/useFetching";
import {getPageCount, pagesArray} from "./utils/pages";

function App() {
    const [posts,setPosts] = useState([]);
    const [showModal,setShowModal] =useState(false)
    const [paginationInfo,setPaginationInfo]=useState(
{totalPages:0, limit:10, page:1}
    )
    // const pages = pagesArray(paginationInfo.totalPages)
    const pages = useMemo(() => {return pagesArray(paginationInfo.totalPages)},
        [paginationInfo.totalPages,]
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
    console.log(pages)
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
                    <Pagination className={"d-flex justify-content-center"}>
                        {pages.map(page => (
                            <Pagination.Item
                                key={page}
                                active={page === paginationInfo.page}
                                onClick={() => {
                                    setPaginationInfo({...paginationInfo,page})
                                }}
                            >{page}</Pagination.Item>
                        ))}
                    </Pagination>
                    <PostList posts={posts} setPosts={setPosts} name="Group 1"/>
              </>
            )
        }
    </div>
  );
}
// https://www.youtube.com/watch?v=GNrdg3PzpJQ

export default App;
