import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sideBarIsOpen: false,
};

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		toggleSideBar: (state) => {
			state.sideBarIsOpen = !state.sideBarIsOpen;
		},
		closeSideBar: (state) => {
			state.sideBarIsOpen = false;
		},
	},
});

export const { toggleSideBar, closeSideBar } = appSlice.actions;

export default appSlice.reducer;
