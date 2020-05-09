import firebase from "firebase/app";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyCRIAEiKZwmkmSATAoR44bDIjc0q3ACZKQ",
  authDomain: "insert-quest.firebaseapp.com",
  databaseURL: "https://insert-quest.firebaseio.com",
  projectId: "insert-quest",
  storageBucket: "insert-quest.appspot.com",
  messagingSenderId: "585794805513",
  appId: "1:585794805513:web:6a3c3b19a46f4cce553dd8",
  measurementId: "G-4DN3KP71P6",
};
// Initialize Firebase
let db = firebase.initializeApp(firebaseConfig);

export default db;
