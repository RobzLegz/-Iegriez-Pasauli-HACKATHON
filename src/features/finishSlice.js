import { createSlice } from "@reduxjs/toolkit";

export const finishSlice = createSlice({
  name: "finish",
  initialState: {
    hasfinished: false,
    lastTheme: ""
  },
  reducers: {
    finish: (state) => {
      state.hasfinished = true;
    },
    setPreviousTheme: (state, action) => {
      state.hasfinished = false;
      state.lastTheme = action.payload;
    }
  },
});

export const { finish, setPreviousTheme } = finishSlice.actions;

export const selecthasfinished = (state) => state.finish.hasfinished;
export const selectLastTheme = (state) => state.finish.lastTheme;

export default finishSlice.reducer;
