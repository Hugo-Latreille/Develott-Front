import { configureStore } from "@reduxjs/toolkit";
//? RTK reducers
import loginReducer from "./../pages/Login/authSlice";
import createProjectSlice from "../pages/Project/createProjectSlice";
import updtateUserProfileSlice from "../pages/Profiles/updtateUserProfileSlice";
//? RTK Query
import { emptySplitApi } from "../API/APIslice";
import userProfileSlice from "../pages/Profiles/userProfileSlice";
import showProjectSlice from "../pages/Project/showProjectSlice";

export const store = configureStore({
	reducer: {
		[emptySplitApi.reducerPath]: emptySplitApi.reducer,
		auth: loginReducer,
		createProject: createProjectSlice,
		showProject: showProjectSlice,
		updateProfile: updtateUserProfileSlice,
		userProfile: userProfileSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(emptySplitApi.middleware),
});
