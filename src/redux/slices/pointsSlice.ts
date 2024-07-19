import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 0,
};

const pointsSlice = createSlice({
  name: "points",
  initialState: initialState,
  reducers: {
    setPoints: (state) => {
      state.points += 1;
    },
  },
});

export const { setPoints } = pointsSlice.actions;
export default pointsSlice.reducer;
