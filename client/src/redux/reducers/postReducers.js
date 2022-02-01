import {
  POST_CREATE_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_RESET,
  POST_CREATE_SUCCESS,
  POST_DETAIL_FAIL,
  POST_DETAIL_REQUEST,
  POST_DETAIL_SUCCESS,
  POST_EDIT_FAIL,
  POST_EDIT_REQUEST,
  POST_EDIT_SUCCESS,
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
} from "../constants/postConstants";

export const postListReducer = (
  state = { loading: true, posts: [] },
  action
) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { loading: true };
    case POST_LIST_SUCCESS:
      return { loading: false, posts: action.payload };
    case POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postDetailReducer = (
  state = { loadingPost: true, postInfo: {} },
  action
) => {
  switch (action.type) {
    case POST_DETAIL_REQUEST:
      return { loadingPost: true };
    case POST_DETAIL_SUCCESS:
      return { loadingPost: false, postInfo: action.payload };
    case POST_DETAIL_FAIL:
      return { loadingPost: false, error: action.payload };
    default:
      return state;
  }
};

export const createPostReducer = (
  state = { loadingPostCreate: false, createdPost: null },
  action
) => {
  switch (action.type) {
    case POST_CREATE_REQUEST:
      return { createdPost: null, loadingPostCreate: true };
    case POST_CREATE_SUCCESS:
      return {
        loadingPostCreate: false,
        createdPost: action.payload,
      };
    case POST_CREATE_FAIL:
      return { loadingPostCreate: false, error: action.payload };
    case POST_CREATE_RESET: {
      return { loadingPostCreate: false, createdPost: null };
    }
    default:
      return state;
  }
};

export const editPostReducer = (
  state = { loadingEditPost: false, editedPost: {} },
  action
) => {
  switch (action.type) {
    case POST_EDIT_REQUEST:
      return { loadingEditPost: true };
    case POST_EDIT_SUCCESS:
      return { loadingEditPost: false, editedPost: action.payload };
    case POST_EDIT_FAIL:
      return { loadingEditPost: false, error: action.payload };
    default:
      return state;
  }
};
