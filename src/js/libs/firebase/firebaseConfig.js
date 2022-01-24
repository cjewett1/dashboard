// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGQ8V_qxkrbic20yufs6Tqbda804R-0T0",
  authDomain: "storefront-40ba3.firebaseapp.com",
  databaseURL: "https://storefront-40ba3-default-rtdb.firebaseio.com",
  projectId: "storefront-40ba3",
  storageBucket: "storefront-40ba3.appspot.com",
  messagingSenderId: "78807974589",
  appId: "1:78807974589:web:289a98aedf5aaa08c5add4",
  measurementId: "G-EG336SE7EL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export {db}