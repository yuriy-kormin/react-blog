import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {Form} from "react-bootstrap";

const PostAddForm = ({classes,setposts,posts,setShowModal}) => {
    const [post,setPost] = useState({name:'',body:''})

    const addNewPost = (e) => {
        e.preventDefault()
        const maxId = posts.reduce((max, obj) => (obj.id > max ? obj.id : max), 0) +1;
        setposts([...posts,{...post,id:maxId}]);
        setPost({name:'',body: ''});
        setShowModal(false)
    }

    return (
        <Form className={classes}>
            <MyInput
                classes={"mb-3"}
                placeholder={"Название поста"}
                onChange={(e) =>{setPost({...post, name:e.target.value})}}
                value = {post.name}
                label={"Название поста"}
            />
            <MyInput
                classes={"mb-3"}
                placeholder={"Текст поста"}
                onChange={(e) =>{setPost({...post, body:e.target.value})}}
                label={"Текст поста"}
                value = {post.body}
            />
            <MyButton
                classes = {'mb-3'}
                onClick = {addNewPost}
            >Создать пост</MyButton>
        </Form>
    );
};

export default PostAddForm;