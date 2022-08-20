import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";
import { basketReducer } from "./basketSlice";
import { pizzasReducer } from "./pizzasSlice";

const reducers = combineReducers({
    pizzas: pizzasReducer,
    basket: basketReducer,
});

export const store = configureStore({
  reducer: reducers,
});


store.subscribe(() => {
  const redux = store.getState();
  console.log(redux);
  localStorage.setItem("basket", JSON.stringify(redux.basket.data))
});
