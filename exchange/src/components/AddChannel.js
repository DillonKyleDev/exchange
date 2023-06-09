import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addChannel } from '../redux/channelSlice';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../firebase/FirebaseConfig';


function AddChannel() {  
  const [ channelName, setChannelName ] = useState("");  
  const dispatch = useDispatch();

  const handleChannel = async () => {
    await setDoc(doc(db, "channels", channelName), {
      channelName: channelName
    });    
    
    dispatch(addChannel(channelName));
  }

  return (
    <div>
      <input placeholder='Channel Name...' value={channelName} onChange={(e) => setChannelName(e.target.value)}></input>
      <button onClick={() => handleChannel()}>Add Channel</button>
    </div>
  )
}

export default AddChannel