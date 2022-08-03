import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTechnology: "",
  searchJob: "",
};

export const searchbarSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearchTechnology: (state, action) => {
      state.searchTechnology = action.payload;
    },
    setSearchJob: (state, action) => {
      state.searchJob = action.payload;
    },
  },
});

export const { setSearchTechnology, setSearchJob } = searchbarSlice.actions;

export default searchbarSlice.reducer;
