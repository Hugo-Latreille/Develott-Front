import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	displayEditGitLink: false,
	displayEditDiscordLink: false,
	displayEditSlackLink: false,
	displayEditTrelloLink: false,
	displayMaincontent: "main",
	displayMain: true,
	projectGithub: "",
	projectDiscord: "",
	projectSlack: "",
	projectTrello: "",
};

export const dashboardSlice = createSlice({
	name: "dashboard",
	initialState,
	reducers: {
		setDisplayEdit: (state, action) => {
			state[action.payload.name] = !state[action.payload.name];
		},
		setDisplayMaincontent: (state, action) => {
			state.displayMaincontent = action.payload;
		},
		setProjectData: (state, action) => {
			state[action.payload.name] = action.payload.value;
		},
	},
});

export const { setDisplayEdit, setDisplayMaincontent, setProjectData } =
	dashboardSlice.actions;

export default dashboardSlice.reducer;
