import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditDescriptionActive: false,
  isEditTechnologiesActive: false,
  userTechnologiesData: [],
};

export const updateUserProfile = createSlice({
  name: "updateUserProfile",
  initialState,
  reducers: {
    setIsEditDescriptionActive: (state, action) => {
      state.isEditDescriptionActive = !state.isEditTechnologiesActive;
    },
    setIsEditTechnologiesActive: (state, action) => {
      state.isEditTechnologiesActive = !state.isEditTechnologiesActive;
    },
    setUserTechnologiesData: (state, action) => {
      state.userTechnologiesData = [
        ...state.userTechnologiesData,
        action.payload,
      ];
    },
    removeUserTechnologyData: (state, action) => {
      const updateTechnologiesData = state.userTechnologiesData.filter(
        (technologie) => {
          return technologie.name !== action.payload;
        }
      );
      state.userTechnologiesData = updateTechnologiesData;
    },
  },
});

export const {
  setIsEditDescriptionActive,
  setIsEditTechnologiesActive,
  setUserTechnologiesData,
  removeUserTechnologyData,
} = updateUserProfile.actions;

export default updateUserProfile.reducer;
