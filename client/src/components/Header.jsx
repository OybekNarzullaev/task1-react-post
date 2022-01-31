import React from "react";
import { Layout } from "antd";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { EditOutlined, HomeOutlined } from "@ant-design/icons/lib/icons";
export default function Header() {
  const { Header } = Layout;
  return (
    <Header className="header">
      <div className="left">
        <Link to="/" className="link">
          <HomeOutlined style={{ color: "white" }} />
          <span>Home</span>
        </Link>
      </div>
      <div className="right">
        <Link to="/write" className="link">
          <EditOutlined /> <span>Написать пост</span>
        </Link>
      </div>
    </Header>
  );
}
