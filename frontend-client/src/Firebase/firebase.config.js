// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmoVB6gx42HBa15pAZhG_4fxNhlafwMwA",
  authDomain: "coffee-king-cf02d.firebaseapp.com",
  projectId: "coffee-king-cf02d",
  storageBucket: "coffee-king-cf02d.appspot.com",
  messagingSenderId: "754280126094",
  appId: "1:754280126094:web:f20531a93f4c9c14ce1bdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;