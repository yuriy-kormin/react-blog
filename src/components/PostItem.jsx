import React, {useState} from 'react';
import {Collapse, ListGroupItem} from 'react-bootstrap';
import MyButton from "./UI/button/MyButton";


const PostItem = ({post,remove}) => {
    const [open, setOpen] = useState(true);
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
                    <div>
                        <MyButton onClick={() =>{setOpen(false)}}
                                  variant={"danger"}>Удалить</MyButton>
                    </div>
                </ListGroupItem>
            </div>
        </Collapse>

    )
}
export default PostItem