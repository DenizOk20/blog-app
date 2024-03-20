// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-app-82a67.firebaseapp.com",
  projectId: "blog-app-82a67",
  storageBucket: "blog-app-82a67.appspot.com",
  messagingSenderId: "352944353667",
  appId: "1:352944353667:web:23e4fe4b13c5498414c6b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);