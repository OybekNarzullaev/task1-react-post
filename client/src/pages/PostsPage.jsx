import { Space, Spin } from "antd";
import Layout from "antd/lib/layout/layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../redux/actions/postActions";
import PostItem from "../components/PostItem";

export default function PostsPage() {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.postList);
  const { loading, posts } = postList;

  useEffect(() => {
    dispatch(
      posts.length !== 0
        ? { type: "POST_LIST_SUCCESS", payload: posts }
        : listPosts()
    );
  }, [dispatch]);
  return (
    <Layout className="conatainerFuild">
      <div className="container">
        {loading ? (
          <Space size="middle" className="loadingScreen">
            <Spin size="large" />
          </Space>
        ) : (
          posts.map((post, index) => <PostItem post={post} key={index} />)
        )}
      </div>
    </Layout>
  );
}
