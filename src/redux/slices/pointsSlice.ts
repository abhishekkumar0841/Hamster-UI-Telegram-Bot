import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 0,
};

const pointsSlice = createSlice({
  name: "points",
  initialState: initialState,
  reducers: {
    setPoints: (state, action) => {
      state.points = action.payload;
    },
    incrementPoints: (state)=>{
      state.points += 1;
    }
  },
});

export const { setPoints, incrementPoints } = pointsSlice.actions;
export default pointsSlice.reducer;
