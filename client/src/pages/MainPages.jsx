import Layout from "antd/lib/layout/layout";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import FooterLayout from "../components/FooterLayout";
import PostsPage from "./PostsPage";
import SinglePostPage from "./SinglePostPage";
import UserInfo from "./UserInfo";
import WritePost from "./WritePost";
import Notfound from "./Notfound";

export default function MainPages() {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route exact element={<PostsPage />} path="/"></Route>
        <Route
          element={<SinglePostPage />}
          path={`/post/:authorname/:id`}
        ></Route>
        <Route exact element={<WritePost />} path="/write"></Route>
        <Route exact element={<UserInfo />} path="/user-info/:id"></Route>
        <Route exact element={<Notfound />} path="*"></Route>
      </Routes>
      <FooterLayout />
    </Layout>
  );
}
