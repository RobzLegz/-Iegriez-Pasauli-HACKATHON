import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    points: 0,
  },
  reducers: {
    addPoints: (state) => {
      state.points += 5;
    },
    addPoint: (state) => {
      state.points += 1;
    },
    resetPoints: (state) => {
      state.points = 0;
    }
  },
});

export const { addPoints, addPoint, resetPoints } = userSlice.actions;

export const selectPoints = (state) => state.user.points;

export default userSlice.reducer;
