import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import reportWebVitals from "./reportWebVitals";
import "./app.css";
import { getBlogsFromDatabase, clearBlogs } from "./actions/blogs";
import "./firebase/firebaseConfig";
import { onAuthStateChanged, getAuth } from "./firebase/firebaseConfig";

import { loginAction, logoutAction } from "./actions/auth";
import store from "./store/configureStore";

store.subscribe(()=>{
  console.log("===== Store Changed ====");
  console.log("Auth state: ", store.getState().auth);
  console.log("Blogs state: ", store.getState().blogs);
  console.log("------------------------");
});


const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User Login: ", user.uid);
        store.dispatch(loginAction(user.uid));

        store.dispatch(getBlogsFromDatabase()).then(() => {
            renderApp();
        })
    } else {
        store.dispatch(clearBlogs());
        store.dispatch(logoutAction());
        console.log("User Logout.");
        renderApp();
    }
});

let isRendered = false;
const renderApp = () => {
    if(!isRendered) {
        ReactDOM.render(
            <Provider store={store}>
                <AppRouter />
            </Provider>, 
            document.getElementById('root')
        );
        isRendered = true;
    }
}





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
