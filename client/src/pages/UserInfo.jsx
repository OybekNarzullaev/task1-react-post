import {
  ContactsOutlined,
  MailOutlined,
  PhoneOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons/lib/icons";
import { Card, Space, Spin } from "antd";
import Layout from "antd/lib/layout/layout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { detailsUser, listUserPosts } from "../actions/userActions";
import PostItem from "../components/PostItem";

export default function UserInfo() {
  const dispatch = useDispatch();
  const id = useParams().id;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, user } = userDetails;

  const userPostList = useSelector((state) => state.userPostsList);
  const { loadingPosts, userPosts } = userPostList;

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(detailsUser(id));
      dispatch(listUserPosts(id));
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch, id]);
  return (
    <Layout className="conatainerFuild">
      <Card
        loading={loading}
        title={
          <>
            <UserOutlined /> USER INFO
          </>
        }
        className="userInfoCard"
        style={{ flex: "1" }}
      >
        {!loading && (
          <div className="userInfoBlock">
            <div className="userInfoItems">
              <div className="userInfoItem">
                <ContactsOutlined />
                <i> Name:</i> <b>{user?.name}</b>
              </div>
              <div className="userInfoItem">
                <RightOutlined />
                <i> Username:</i> <b>{user?.username}</b>
              </div>
              <div className="userInfoItem">
                <MailOutlined />
                <i> Email:</i> <b>{user?.email}</b>
              </div>
              <div className="userInfoItem">
                <PhoneOutlined />
                <i> Phone:</i> <b>{user?.phone}</b>
              </div>
              <div className="userInfoItem">
                <i> Website:</i> <b>{user?.website}</b>
              </div>
              <div className="userInfoItem">
                <i> Company:</i> <b>{user?.company?.name}</b>
              </div>
            </div>
            <div>
              <YMaps>
                <div className="userInfoItem">
                  <p>
                    <b>Address</b>
                  </p>
                  <Map
                    defaultState={{
                      center: [
                        user?.address?.geo?.lat,
                        user?.address?.geo?.lng,
                      ],
                      zoom: 15,
                    }}
                  >
                    <Placemark
                      defaultGeometry={[
                        user?.address?.geo?.lat,
                        user?.address?.geo?.lng,
                      ]}
                    />
                  </Map>
                </div>
              </YMaps>
            </div>
          </div>
        )}
      </Card>
      <h2 className="mt-20">Posts this user</h2>
      <div className="container">
        {loadingPosts ? (
          <Space size="middle" className="loadingScreen">
            <Spin size="large" />
          </Space>
        ) : (
          userPosts?.map((post, index) => (
            <PostItem post={post} key={index} showAuthor={false} />
          ))
        )}
      </div>
    </Layout>
  );
}
