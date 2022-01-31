import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import {
  CloseOutlined,
  EditOutlined,
  HomeOutlined,
  LogoutOutlined,
  MenuOutlined,
} from "@ant-design/icons/lib/icons";
import { signout } from "../actions/userActions";
import { useDispatch } from "react-redux";
import { useState } from "react";
export default function Header() {
  const dispatch = useDispatch();
  const [subMenuOpen, setSubmenuOpen] = useState(false);

  const { Header } = Layout;
  return (
    <>
      <Header className="header">
        <div className="left">
          <Link to="/" className="link">
            <HomeOutlined style={{ color: "white" }} />
            <span>Home</span>
          </Link>
        </div>
        <div className="right">
          <Link to="/write" className="link mr-15 writeButton">
            <EditOutlined /> <span>Написать пост</span>
          </Link>
          <span
            className="link logoutButton"
            onClick={() => dispatch(signout())}
          >
            <LogoutOutlined /> <span>Выход</span>
          </span>
          <button
            className="header-menu-button"
            onClick={() => {
              if (subMenuOpen) {
                document.getElementById("submenu").style.display = "none";
                setSubmenuOpen(false);
              } else {
                document.getElementById("submenu").style.display = "flex";
                setSubmenuOpen(true);
              }
            }}
          >
            {subMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </Header>
      <div className="submenu" id="submenu">
        <Link to="/write" className="link submenu-tem">
          <EditOutlined /> <span>Написать пост</span>
        </Link>
        <span className="link submenu-tem" onClick={() => dispatch(signout())}>
          <LogoutOutlined /> <span>Выход</span>
        </span>
      </div>
    </>
  );
}
