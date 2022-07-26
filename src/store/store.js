import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./../pages/Login/authSlice";
//? RTK Query
import { emptySplitApi } from "../API/APIslice";
import projectSlice from "../pages/Project/projectSlice";

export const store = configureStore({
  reducer: {
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
    auth: loginReducer,
    project: projectSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
});
