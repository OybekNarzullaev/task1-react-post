import {
  DislikeOutlined,
  EditOutlined,
  LikeOutlined,
  UserOutlined,
} from "@ant-design/icons/lib/icons";
import { Avatar, Button, Card, Input, Form } from "antd";
import Layout from "antd/lib/layout/layout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { detailsPost, editPost } from "../redux/actions/postActions";

export default function SinglePostPage() {
  // url params
  const id = useParams().id;
  const authorName = useParams().authorname;

  // state management
  const dispatch = useDispatch();
  const postDetail = useSelector((state) => state.postDetail);
  const postEdit = useSelector((state) => state.postEdit);
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const { loadingPost, postInfo } = postDetail;
  const { loadingEditPost } = postEdit;
  const [beginEdit, setBeginEdit] = useState(false);
  const { Meta } = Card;

  const submitEditPost = async (values) => {
    dispatch(editPost(id, values["title"], values["desc"]));
    setBeginEdit(false);
  };

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(detailsPost(id));

    return () => {
      abortController.abort();
    };
  }, [dispatch, id]);

  return (
    <Layout className="conatainerFuild">
      <Card
        loading={loadingPost}
        title={
          !beginEdit && <h3>{postInfo ? postInfo.title : "Загрузка..."}</h3>
        }
        className="singlePostContainer"
      >
        {beginEdit ? (
          <div className="mb-20">
            <h3>Изменить пост</h3>
            <Form
              onFinish={submitEditPost}
              initialValues={{ title: postInfo?.title, desc: postInfo?.desc }}
            >
              <Form.Item name="title">
                <Input allowClear disabled={loadingEditPost} />
              </Form.Item>
              <Form.Item name="desc">
                <Input.TextArea allowClear disabled={loadingEditPost} />
              </Form.Item>

              <Button
                className="button mr-15 mt-20"
                type="primary"
                htmlType="submit"
                loading={loadingEditPost}
              >
                Изменить
              </Button>
              <Button
                className="button mt-20"
                onClick={() => {
                  setBeginEdit(false);
                }}
                type="danger"
                disabled={loadingEditPost}
              >
                Отмена
              </Button>
            </Form>
          </div>
        ) : (
          !loadingPost && (
            <>
              <div className="singlePostInfo">
                <span className="left">
                  <Link
                    to={`/user-info/${postInfo.authorId}`}
                    className="button edit"
                  >
                    <UserOutlined /> {postInfo ? authorName : "Загрузка..."}
                  </Link>
                </span>
                <span className="right">
                  {user._id === postInfo.authorId && (
                    <span
                      className="button edit"
                      onClick={() => setBeginEdit(true)}
                    >
                      <EditOutlined /> Редактировать
                    </span>
                  )}
                </span>
              </div>
              <div className="postText">{postInfo.desc}</div>

              <div className="grade">
                <LikeOutlined className="like" />
                <DislikeOutlined className="dislike" />
              </div>
            </>
          )
        )}
        <h2>Comments</h2>
        <Card>
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Comment title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod
            eum hic soluta quidem quisquam perferendis dolores odio possimus velit
            quia obcaecati sunt dignissimos,"
          />
          <div className="replyContainer">
            <Card>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Reply title"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod
                eum hic soluta quidem quisquam perferendis dolores odio possimus velit
                quia obcaecati sunt dignissimos,"
              />
            </Card>
            <Card>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Reply title"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod
                eum hic soluta quidem quisquam perferendis dolores odio possimus velit
                quia obcaecati sunt dignissimos,"
              />
            </Card>
          </div>
        </Card>
        <Card>
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Comment title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod
            eum hic soluta quidem quisquam perferendis dolores odio possimus velit
            quia obcaecati sunt dignissimos,"
          />
          <div className="replyContainer">
            <Card>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Reply title"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod
                eum hic soluta quidem quisquam perferendis dolores odio possimus velit
                quia obcaecati sunt dignissimos,"
              />
            </Card>
            <Card>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Reply title"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod
                eum hic soluta quidem quisquam perferendis dolores odio possimus velit
                quia obcaecati sunt dignissimos,"
              />
            </Card>
          </div>
        </Card>
      </Card>
    </Layout>
  );
}
