import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayEditGitLink: false,
  displayEditDiscordLink: false,
  displayEditSlackLink: false,
  displayEditTrelloLink: false,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDisplayEdit: (state, action) => {
      state[action.payload.name] = !state[action.payload.name];
    },
  },
});

export const { setDisplayEdit } = dashboardSlice.actions;

export default dashboardSlice.reducer;
