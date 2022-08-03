import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	teamModalIsOpen: false,
	projectId: "",
	userJobChoice: "",
	selectTeam: [],
};

export const teamCreationSlice = createSlice({
	name: "teamCreation",
	initialState,
	reducers: {
		toggleTeamCreationModalOpen: (state) => {
			state.teamModalIsOpen = !state.teamModalIsOpen;
		},
		setProjectId: (state, action) => {
			state.projectId = action.payload;
		},
		setUserChoice: (state, action) => {
			state.userJobChoice = action.payload;
		},
		setTeam: (state, action) => {
			state.selectTeam = [...state.selectTeam, action.payload];
		},
		removeTeam: (state, action) => {
			state.selectTeam = state.selectTeam.filter((id) => id !== action.payload);
		},
	},
});

export const {
	toggleTeamCreationModalOpen,
	setProjectId,
	setUserChoice,
	setTeam,
	removeTeam,
} = teamCreationSlice.actions;

export default teamCreationSlice.reducer;
