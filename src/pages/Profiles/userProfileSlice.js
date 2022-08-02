import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	displayAllDescription: false,
	isEditDescriptionActive: false,
	isEditTechnologiesActive: false,
	isEditUserPictureActive: false,
	isEditUserInfos: false,
	userTechnologiesData: [],
	userJobData: "",
	userImg: "",
	userDescription: "",
	userCity: "",
	userGitHub: "",
	userLinkedin: "",
	userPortfolio: "",
};

export const userProfile = createSlice({
	name: "userProfile",
	initialState,
	reducers: {
		setData: (state, action) => {
			state[action.payload.name] = [
				...state[action.payload.name],
				action.payload.data,
			];
		},
		setJobData: (state, action) => {
			state.userJobData = action.payload;
		},
		setDisplayEdit: (state, action) => {
			state[action.payload.name] = !state[action.payload.name];
			if (action.payload.name === "isEditDescriptionActive") {
				state.displayAllDescription = !state.displayAllDescription;
			}
		},
		removeData: (state, action) => {
			const updateData = state[action.payload.name].filter(
				(item) => item[action.payload.field] !== action.payload.value
			);
			state[action.payload.name] = updateData;
		},
		setNewUserImg: (state, action) => {
			state.userImg = action.payload;
		},
		setUserDescription: (state, action) => {
			state.userDescription = action.payload;
		},
		setUserData: (state, action) => {
			state[action.payload.name] = action.payload.value;
		},
	},
});

export const {
	setData,
	setDisplayEdit,
	removeData,
	setJobData,
	setNewUserImg,
	setUserDescription,
	setUserData,
} = userProfile.actions;

export default userProfile.reducer;
