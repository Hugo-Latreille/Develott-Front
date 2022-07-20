import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	firstname: "",
	lastname: "",
	password: "",
	passwordConfirm: "",
	email: "",
	isLogged: false,
	isLoggingActive: true,
	test: false,
};

export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		handleChange: (state, action) => {
			state[action.payload.name] = action.payload.value;
		},
		// handleTest: (state) => {
		// 	state.test = !state.test;
		// },
		clearInputs: () => {
			return initialState;
		},
		toggleLoggingActive: (state) => {
			state.isLoggingActive = !state.isLoggingActive;
		},
	},
});

export const { handleChange, toggleLoggingActive, clearInputs, handleTest } =
	loginSlice.actions;

export default loginSlice.reducer;
