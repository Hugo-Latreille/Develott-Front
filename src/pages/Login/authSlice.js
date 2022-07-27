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
	loggingModalOpen: false,
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
			state.isLogged = true;
		},
		logOut: (state) => {
			state.email = "";
			state.token = "";
			state.isLogged = false;
		},
		toggleLoggingModalOpen: (state) => {
			state.loggingModalOpen = !state.loggingModalOpen;
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
	toggleLoggingModalOpen,
} = authSlice.actions;

export default authSlice.reducer;
