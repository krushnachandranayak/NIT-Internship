// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfWWGc1o-77T93kFCW_XnACjhIF2wZtu4",
  authDomain: "auth-e1c97.firebaseapp.com",
  projectId: "auth-e1c97",
  storageBucket: "auth-e1c97.firebasestorage.app",
  messagingSenderId: "382920854101",
  appId: "1:382920854101:web:6774697d8b4bbb702f62dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app, firebaseConfig };