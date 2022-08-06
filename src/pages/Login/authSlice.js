import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userId: "",
	firstname: "",
	lastname: "",
	password: "",
	passwordConfirm: "",
	email: "",
	username_gith: "",
	isLogged: false,
	isLoggingActive: true,
	token: "",
	loggingModalOpen: false,
	passwordVisibility: false,
	registerPasswordVisibility: false,
	passwordValidity: {
		minChar: null,
		number: null,
		uppercase: null,
		specialChar: null,
	},
	passwordFocus: false,
};

const isNumberRegex = /\d/;
const specialCharacterRegex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const oneUppercase = /[A-Z]/;

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
		togglePasswordVisibility: (state) => {
			state.passwordVisibility = !state.passwordVisibility;
		},
		toggleRegisterVisibility: (state) => {
			state.registerPasswordVisibility = !state.registerPasswordVisibility;
		},
		setPasswordValidity: (state) => {
			state.passwordValidity = {
				minChar: state.password.length >= 8 ? true : false,
				number: isNumberRegex.test(state.password) ? true : false,
				uppercase: oneUppercase.test(state.password) ? true : false,
				specialChar: specialCharacterRegex.test(state.password) ? true : false,
			};
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
	togglePasswordVisibility,
	toggleRegisterVisibility,
	setPasswordValidity,
} = authSlice.actions;

export default authSlice.reducer;
