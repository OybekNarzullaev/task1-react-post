import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  createPostReducer,
  editPostReducer,
  postDetailReducer,
  postListReducer,
} from "./reducers/postReducers";
import {
  userPostListReducer,
  userSigninReducer,
  usertDetailsReducer,
} from "./reducers/userReducers";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const reducer = combineReducers({
  userSignin: userSigninReducer,
  userDetails: usertDetailsReducer,
  userPostsList: userPostListReducer,
  postList: postListReducer,
  postDetail: postDetailReducer,
  postCreate: createPostReducer,
  postEdit: editPostReducer,
});
const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhacer(applyMiddleware(thunk))
);

// storeni eksport qilish
export default store;
