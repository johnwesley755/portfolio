// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIx9bbtjiqcdJXyPBr_dBFhNYkoTrz5wc",
  authDomain: "johnwesley-469ea.firebaseapp.com",
  projectId: "johnwesley-469ea",
  storageBucket: "johnwesley-469ea.firebasestorage.app",
  messagingSenderId: "1056618053662",
  appId: "1:1056618053662:web:e60670be1e2f725ec6ee0f",
  measurementId: "G-Y7WR6L5HBC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
