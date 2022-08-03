import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTechnology: "javascript",
};

export const searchbarSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearchTechnology: (state, action) => {
      state.searchTechnology = action.payload;
    },
  },
});

export const { setSearchTechnology } = searchbarSlice.actions;

export default searchbarSlice.reducer;
