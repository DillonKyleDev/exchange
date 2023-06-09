import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './loginSlice';
import channelReducer from './channelSlice';

const store = configureStore({
  reducer: {    
    user: loginReducer,
    channels: channelReducer
  }
});

export default store;