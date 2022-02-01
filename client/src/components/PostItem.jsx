import { EyeOutlined, PushpinOutlined } from "@ant-design/icons/lib/icons";
import { Button, Card } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userInfoAPI } from "../server/api";
import { onFinishFailed } from "./helper";

export default function PostItem({ post, showAuthor }) {
  const [author, setAuthor] = useState("");
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const { data } = await userInfoAPI(post.authorId);
        setAuthor(data);
        //setLoading(false);
      } catch (error) {
        //setLoading(false);
        onFinishFailed(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        );
      }
    };
    fetchAuthor();
  }, [post.authorId]);
  return (
    <Card
      //loading={loading}
      title={
        <>
          <PushpinOutlined /> {post.title}
        </>
      }
      style={{ width: "350px", margin: "5px" }}
    >
      <div style={{ height: "120px" }}>
        <p className="desc">{post.desc}</p>{" "}
        {showAuthor && (
          <Link to={`/user-info/${author._id}`}>
            <p className="edit">
              <i>Автор: {author ? author.name : "Загрузка..."}</i>
            </p>
          </Link>
        )}
      </div>

      <Link to={`/post/${author?.name}/${post._id}`}>
        <Button type="primary" className="button" icon={<EyeOutlined />}>
          See more
        </Button>
      </Link>
    </Card>
  );
}

PostItem.defaultProps = {
  showAuthor: true,
};
