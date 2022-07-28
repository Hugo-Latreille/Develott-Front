import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	adaptDescriptionContainer: false,
	displayEditDescriptionForm: false,
	displayEditJobForm: false,
	displayEditTechnologies: false,
	displayEditDates: false,
	technologiesData: [],
	jobsData: [],
	startDate: "",
	endDate: "",
};

export const projectSlice = createSlice({
	name: "showProject",
	initialState,
	reducers: {
		setData: (state, action) => {
			state[action.payload.name] = [
				...state[action.payload.name],
				action.payload.data,
			];
		},
		setDisplayEdit: (state, action) => {
			state[action.payload.name] = !state[action.payload.name];
			if (action.payload.name === "displayEditDescriptionForm") {
				state.adaptDescriptionContainer = !state.adaptDescriptionContainer;
			}
		},
		removeData: (state, action) => {
			const updateData = state[action.payload.name].filter(
				(item) => item[action.payload.field] !== action.payload.value
			);
			state[action.payload.name] = updateData;
		},
		changeDate: (state, action) => {
			state[action.payload.name] = action.payload.value;
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
	setData,
	setDisplayEdit,
	removeData,
	changeDate,
} = projectSlice.actions;

export default projectSlice.reducer;
