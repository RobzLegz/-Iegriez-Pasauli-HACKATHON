import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    firstPartTheme: "",
    activeThemeImage: "",
    themeQuestions: [],
    gameSeconds: 0,
    gameMinutes: 15,
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
    addSecond: (state) => {
      if(state.gameSeconds === 0){
        state.gameSeconds = 59;
        state.gameSeconds -= 1;
        state.gameMinutes -= 1;
      }else{
        state.gameSeconds -= 1;
      }
    },
  },
});

export const { startGame, findImage, addThemeQuestions, addSecond } = gameSlice.actions;

export const selectTheme = (state) => state.game.firstPartTheme;
export const selectThemeImage = (state) => state.game.activeThemeImage;
export const selectQuestions = (state) => state.game.themeQuestions;
export const selectGameSeconds = (state) => state.game.gameSeconds;
export const selectGameMinutes = (state) => state.game.gameMinutes;

export default gameSlice.reducer;
