// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDteuE2xPz9iFL8zkytaC_QtJ6ffborxW8",
  authDomain: "react-fb-15910.firebaseapp.com",
  projectId: "react-fb-15910",
  storageBucket: "react-fb-15910.appspot.com",
  messagingSenderId: "546679848239",
  appId: "1:546679848239:web:5a205452f24fa7ca7635da"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);