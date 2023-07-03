import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {Form} from "react-bootstrap";

const PostAddForm = ({classes}) => {
    return (
        <Form className={classes}>
            <MyInput
                classes={"mb-3"}
                placeholder={"Название поста"}
                label={"Название поста"}
            />
            <MyInput
                classes={"mb-3"}
                placeholder={"Текст поста"}
                label={"Текст поста"}
            />
            <MyButton classes ={'mb-3'}>Создать пост</MyButton>
        </Form>
    );
};

export default PostAddForm;