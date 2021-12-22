import { createSlice } from "@reduxjs/toolkit";

const toggleViewSlice = createSlice({
  name: "toggleView",
  initialState: {
    isFriendsView: true,
  },
  reducers: {
    friendsView: (state) => {
      state.isFriendsView = true;
    },
    
    chatView: (state) => {
      state.isFriendsView = false;
    },
  },
});

export const { friendsView, chatView } = toggleViewSlice.actions;

export default toggleViewSlice.reducer;
