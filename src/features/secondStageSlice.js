import { createSlice } from "@reduxjs/toolkit";

export const secondStageSlice = createSlice({
  name: "secondStage",
  initialState: {
    started: false,
  },
  reducers: {
    startSecondStage: (state) => {
      state.started = true;
    },
  },
});

export const { startSecondStage } = secondStageSlice.actions;

export const checkSecondStage = (state) => state.secondStage.started;

export default secondStageSlice.reducer;
