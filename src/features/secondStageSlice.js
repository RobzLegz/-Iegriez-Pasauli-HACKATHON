import { createSlice } from "@reduxjs/toolkit";

export const secondStageSlice = createSlice({
  name: "secondStage",
  initialState: {
    started: false,
    allQuestions: [],
    activeQ: "",
    activeCorrectAnswer: "",
    activeAnswers: [],
  },
  reducers: {
    startSecondStage: (state) => {
      state.started = true;
    },
    setAllQs: (state, action) => {
      state.allQuestions = action.payload;
    },
    setActiveQuestion: (state, action) => {
      state.activeQ = action.payload;
    },
    setActiveAnswers: (state, action) => {
      state.activeAnswers = action.payload;
    },
    setActiveCorrectAnswer: (state, action) => {
      state.activeCorrectAnswer = action.payload;
    },   
  },
});

export const { 
  startSecondStage, 
  setAllQs, 
  setActiveQuestion, 
  setActiveAnswers, 
  setActiveCorrectAnswer,
} = secondStageSlice.actions;

export const checkSecondStage = (state) => state.secondStage.started;
export const selectAllQuestions = (state) => state.secondStage.allQuestions;
export const selectActiveQuestion = (state) => state.secondStage.activeQ;
export const selectActiveAnswers = (state) => state.secondStage.activeAnswers;
export const selectActiveCorrectAnswer = (state) => state.secondStage.activeCorrectAnswer;

export default secondStageSlice.reducer;
