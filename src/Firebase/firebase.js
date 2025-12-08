// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrryvZB2CnugGtYTDuZmPRfnpAS3fzCV4",
  authDomain: "style-decor-837d3.firebaseapp.com",
  projectId: "style-decor-837d3",
  storageBucket: "style-decor-837d3.firebasestorage.app",
  messagingSenderId: "887044236668",
  appId: "1:887044236668:web:70c7fc035b71821f3b70f9",
  measurementId: "G-DXWKLJNH7X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
