import { createSlice } from "@reduxjs/toolkit";

export const secondStageSlice = createSlice({
  name: "secondStage",
  initialState: {
    started: false,
    secondStageQuestions: [],
  },
  reducers: {
    startSecondStage: (state) => {
      state.started = true;
    },
    findSecondStageQuestions: (state, action) => {
      state.secondStageQuestions = action.payload;
    }
  },
});

export const { startSecondStage, findSecondStageQuestions } = secondStageSlice.actions;

export const checkSecondStage = (state) => state.secondStage.started;
export const selectSecondStageQuestions = (state) => state.secondStage.secondStageQuestions;

export default secondStageSlice.reducer;
