import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./../pages/Login/authSlice";
//? RTK Query
import { emptySplitApi } from "../API/APIslice";
import createProjectSlice from "../pages/Project/createProjectSlice";

export const store = configureStore({
  reducer: {
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
    auth: loginReducer,
    createProject: createProjectSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
});
