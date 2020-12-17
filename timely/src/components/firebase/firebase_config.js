import firebase from "firebase/app";
import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyC0OaImF1jObUOLioa-cAnZrfDeg6D8zJA",
//   authDomain: "timely-9c187.firebaseapp.com",
//   projectId: "timely-9c187",
//   storageBucket: "timely-9c187.appspot.com",
//   messagingSenderId: "621031069784",
//   appId: "1:621031069784:web:06e14d091b8f89c039522d",
//   measurementId: "G-B3ZFS8Z2LF",
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  projectId: process.env.REACT_APP_FIREBASE_projectId,
  storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
  messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  appId: process.env.REACT_APP_FIREBASE_appId,
  measurementId: process.env.REACT_APP_FIREBASE_measurementId,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
