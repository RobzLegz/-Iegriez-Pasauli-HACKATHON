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
  },
});

export const { addPoints } = userSlice.actions;

export const selectPoints = (state) => state.user.points;

export default userSlice.reducer;
