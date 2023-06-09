import React from 'react';
import { auth } from '../firebase/FirebaseConfig';
import { signOut } from "firebase/auth";


function Logout() {  

  const logout = () => {
    signOut(auth).catch((error) => {
      // Catch error
    });
  }

  return (
    <div>      
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout