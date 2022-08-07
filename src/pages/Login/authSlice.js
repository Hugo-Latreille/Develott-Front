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
	passwordValidationWidth: 0,
	newPasswordValidationWidth: 0,
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
			state.username_gith = "";
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
		setPasswordValidationWidth: (state, action) => {
			state.passwordValidationWidth = Number(action.payload);
		},
		setNewPasswordValidationWidth: (state, action) => {
			state.newPasswordValidationWidth = Number(action.payload);
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
	setPasswordValidationWidth,
	setNewPasswordValidationWidth,
} = authSlice.actions;

export default authSlice.reducer;
