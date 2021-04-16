import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    firstPartTheme: "",
  },
  reducers: {
    startGame: (state, action) => {
      state.firstPartTheme = action.payload;
    },
  },
});

export const { startGame } = gameSlice.actions;

export const selectTheme = (state) => state.game.firstPartTheme;

export default gameSlice.reducer;
