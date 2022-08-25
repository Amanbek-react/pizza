import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../constants/constants";

export const getAllPizzas = createAsyncThunk(
  "pizzas/GET_ALL_PIZZAS",
  async () => {
    const res = await fetch(base_url + "pizza");
    const data = await res.json();
    return data
  }
);

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState: {
    data: [],
    isLoading: true,
  },
  reducers: {
    addPizzas: (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPizzas.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload;
    });
  }
});

export const pizzasActions = pizzasSlice.actions;
export const pizzasReducer = pizzasSlice.reducer;