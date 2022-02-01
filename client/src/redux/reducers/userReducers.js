import {} from "../constants/postConstants.js";
import {
  USER_INFO_FAIL,
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_POSTS_FAIL,
  USER_POSTS_REQUEST,
  USER_POSTS_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "../constants/userConstants.js";

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const usertDetailsReducer = (
  state = { loading: true, user: {} },
  action
) => {
  switch (action.type) {
    case USER_INFO_REQUEST:
      return { loading: true };
    case USER_INFO_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_INFO_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userPostListReducer = (
  state = { loadingPosts: true, userPosts: [] },
  action
) => {
  switch (action.type) {
    case USER_POSTS_REQUEST:
      return { loadingPosts: true };
    case USER_POSTS_SUCCESS:
      return { loadingPosts: false, userPosts: action.payload };
    case USER_POSTS_FAIL:
      return { loadingPosts: false, userPosts: action.payload };
    default:
      return state;
  }
};
