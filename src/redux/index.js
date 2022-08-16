import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";
import { basketReducer } from "./basketSlice";

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState: {
    data: [],
  },
  reducers: {
    addPizzas: (state) => {
      console.log(state);
    },
  },
});


const reducers = combineReducers({
    pizzas: pizzasSlice.reducer,
    basket: basketReducer,
});

export const store = configureStore({
  reducer: reducers,
});

















window.store = store;

console.log(store);
console.log(store.getState());
