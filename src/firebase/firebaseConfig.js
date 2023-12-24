import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import {GoogleAuthProvider, signInWithPopup, onAuthStateChanged, getAuth, signOut,signInWithEmailAndPassword} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDUPjO7mcnnqA9FKovEK3aJYOR646u8u4U",
  authDomain: "blogapp-39c54.firebaseapp.com",
  projectId: "blogapp-39c54",
  storageBucket: "blogapp-39c54.appspot.com",
  messagingSenderId: "66017555246",
  appId: "1:66017555246:web:4b66d70451e048af0900bf",
  databaseURL:"https://blogapp-39c54-default-rtdb.firebaseio.com/"
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

const provider = new GoogleAuthProvider();

export {database as default, provider, signInWithPopup, onAuthStateChanged, getAuth, signOut, firebase,signInWithEmailAndPassword}
