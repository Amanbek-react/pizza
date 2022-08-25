import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { base_url } from "../constants/constants";

export const getAllDrinks = createAsyncThunk(
  "drinks/GET_ALL_DRINKS",
  async () => {
    const res = await fetch(base_url + "drinks");
    const data = await res.json();
    return data;
  }
);

const drinksSlice = createSlice({
  name: "drinks",
  initialState: {
    data: [],
    isLoading: true,
  },
  reducers: {
    addDrinks: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllDrinks.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload;
    });
  },
});

export const drinksActions = drinksSlice.actions;
export const drinksReducer = drinksSlice.reducer;
