import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const MyNavBar = () => {
    return (
    <Navbar bg="dark">
        <Container>
            <Nav className="me-auto">
                <Nav.Link as="div"><Link to="/">About</Link></Nav.Link>
                <Nav.Link as="div"><Link to="/posts">Posts</Link></Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    );
};

export default MyNavBar;