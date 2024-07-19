import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 0,
  currPoints: 0,
};

const pointsSlice = createSlice({
  name: "points",
  initialState: initialState,
  reducers: {
    setPoints: (state) => {
      state.points += 1;
    },
    getCurrPoints: (state, action)=>{
      state.currPoints = action.payload
    }
  },
});

export const { setPoints, getCurrPoints } = pointsSlice.actions;
export default pointsSlice.reducer;
