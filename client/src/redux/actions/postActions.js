import {
  POST_DETAIL_FAIL,
  POST_DETAIL_REQUEST,
  POST_DETAIL_SUCCESS,
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_EDIT_REQUEST,
  POST_EDIT_SUCCESS,
  POST_EDIT_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
  POST_CREATE_RESET,
} from "../constants/postConstants";
import {
  getPostAPI,
  getPostsAPI,
  editPostAPI,
  createPostAPI,
} from "../../server/api";
import { onFinishFailed, openFinishSucces } from "../../components/helper";

export const listPosts = () => async (dispatch) => {
  dispatch({
    type: POST_LIST_REQUEST,
  });
  try {
    const { data } = await getPostsAPI();
    dispatch({ type: POST_LIST_SUCCESS, payload: data });
    dispatch({ type: POST_CREATE_RESET });
  } catch (error) {
    dispatch({ type: POST_LIST_FAIL, payload: error.message });
    onFinishFailed(error.message);
  }
};

export const detailsPost = (postId) => async (dispatch) => {
  dispatch({
    type: POST_DETAIL_REQUEST,
  });
  try {
    const { data } = await getPostAPI(postId);
    dispatch({
      type: POST_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    onFinishFailed(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const createPost = (title, desc, authorId) => async (dispatch) => {
  dispatch({
    type: POST_CREATE_REQUEST,
  });
  try {
    const { data } = await createPostAPI(title, desc, authorId);
    dispatch({
      type: POST_CREATE_SUCCESS,
      payload: data,
    });
    dispatch(listPosts());
    openFinishSucces("");
  } catch (error) {
    dispatch({
      type: POST_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    onFinishFailed(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const editPost = (postId, title, desc) => async (dispatch) => {
  dispatch({
    type: POST_EDIT_REQUEST,
  });
  try {
    const { data } = await editPostAPI(postId, title, desc);
    dispatch({
      type: POST_EDIT_SUCCESS,
      payload: data,
    });
    dispatch(detailsPost(postId));
    dispatch(listPosts());
    openFinishSucces("");
  } catch (error) {
    dispatch({
      type: POST_EDIT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    onFinishFailed(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};
