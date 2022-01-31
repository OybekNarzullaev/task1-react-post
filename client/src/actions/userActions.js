import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_FAIL,
  USER_POSTS_REQUEST,
  USER_POSTS_SUCCESS,
  USER_POSTS_FAIL,
} from "../constants/userConstants";
import { getPostsByUserAPI, userInfoAPI, userLoginAPI } from "../server/api";
import { onFinishFailed, openFinishSucces } from "../components/helper";

export const signin = (email) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payload: email,
  });
  try {
    const { data } = await userLoginAPI(email);
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });
    openFinishSucces("Успешный вход");
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
    onFinishFailed(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    );
  }
};

export const signout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_SIGNOUT,
  });
};

export const detailsUser = (userId) => async (dispatch) => {
  dispatch({
    type: USER_INFO_REQUEST,
  });
  try {
    const { data } = await userInfoAPI(userId);
    dispatch({
      type: USER_INFO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_INFO_FAIL,
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

export const listUserPosts = (id) => async (dispatch) => {
  dispatch({
    type: USER_POSTS_REQUEST,
  });
  try {
    const { data } = await getPostsByUserAPI(id);
    dispatch({ type: USER_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_POSTS_FAIL, payload: error.message });
    onFinishFailed(error.message);
  }
};
