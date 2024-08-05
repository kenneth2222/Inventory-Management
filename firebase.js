// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}  from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDVKmbqmZtDrw30fFnlUuGoupp1wG7LIo",
  authDomain: "inventory-management-8e1e5.firebaseapp.com",
  projectId: "inventory-management-8e1e5",
  storageBucket: "inventory-management-8e1e5.appspot.com",
  messagingSenderId: "95593638299",
  appId: "1:95593638299:web:7d804024fc671daa40d93e",
  measurementId: "G-WPV8G38NCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app) ;

export {firestore};