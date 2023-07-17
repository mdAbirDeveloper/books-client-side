// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKXphluwChII42HgMkEbMOjLSxP9lbRac",
  authDomain: "book-assignment-7762f.firebaseapp.com",
  projectId: "book-assignment-7762f",
  storageBucket: "book-assignment-7762f.appspot.com",
  messagingSenderId: "582536699587",
  appId: "1:582536699587:web:f00aabb0b00cb4c7e54c76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
