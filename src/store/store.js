import { configureStore } from "@reduxjs/toolkit";
//? RTK reducers
import loginReducer from "./../pages/Login/authSlice";
import createProjectSlice from "../pages/Project/createProjectSlice";
import updtateUserProfileSlice from "../pages/Profiles/updtateUserProfileSlice";
//? RTK Query
import { emptySplitApi } from "../API/APIslice";
import userProfileSlice from "../pages/Profiles/userProfileSlice";
import projectSlice from "../pages/Project/projectSlice";
import appSlice from "../pages/App/appSlice";

export const store = configureStore({
	reducer: {
		[emptySplitApi.reducerPath]: emptySplitApi.reducer,
		app: appSlice,
		auth: loginReducer,
		createProject: createProjectSlice,
		project: projectSlice,
		updateProfile: updtateUserProfileSlice,
		userProfile: userProfileSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			emptySplitApi.middleware
		),
});
