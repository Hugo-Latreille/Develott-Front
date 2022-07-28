import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sideBarIsOpen: false,
};

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		toggleSideBar: (state, action) => {
			state.sideBarIsOpen = !state.sideBarIsOpen;
			if (action) state.sideBarIsOpen = false;
		},
	},
});

export const { toggleSideBar } = appSlice.actions;

export default appSlice.reducer;
