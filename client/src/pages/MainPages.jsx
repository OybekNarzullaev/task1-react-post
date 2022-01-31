import Layout from "antd/lib/layout/layout";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import PostsPage from "./PostsPage";
import SinglePostPage from "./SinglePostPage";
import UserInfo from "./UserInfo";
import WritePost from "./WritePost";

export default function MainPages() {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route element={<PostsPage />} path="/"></Route>
        <Route
          element={<SinglePostPage />}
          path={`/post/:authorname/:id`}
        ></Route>
        <Route element={<WritePost />} path="/write"></Route>
        <Route element={<UserInfo />} path="/user-info/:id"></Route>
      </Routes>
    </Layout>
  );
}
