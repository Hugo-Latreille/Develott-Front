import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./../pages/Login/authSlice";
//? RTK Query
import { emptySplitApi } from "../API/APIslice";

export const store = configureStore({
	reducer: {
		[emptySplitApi.reducerPath]: emptySplitApi.reducer,
		auth: loginReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(emptySplitApi.middleware),
});
