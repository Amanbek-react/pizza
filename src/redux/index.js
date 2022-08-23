import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";
import { basketReducer } from "./basketSlice";
import { drinksReducer } from "./drinksSlice";
import { pizzasReducer } from "./pizzasSlice";
import { testReducer } from "./testSllice";

const reducers = combineReducers({
    pizzas: pizzasReducer,
    basket: basketReducer,
    drinks: drinksReducer,
    test: testReducer,
});

export const store = configureStore({
  reducer: reducers,
});


store.subscribe(() => {
  const redux = store.getState();
  console.log(redux);
  localStorage.setItem("basket", JSON.stringify(redux.basket.data))
});
