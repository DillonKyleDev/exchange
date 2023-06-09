// Firebase
import { auth } from './firebase/FirebaseConfig';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from './firebase/FirebaseConfig';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './redux/loginSlice';
import { addChannel } from './redux/channelSlice';

import './App.css';
import { useEffect } from 'react';
import Login from './components/Login.js';
import Logout from './components/Logout';
import AddChannel from './components/AddChannel';
import RemoveChannel from './components/RemoveChannel';
import Agora from './agora/Agora';



function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.user);

  useEffect(() => {
    // Fires when Firebase authenticated user changes
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {        
        // Add Google user to Redux store
        dispatch(login({
          uid: authUser.uid,
          image: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }));
        // Retrieve channels from Firebase DB
        setChannels();
      } else {        
        // Or logout of Firebase auth              
        dispatch(logout());
      }
    });
  }, [ dispatch ]);

  async function setChannels() {
    const querySnapshot = await getDocs(collection(db, "channels"));
        
    querySnapshot.forEach((doc) => {      
      dispatch(addChannel(doc.data().channelName));
    });
  }      

  return (
    <div className="app">
      { currentUser === null ? <Login /> : <Logout /> }   
      <AddChannel />   
      <RemoveChannel />
      <Agora />
    </div>
  );
}

export default App;
