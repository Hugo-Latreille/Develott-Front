import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	searchTechnology: "",
	searchJob: "",
	searchProjectName: "",
	searchDate: "",
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
    setSearchProjectName: (state, action) => {
      state.searchProjectName = action.payload;
    },
    setSearchProjectDate: (state, action) => {
      state.searchDate = action.payload;
    },
    initResearch: (state, action) => {
      state.searchTechnology = action.payload;
      state.searchJob = action.payload;
      state.searchDate = action.payload;
      state.searchProjectName = action.payload;
    },
  },

});

export const {
	setSearchTechnology,
	setSearchJob,
	initResearch,
	setSearchProjectDate,
	setSearchProjectName,
} = searchbarSlice.actions;

export default searchbarSlice.reducer;
