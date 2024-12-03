// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYaZWza6IH3EV0s1H4dpbz5oiW2-yRf0Q",
  authDomain: "auth-moha-milon-b70e9.firebaseapp.com",
  projectId: "auth-moha-milon-b70e9",
  storageBucket: "auth-moha-milon-b70e9.firebasestorage.app",
  messagingSenderId: "1032910631047",
  appId: "1:1032910631047:web:1eb214d774b2cd7ee24822",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
