import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayEditGitLink: false,
  displayEditDiscordLink: false,
  displayEditSlackLink: false,
  displayEditTrelloLink: false,
  displayMaincontent: "main",
  displayMain: true,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDisplayEdit: (state, action) => {
      state[action.payload.name] = !state[action.payload.name];
    },
    setDisplayMaincontent: (state, action) => {
      state.displayMaincontent = action.payload;
    },
  },
});

export const { setDisplayEdit, setDisplayMaincontent } = dashboardSlice.actions;

export default dashboardSlice.reducer;
