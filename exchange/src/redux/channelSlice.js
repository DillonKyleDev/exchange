import { createSlice } from '@reduxjs/toolkit'

export const channelSlice = createSlice({
  name: 'channels',
  initialState: {
    channels: []
  },
  reducers: {
    addChannel: (state, action) => {
      state.channels.push(action.payload);
    },
    removeChannel: (state, action) => {
      state.channels = state.channels.filter((channel) => {        
        return channel !== action.payload;
      })
    },
    setChannels: (state, action) => {
      state.channels = action.payload;
    }
  }
})

export const { addChannel, removeChannel, setChannels } = channelSlice.actions

export default channelSlice.reducer