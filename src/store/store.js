import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./../pages/Login/authSlice";
//? RTK Query
import { emptySplitApi } from "../API/APIslice";
import createProjectSlice from "../pages/Project/createProjectSlice";
import updtateUserProfileSlice from "../pages/Profiles/updtateUserProfileSlice";

export const store = configureStore({
  reducer: {
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
    auth: loginReducer,
    createProject: createProjectSlice,
    updateProfile: updtateUserProfileSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
});
