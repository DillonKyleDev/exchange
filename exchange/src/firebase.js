// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWMT_BC06jEnk7o1vb5PtczAY6xqCHygA",
  authDomain: "exchange-97475.firebaseapp.com",
  projectId: "exchange-97475",
  storageBucket: "exchange-97475.appspot.com",
  messagingSenderId: "1035982071687",
  appId: "1:1035982071687:web:6e5d7de0cd8fae1675d522",
  measurementId: "G-1KK749J65C"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const analytics = getAnalytics(app);

export { auth, provider };
export default db;