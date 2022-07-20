import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./../pages/Login/loginSlice";
//? RTK Query
import { emptySplitApi } from "../API/APIslice";

export const store = configureStore({
	reducer: {
		[emptySplitApi.reducerPath]: emptySplitApi.reducer,
		login: loginReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(emptySplitApi.middleware),
});
