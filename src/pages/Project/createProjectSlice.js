import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	activeForm: "informations",
	name: "",
	exerpt: "",
	description: "",
	picture_project: "",
	start_date: "",
	end_date: "",
	technologiesData: [],
	jobsData: [],
};

export const projetSlice = createSlice({
	name: "project",
	initialState,
	reducers: {
		setActiveForm: (state, action) => {
			state.activeForm = action.payload;
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
		handleChange: (state, action) => {
			state[action.payload.name] = action.payload.value;
		},
	},
});

export const {
	setActiveForm,
	setTechnologiesData,
	removeTechnologyData,
	setJobsData,
	removeJobData,
	handleChange,
} = projetSlice.actions;

export default projetSlice.reducer;
