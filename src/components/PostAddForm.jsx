import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {Form} from "react-bootstrap";

const PostAddForm = ({classes,setposts,posts}) => {
    const [name,setName] = useState('')
    const [body,setBody] = useState('')

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id:Date.now(),
            name,
            body
        }
        setposts([...posts,newPost])
    }

    return (
        <Form className={classes}>
            <MyInput
                classes={"mb-3"}
                placeholder={"Название поста"}
                onChange={(e) =>{setName(e.target.value);}}
                label={"Название поста"}
            />
            <MyInput
                classes={"mb-3"}
                placeholder={"Текст поста"}
                onChange={(e) =>{setBody(e.target.value);}}
                label={"Текст поста"}
            />
            <MyButton
                classes = {'mb-3'}
                onClick = {addNewPost}
            >Создать пост</MyButton>
        </Form>
    );
};

export default PostAddForm;