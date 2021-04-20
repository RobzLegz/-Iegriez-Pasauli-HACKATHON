import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    firstPartTheme: "",
    activeThemeImage: "",
    themeQuestions: [],
  },
  reducers: {
    startGame: (state, action) => {
      state.firstPartTheme = action.payload;
    },
    findImage: (state, action) => {
      state.activeThemeImage = action.payload;
    },
    addThemeQuestions: (state, action) => {
      state.themeQuestions = action.payload;
    },
    resetGame: (state) => {
      state.firstPartTheme = "";
      state.activeThemeImage = "";
      state.themeQuestions = [];
    },
  },
});

export const { startGame, findImage, addThemeQuestions, resetGame } = gameSlice.actions;

export const selectTheme = (state) => state.game.firstPartTheme;
export const selectThemeImage = (state) => state.game.activeThemeImage;
export const selectQuestions = (state) => state.game.themeQuestions;

export default gameSlice.reducer;
