import { createSlice } from "@reduxjs/toolkit";

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState: {
    data: [],
  },
  reducers: {
    addPizzas: (state, action) => {
      console.log(action.payload);
      state.data = action.payload
    },
  },
});


export const pizzasActions = pizzasSlice.actions;
export const pizzasReducer = pizzasSlice.reducer;