import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC6G6Eg-0t71NwolfkTiRLd-LS89p3Wa6s",
  authDomain: "slack-clone-challenge-cf6a0.firebaseapp.com",
  projectId: "slack-clone-challenge-cf6a0",
  storageBucket: "slack-clone-challenge-cf6a0.appspot.com",
  messagingSenderId: "197723288788",
  appId: "1:197723288788:web:614214bcd6d3c55ba67741",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
