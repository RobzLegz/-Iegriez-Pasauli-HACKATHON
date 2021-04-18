import { createSlice } from "@reduxjs/toolkit";

export const finishSlice = createSlice({
  name: "finish",
  initialState: {
    hasfinished: false,
  },
  reducers: {
    finish: (state) => {
      state.hasfinished = true;
    },
  },
});

export const { finish } = finishSlice.actions;

export const selecthasfinished = (state) => state.finish.hasfinished;

export default finishSlice.reducer;
