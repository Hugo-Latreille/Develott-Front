import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	id: "",
	firstname: "",
	lastname: "",
	password: "",
	passwordConfirm: "",
	email: "",
	isLogged: false,
	isLoggingActive: true,
	test: false,
};

export const authSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		handleChange: (state, action) => {
			state[action.payload.name] = action.payload.value;
		},
		clearInputs: (state) => {
			state.firstname = "";
			state.lastname = "";
			state.password = "";
			state.passwordConfirm = "";
			state.email = "";
		},
		toggleLoggingActive: (state) => {
			state.isLoggingActive = !state.isLoggingActive;
		},
	},
});

export const { handleChange, toggleLoggingActive, clearInputs, handleTest } =
	authSlice.actions;

export default authSlice.reducer;
