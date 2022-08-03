import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sideBarIsOpen: false,
	displayDarkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
	userFavorites: [],
	showFavorites: false,
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
		setFavorites: (state, action) => {
			state.userFavorites = action.payload;
		},
		addToFavorites: (state, action) => {
			state.userFavorites = [...state.userFavorites, action.payload.project];
			localStorage.setItem(
				`${action.payload.user}`,
				JSON.stringify(state.userFavorites)
			);
		},
		removeFromFavorites: (state, action) => {
			state.userFavorites = state.userFavorites.filter(
				(fav) => fav !== action.payload.project
			);
			localStorage.setItem(
				`${action.payload.user}`,
				JSON.stringify(state.userFavorites)
			);
		},
		toggleShowFavorites: (state) => {
			state.showFavorites = !state.showFavorites;
		},
	},
});

export const {
	toggleSideBar,
	closeSideBar,
	setDisplayDarkMode,
	setFavorites,
	addToFavorites,
	removeFromFavorites,
	toggleShowFavorites,
} = appSlice.actions;

export default appSlice.reducer;
