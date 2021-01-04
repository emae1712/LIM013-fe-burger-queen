import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBA4WIo73Vw7GXpLMQuG8NEAYsohIG-5tQ",
    authDomain: "astroburger-7c034.firebaseapp.com",
    projectId: "astroburger-7c034",
    storageBucket: "astroburger-7c034.appspot.com",
    messagingSenderId: "607086187290",
    appId: "1:607086187290:web:de9e8a0dbb433acbab52a3",
    measurementId: "G-CF38GH5NNH"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();