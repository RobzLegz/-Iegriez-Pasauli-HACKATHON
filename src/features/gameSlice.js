import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    firstPartTheme: "",
    firstPartQuestions: false,
    activeThemeImage: "",
  },
  reducers: {
    startGame: (state, action) => {
      state.firstPartTheme = action.payload;
    },
    popupQuestions: (state, action) => {
      state.firstPartQuestions = action.payload;
    },
    findImage: (state, action) => {
      state.activeThemeImage = action.payload;
    },
  },
});

export const { startGame, popupQuestions, findImage } = gameSlice.actions;

export const selectTheme = (state) => state.game.firstPartTheme;
export const questionPopup = (state) => state.game.firstPartQuestions;
export const selectThemeImage = (state) => state.game.activeThemeImage;

export default gameSlice.reducer;
