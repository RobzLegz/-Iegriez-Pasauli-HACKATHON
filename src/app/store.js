import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../features/gameSlice";
import userReducer from "../features/userSlice";
import secondStageReducer from "../features/secondStageSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    user: userReducer,
    secondStage: secondStageReducer,
  },
});
