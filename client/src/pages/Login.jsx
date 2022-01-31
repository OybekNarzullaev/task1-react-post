import { LoginOutlined, MailOutlined } from "@ant-design/icons/lib/icons";
import { Button, Card, Input, Form, Space } from "antd";
import Layout from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/userActions";

export default function Login() {
  const [email, setEmail] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = () => {
    dispatch(signin(email));
  };

  useEffect(() => {}, [userInfo]);

  return (
    <Layout className="loginPage">
      <Card title="Вход" style={{ width: 350 }}>
        <Form name="basic" autoComplete="off" onFinish={submitHandler}>
          <Form.Item name="email">
            <Space>
              <MailOutlined style={{ fontSize: "40px", color: "#aaa" }} />
              <Input
                placeholder={"Email"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Space>
          </Form.Item>

          <Form.Item>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className="button"
              icon={<LoginOutlined />}
            >
              Вход
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  );
}
