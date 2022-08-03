import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	teamModalIsOpen: false,
	projectId: "",
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
	},
});

export const { toggleTeamCreationModalOpen, setProjectId } =
	teamCreationSlice.actions;

export default teamCreationSlice.reducer;
