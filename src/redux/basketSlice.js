import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basket",
    initialState: {
      data: JSON.parse(localStorage.getItem("basket")) || [],
    },
    reducers: {
      addToBasket: (state, action) => {
          state.data.push(action.payload)
      },
      removeFromBasket: () => {
        // TODO
      }
    },
  });
  
  export const basketActions = basketSlice.actions;
  export const basketReducer = basketSlice.reducer;
  