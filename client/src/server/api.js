import { host, httpRequest } from "./host";

// posts api
export let getPostsAPI = () => {
  let config = {
    url: `${host}/api/posts`,
    method: "get",
  };
  return httpRequest(config);
};

export let getPostAPI = (id) => {
  let config = {
    url: `${host}/api/posts/one/${id}`,
    method: "get",
  };
  return httpRequest(config);
};

export let getPostsByUserAPI = (userId) => {
  let config = {
    url: `${host}/api/posts/${userId}`,
    method: "get",
  };
  return httpRequest(config);
};

export let createPostAPI = (title, desc, authorId) => {
  let config = {
    url: `${host}/api/posts`,
    method: "post",
    data: {
      title: title,
      desc: desc,
      authorId: authorId,
    },
  };
  return httpRequest(config);
};

export let editPostAPI = (id, title, desc) => {
  let config = {
    url: `${host}/api/posts/${id}`,
    method: "put",
    data: {
      title: title,
      desc: desc,
    },
  };
  return httpRequest(config);
};

// users api
export let userLoginAPI = (email) => {
  let config = {
    url: `${host}/api/users/login`,
    method: "post",
    data: {
      email: email,
    },
  };
  return httpRequest(config);
};

export let userInfoAPI = (id) => {
  let config = {
    url: `${host}/api/users/${id}`,
    method: "get",
  };
  return httpRequest(config);
};

// comments
export let createCommentAPI = (postId, body) => {
  let config = {
    url: `${host}/api/comments`,
    method: "post",
    data: {
      postId: postId,
      body: body,
    },
  };
  return httpRequest(config);
};

export let getCommentsByPost = (postId) => {
  let config = {
    url: `${host}/api/comments/${postId}`,
    method: "get",
  };
  return httpRequest(config);
};

// replies
export let createReplyAPI = (commentId, body) => {
  let config = {
    url: `${host}/api/replies`,
    method: "post",
    data: {
      commentId: commentId,
      body: body,
    },
  };
  return httpRequest(config);
};

export let getRepliesByComment = (commentId) => {
  let config = {
    url: `${host}/api/comments/${commentId}`,
    method: "get",
  };
  return httpRequest(config);
};
