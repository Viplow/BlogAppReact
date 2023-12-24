
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import blogReducer from "../reducers/blogs";
import authReducer from "../reducers/auth";

import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  combineReducers({
    blogs: blogReducer,
    auth: authReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;