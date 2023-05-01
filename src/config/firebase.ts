// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZIt2MEwN1bilrNrQi_PwJHSkSrc-yFfY",
  authDomain: "react-typescript-22a7d.firebaseapp.com",
  projectId: "react-typescript-22a7d",
  storageBucket: "react-typescript-22a7d.appspot.com",
  messagingSenderId: "434993127994",
  appId: "1:434993127994:web:b4f68acc382f80df8d8b03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()