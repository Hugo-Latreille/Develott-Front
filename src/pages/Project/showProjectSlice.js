import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adaptDescriptionContainer: false,
  displayEditDescriptionForm: false,
  displayEditTechnologies: true,
  technologiesData: [],
  jobsData: [],
};

export const showProjectSlice = createSlice({
  name: "showProject",
  initialState,
  reducers: {
    setDisplayEditDescription: (state, action) => {
      state.displayEditDescriptionForm = !state.displayEditDescriptionForm;
      state.adaptDescriptionContainer = !state.adaptDescriptionContainer;
    },
    setDisplayEditTechnologies: (state, action) => {
      state.displayEditTechnologies = !state.displayEditTechnologies;
    },
    setDisplayAllDescription: (state, action) => {
      state.adaptDescriptionContainer = !state.adaptDescriptionContainer;
    },
    setTechnologiesData: (state, action) => {
      state.technologiesData = [...state.technologiesData, action.payload];
    },
    removeTechnologyData: (state, action) => {
      const updateTechnologiesData = state.technologiesData.filter(
        (technologie) => {
          return technologie.name !== action.payload;
        }
      );
      state.technologiesData = updateTechnologiesData;
    },
    setJobsData: (state, action) => {
      state.jobsData = [...state.jobsData, action.payload];
    },
    removeJobData: (state, action) => {
      const updateJobsData = state.jobsData.filter((job) => {
        return job.id !== action.payload;
      });
      state.jobsData = updateJobsData;
    },
  },
});

export const {
  setDisplayEditDescription,
  setDisplayEditTechnologies,
  setDisplayAllDescription,
  setTechnologiesData,
  removeTechnologyData,
  setJobsData,
  removeJobData,
} = showProjectSlice.actions;

export default showProjectSlice.reducer;
