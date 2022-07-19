import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	username: "",
	email: "",
	password: "",
	isLogged: "false",
	isLoggingActive: "true",
};

export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		handleChange: (state, action) => {
			state[action.payload.name] = action.payload.value;
		},
		clearInputs: () => {
			return initialState;
		},
		toggleLoggingActive: (state) => {
			state.isLoggingActive = !state.isLoggingActive;
		},
	},
});

export const { handleChange, toggleLoggingActive, clearInputs } =
	loginSlice.actions;

export default loginSlice.reducer;
