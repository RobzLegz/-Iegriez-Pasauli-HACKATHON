import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../features/gameSlice";
import userReducer from "../features/userSlice";
import secondStageReducer from "../features/secondStageSlice";
import finishReducer from "../features/finishSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    user: userReducer,
    secondStage: secondStageReducer,
    finish: finishReducer
  },
});
