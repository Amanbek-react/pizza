import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basket",
    initialState: {
      data: [],
    },
    reducers: {
      addToBasket: (state, action) => {
          console.log(state);
          // TODO: Logic here
          // code here
          state.data.push(action.payload)
      },
      removeFromBasket: () => {
        alert()
      }
    },
  });
  
  export const basketActions = basketSlice.actions;
  export const basketReducer = basketSlice.reducer;
  