// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD79G_HzWh6Wjc45jtpvz-1-25KI4o_ykc",
  authDomain: "react-newspaper-app.firebaseapp.com",
  projectId: "react-newspaper-app",
  storageBucket: "react-newspaper-app.appspot.com",
  messagingSenderId: "358363461853",
  appId: "1:358363461853:web:15797e35e204dd60544334"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;