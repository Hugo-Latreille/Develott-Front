import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  introIsOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebarintro",
  initialState,
  reducers: {
    toggleOpenIntro: (state) => {
      state.introIsOpen = !state.introIsOpen;
    },
  },
});

export const { toggleOpenIntro } = sidebarSlice.actions;

export default sidebarSlice.reducer;
