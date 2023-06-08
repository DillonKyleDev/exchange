import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: 0,
  },
  reducers: {
    addUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1
    },
    removeUser: (state, action) => {
      state.value -= 1
    },
    setActiveUser: (state, action) => {
      state.value += action.payload
    },
  },
});

export const { addUser, removeUser, setActiveUser } = userSlice.actions

export default userSlice.reducer