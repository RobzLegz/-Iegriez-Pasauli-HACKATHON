import { createSlice } from "@reduxjs/toolkit";

export const secondStageSlice = createSlice({
  name: "secondStage",
  initialState: {
    started: false,
    allQuestions: [],    
  },
  reducers: {
    startSecondStage: (state) => {
      state.started = true;
    },
    setAllQs: (state, action) => {
      state.allQuestions = action.payload;
    },
  },
});

export const { startSecondStage, setAllQs } = secondStageSlice.actions;

export const checkSecondStage = (state) => state.secondStage.started;
export const selectAllQuestions = (state) => state.secondStage.allQuestions;

export default secondStageSlice.reducer;
