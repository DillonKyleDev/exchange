// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, db };