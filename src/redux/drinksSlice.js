import { createSlice } from "@reduxjs/toolkit";

const drinksSlice = createSlice({
  name: "drinks",
  initialState: {
    data: [],
  },
  reducers: {
    addDrinks: (state, action) => {
      state.data = action.payload
    },
  },
});


export const drinksActions = drinksSlice.actions;
export const drinksReducer = drinksSlice.reducer;