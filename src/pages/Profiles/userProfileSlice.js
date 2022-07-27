import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayAllDescription: false,
};

export const userProfile = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setDisplayAllDescription: (state, action) => {
      state.displayAllDescription = !state.displayAllDescription;
    },
  },
});

export const { setDisplayAllDescription } = userProfile.actions;

export default userProfile.reducer;
