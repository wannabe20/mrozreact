// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvj_Ev6EMTqLRvhZ6SGsiJmwiraRmRX9I",
  authDomain: "portfolio-51128.firebaseapp.com",
  projectId: "portfolio-51128",
  storageBucket: "portfolio-51128.appspot.com",
  messagingSenderId: "578215572114",
  appId: "1:578215572114:web:13732a2c18222298dbac4b",
  measurementId: "G-HQGLZ3HZ16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);