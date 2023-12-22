import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ThemeProvider } from "@material-tailwind/react";


// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBergosPfyz5dAMGMNLcO5XK6C_fIdKPPA",
  authDomain: "eds-moodly.firebaseapp.com",
  projectId: "eds-moodly",
  storageBucket: "eds-moodly.appspot.com",
  messagingSenderId: "939689929206",
  appId: "1:939689929206:web:7eaec25b35d24a868bffd7",
  measurementId: "G-WM4XPLJP4E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
