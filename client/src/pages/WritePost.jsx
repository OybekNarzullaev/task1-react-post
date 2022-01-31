import { PlusOutlined } from "@ant-design/icons/lib/icons";
import { Button, Card, Input, Form } from "antd";
import Layout from "antd/lib/layout/layout";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { createPost } from "../actions/postActions";

export default function WritePost() {
  const dispatch = useDispatch();
  const postCreate = useSelector((state) => state.postCreate);
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const { loadingPostCreate } = postCreate;

  const submitCreatePost = (values) => {
    dispatch(createPost(values["title"], values["desc"], user._id));
  };

  useEffect(() => {
    const abortController = new AbortController();
    return () => {
      abortController.abort();
    };
  }, [dispatch]);

  return (
    <Layout className="conatainerFuild">
      <Card className="writePostCard" title="Пост написания">
        <Form onFinish={submitCreatePost}>
          <Form.Item name="title">
            <Input
              placeholder="Название..."
              allowClear
              disabled={loadingPostCreate}
            />
          </Form.Item>
          <Form.Item name="desc">
            <Input.TextArea
              style={{ height: "280px" }}
              placeholder="Текст..."
              allowClear
              disabled={loadingPostCreate}
            />
          </Form.Item>

          <Button
            className="button mr-15 mt-20"
            type="primary"
            htmlType="submit"
            disabled={loadingPostCreate}
            icon={<PlusOutlined />}
          >
            Создать
          </Button>
        </Form>
      </Card>
    </Layout>
  );
}
