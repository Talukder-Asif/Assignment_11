// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnBoH0xRykR6bX0DWovdhRO8agTJSVTag",
  authDomain: "testhalal-2a0b9.firebaseapp.com",
  projectId: "testhalal-2a0b9",
  storageBucket: "testhalal-2a0b9.appspot.com",
  messagingSenderId: "920376473573",
  appId: "1:920376473573:web:6eda6fddf74e444ae4610c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);