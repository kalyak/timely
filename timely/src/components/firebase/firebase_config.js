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
  apiKey: "AIzaSyCrPr9G3BEmllbocucqyNNrjpbgUkCSOoQ",
  authDomain: "ga-lessons.firebaseapp.com",
  projectId: "ga-lessons",
  storageBucket: "ga-lessons.appspot.com",
  messagingSenderId: "141638687704",
  appId: "1:141638687704:web:26106a2db3cdfea86a70ad",
  measurementId: "G-QGK3HDFSRK",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
