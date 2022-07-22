import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userId: "",
	firstname: "",
	lastname: "",
	password: "",
	passwordConfirm: "",
	email: "",
	isLogged: false,
	isLoggingActive: true,
	token: "",
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
		setCredentials: (state, action) => {
			const { email, accessToken } = action.payload;
			state.email = email;
			state.token = accessToken;
		},
		logOut: (state, action) => {
			state.email = null;
			state.token = null;
		},
	},
});

export const {
	handleChange,
	toggleLoggingActive,
	clearInputs,
	handleTest,
	setCredentials,
	logOut,
} = authSlice.actions;

export default authSlice.reducer;
