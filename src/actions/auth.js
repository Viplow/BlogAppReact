import { createUserWithEmailAndPassword } from "firebase/auth";
import {getAuth, provider, signInWithEmailAndPassword, signInWithPopup, signOut} from "../firebase/firebaseConfig";

export const login = () =>{
    const auth = getAuth();
    return signInWithPopup(auth, provider);
}
export const signIn = (credentials) => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth,
            credentials.email, 
            credentials.password
        ).then(() => {
            dispatch({type : "SIGNIN_SUCCESS"})
        }).catch((err) => {
            dispatch({type : "SIGNIN_ERROR", err})
        })
    }
}
export const signUp = (user) => {
    return (dispatch) => {;
        const auth = getAuth();
        if (user.password !== user.password2) {
            dispatch({type : "SIGNUP_ERROR", authError : "Passwords don't match"});
            return;
        }
        createUserWithEmailAndPassword(auth,
            user.email,
            user.password
        ).then(() => {
            dispatch({type : "SIGNUP_SUCCESS"})
        }).catch((err) => {
            dispatch({type : "SIGNUP_ERROR", err})
        })
    }
}

export const loginAction = (uid) => ({
    type:"LOGIN",
    uid
});


export const logout = () =>{
    const auth = getAuth();
    return signOut(auth);
};

export const logoutAction = (uid) => ({
    type:"LOGOUT"
});