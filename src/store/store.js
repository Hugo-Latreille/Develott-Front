import { configureStore } from "@reduxjs/toolkit";
//? RTK reducers
import loginReducer from "./../pages/Login/authSlice";
import createProjectSlice from "../pages/Project/createProjectSlice";
//? RTK Query
import { emptySplitApi } from "../API/APIslice";
import userProfileSlice from "../pages/Profiles/userProfileSlice";
import projectSlice from "../pages/Project/projectSlice";
import appSlice from "../pages/App/appSlice";
import dashboardSlice from "../pages/Dashboard/dashboardSlice";
import teamCreationSlice from "../pages/TeamCreation/teamCreationSlice";
import modalSlice from "../components/Modal-Charte/modalSlice";

export const store = configureStore({
  reducer: {
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
    app: appSlice,
    auth: loginReducer,
    createProject: createProjectSlice,
    project: projectSlice,
    dashboard: dashboardSlice,
    userProfile: userProfileSlice,
    teamCreation: teamCreationSlice,
    modal: modalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      emptySplitApi.middleware
    ),
});
