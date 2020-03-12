import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAmTVJNNsmdyaR9-mv4TDxvhxcm_kXVPio",
    authDomain: "burger-queen-5875f.firebaseapp.com",
    databaseURL: "https://burger-queen-5875f.firebaseio.com",
    projectId: "burger-queen-5875f",
    storageBucket: "burger-queen-5875f.appspot.com",
    messagingSenderId: "683226958157",
    appId: "1:683226958157:web:addba4d22e0ae03d618f04",
    measurementId: "G-CKL4V8KWDX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  let db = firebase.firestore();
  
  export default db;

  