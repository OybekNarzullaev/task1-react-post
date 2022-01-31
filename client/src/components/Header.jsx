import React from "react";
import { Layout } from "antd";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  EditOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@ant-design/icons/lib/icons";
import { signout } from "../actions/userActions";
import { useDispatch } from "react-redux";
export default function Header() {
  const dispatch = useDispatch();

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
        <Link to="/write" className="link mr-15">
          <EditOutlined /> <span>Написать пост</span>
        </Link>
        <span className="link" onClick={() => dispatch(signout())}>
          <LogoutOutlined /> <span>Выход</span>
        </span>
      </div>
    </Header>
  );
}
