import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeChannel } from '../redux/channelSlice';
import { doc, deleteDoc } from "firebase/firestore"; 
import { db } from '../firebase/FirebaseConfig';


function RemoveChannel() {  
  const [ channelName, setChannelName ] = useState("");  
  const dispatch = useDispatch();

  const handleChannel = async () => {
    await deleteDoc(doc(db, "channels", channelName));    
    dispatch(removeChannel(channelName));
  }

  return (
    <div>
      <input placeholder='Channel Name...' value={channelName} onChange={(e) => setChannelName(e.target.value)}></input>
      <button onClick={() => handleChannel()}>Remove Channel</button>
    </div>
  )
}

export default RemoveChannel