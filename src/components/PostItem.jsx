import React, {useState} from 'react';
import {Collapse, ListGroupItem} from 'react-bootstrap';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";


const PostItem = ({post,remove}) => {
    const [open, setOpen] = useState(true);
    const router = useNavigate()
    return (
        <Collapse
            in={open}
            dimension="height"
            appear
            onExited={() =>remove(post.id)}
            // remove(post.id)
        >
            <div id={post.id}>
                <ListGroupItem className="d-flex w-100 justify-content-between align-items-start">
                    <div>
                        <h3>{post.id}. {post.name}</h3>
                        {post.body}
                    </div>
                    <div className="d-flex">
                        <MyButton className="mx-1" onClick={() =>{router(`/posts/${post.id}`)}}
                                  variant={"info"}>Открыть</MyButton>
                        <MyButton onClick={() =>{setOpen(false)}}
                                  variant={"danger"}>Удалить</MyButton>
                    </div>
                </ListGroupItem>
            </div>
        </Collapse>

    )
}
export default PostItem