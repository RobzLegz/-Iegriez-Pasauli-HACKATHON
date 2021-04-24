import { createSlice } from "@reduxjs/toolkit";

export const finishSlice = createSlice({
  name: "finish",
  initialState: {
    hasfinished: false,
    timeEnded: false,
  },
  reducers: {
    finish: (state) => {
      state.hasfinished = true;
    },
    stopGame: (state) => {
      state.timeEnded = true;
    }
  },
});

export const { finish, stopGame } = finishSlice.actions;

export const selecthasfinished = (state) => state.finish.hasfinished;
export const selectGameEnded = (state) => state.finish.timeEnded;

export default finishSlice.reducer;
