import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	adaptDescriptionContainer: false,
	displayEditDescriptionForm: false,
	displayEditJobForm: false,
	displayEditTechnologies: false,
	displayEditJobs: false,
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
		setDisplayEditJobs: (state, action) => {
			state.displayEditJobForm = !state.displayEditJobForm;
		},
		setDisplayAllDescription: (state, action) => {
			state.adaptDescriptionContainer = !state.adaptDescriptionContainer;
		},
		setTechnologiesData: (state, action) => {
			state.technologiesData = [...state.technologiesData, action.payload];
		},
		setJobsData: (state, action) => {
			state.jobsData = [...state.jobsData, action.payload];
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
	setDisplayEditJobs,
	setDisplayAllDescription,
	setTechnologiesData,
	removeTechnologyData,
	setJobsData,
	removeJobData,
} = showProjectSlice.actions;

export default showProjectSlice.reducer;
