import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: {
    name: "",
    surname: "",
  },
  reducers: {
    // code here
    setName : (state, action) => {
      state.name = action.payload
    }
  },
});


export const testActions = testSlice.actions;
export const testReducer = testSlice.reducer;