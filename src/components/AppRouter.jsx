import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostPage from "./PostPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<About />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/posts/:id" element={<PostPage />} />
            <Route path="*" element={<h1>Page Not Found </h1>} />
        </Routes>
        );
};

export default AppRouter;