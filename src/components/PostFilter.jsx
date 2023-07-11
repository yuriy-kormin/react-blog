import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MySelect from "./UI/select/MySelect";
import {sortOptions} from "./postlist_data";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import PostAddForm from "./PostAddForm";
import MyModal from "./UI/MyModals/MyModal";

const PostFilter = ({
                        showModal,setShowModal,
                        posts,setPosts,
}) => {
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
        <Container className={"mt-3"}>
            <MyModal show={showModal} setShow={setShowModal}>
                <PostAddForm classes={'m-3'} setposts={setPosts} posts={posts} setShowModal={setShowModal}/>
            </MyModal>
            <Row>
                <Col md="auto">
                    <MyButton variant={'info'}  onClick={() =>{setShowModal(true)}}>Создать пост</MyButton>
                </Col>
                <Col  md="auto">
                    <MySelect
                        values={sortOptions}
                        defaultValue="Выберите сортировку"
                        current={filter.sort}
                        onChange={processFilter}
                    ></MySelect>
                </Col>
                <Col  md="auto">
                    <MyInput
                        placeholder={"Filter..."}
                        value={filter.qs}
                        processFilter={processFilter}
                    ></MyInput>
                </Col>
            </Row>
        </Container>
    );
};

export default PostFilter;