import React from 'react';
import Layout from "./Components/Layout";
import {Route, Routes} from "react-router";
import MainPage from "./Pages/MainPage";
import FullPostsPage from "./Pages/FullPostsPage";
import PostPage from "./Pages/PostPage";
import AddPostPage from "./Pages/AddPostPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import EditPostPage from "./Pages/EditPostPage";

const App = () => {
    return (
        <>
            <Layout>
    <Routes>
        <Route path={`/`} element={<MainPage/>}/>
        <Route path={`posts`} element={<FullPostsPage/>}/>
        <Route path={`:id`} element={<PostPage/>}/>
        <Route path={`new`} element={<AddPostPage/>}/>
        <Route path={`:id/edit`} element={<EditPostPage/>}/>
        <Route path={`register`} element={<RegisterPage/>}/>
        <Route path={`login`} element={<LoginPage/>}/>

    </Routes>
            </Layout>
        </>
    );
};

export default App;