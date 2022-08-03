import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	teamModalIsOpen: false,
	projectId: "",
	userJobChoice: "",
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
	},
});

export const { toggleTeamCreationModalOpen, setProjectId, setUserChoice } =
	teamCreationSlice.actions;

export default teamCreationSlice.reducer;
