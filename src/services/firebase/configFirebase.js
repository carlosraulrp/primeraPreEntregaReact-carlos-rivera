
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTF_0vlZy53_wBty-6ek5yb_Z9DygWenM",
  authDomain: "licoreria-868d3.firebaseapp.com",
  projectId: "licoreria-868d3",
  storageBucket: "licoreria-868d3.appspot.com",
  messagingSenderId: "542854882423",
  appId: "1:542854882423:web:a375ae71f980298cd8d272"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()