import React from 'react';
import { auth, provider } from '../firebase/FirebaseConfig';
// import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";


function Login() {  

  const signIn = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  return (
    <div>
      <h2>login</h2>
      <button onClick={signIn}>Sign in</button>
    </div>
  )
}

export default Login