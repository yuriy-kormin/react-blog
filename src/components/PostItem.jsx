import React from 'react';
import {ListGroupItem} from 'react-bootstrap';
import MyButton from "./UI/button/MyButton";


const PostItem = ({post}) => {
    return (
        <ListGroupItem className="d-flex w-100 justify-content-between align-items-start">
            <div>
                <h3>{post.id}. {post.name}</h3>
                {post.body}
            </div>
            <div>
                <MyButton variant={"danger"}>Удалить</MyButton>
            </div>
        </ListGroupItem>
    )
}
export default PostItem