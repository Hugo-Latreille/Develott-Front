import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teamModalIsOpen: false,
};

export const teamCreationSlice = createSlice({
  name: "teamCreation",
  initialState,
  reducers: {
    toggleTeamCreationModalOpen: (state, action) => {
      state.teamModalIsOpen = !state.teamModalIsOpen;
    },
  },
});

export const { toggleTeamCreationModalOpen } = teamCreationSlice.actions;

export default teamCreationSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   teamModalIsOpen: false,
// };

// export const teamCreationSlice = createSlice({
//   name: "teamCreation",
//   initialState,
//   reducers: {
//     toggleTeamCreationModalOpen: (state) => {
//       state.teamModalIsOpen = !state.teamModalIsOpen;
//     },
//   },
// });

// export const { toggleTeamCreationModalOpen } = teamCreationSlice.actions;

// export default teamCreationSlice.reducer;
