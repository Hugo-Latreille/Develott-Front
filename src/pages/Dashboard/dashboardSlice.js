import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.sideBarIsOpen = !state.sideBarIsOpen;
    },
  },
});

export const { toggleSideBar } = dashboardSlice.actions;

export default dashboardSlice.reducer;
