import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api/Api";

export const getAllPizzas = createAsyncThunk(
  "pizzas/GET_ALL_PIZZAS",
  async () => {
    const res = await Api.getPizza()
    return res.data
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