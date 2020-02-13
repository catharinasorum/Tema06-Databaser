import firebase from "firebase/app";
import "firebase/firestore";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyChPiqiGebBUsFpofiUGW2Q9HyJst_jxJY",
    authDomain: "firestore-2e7e1.firebaseapp.com",
    databaseURL: "https://firestore-2e7e1.firebaseio.com",
    projectId: "firestore-2e7e1",
    storageBucket: "firestore-2e7e1.appspot.com",
    messagingSenderId: "384392672001",
    appId: "1:384392672001:web:8fb2e431d12c5e0329e100"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();