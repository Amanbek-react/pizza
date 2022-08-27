import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../api/Api";

export const getAllDrinks = createAsyncThunk(
  "drinks/GET_ALL_DRINKS",
  async () => {
    const res = await Api.getDrinks()
    return res.data;
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
