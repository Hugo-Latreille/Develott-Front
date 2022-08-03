import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  charteModalIsOpen: false,
};

export const modalSlice = createSlice({
  name: "charte",
  initialState,
  reducers: {
    toggleCharteModalOpen: (state) => {
      state.charteModalIsOpen = !state.charteModalIsOpen;
    },
  },
});

export const { toggleCharteModalOpen } = modalSlice.actions;

export default modalSlice.reducer;
