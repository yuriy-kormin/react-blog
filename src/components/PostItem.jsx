import React from 'react';
import {Button, Card, Container, ListGroupItem, Row} from 'react-bootstrap';


const PostItem = ({post}) => {
    return (
        <ListGroupItem className="d-flex w-100 justify-content-between align-items-start">
            <div>
                <h3>{post.id}. {post.name}</h3>
                {post.body}
            </div>
            <div>
                <Button variant="danger">Удалить</Button>
            </div>
        </ListGroupItem>
    )
}
export default PostItem