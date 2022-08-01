import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sideBarIsOpen: false,
	displayDarkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
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
		setDisplayDarkMode: (state) => {
			state.displayDarkMode = !state.displayDarkMode;
			localStorage.setItem("darkMode", state.displayDarkMode);
		},
	},
});

export const { toggleSideBar, closeSideBar, setDisplayDarkMode } =
	appSlice.actions;

export default appSlice.reducer;
