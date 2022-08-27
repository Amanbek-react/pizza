import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { useEffect } from "react";
import AdminPage from "./pages/AdminPage/AdminPage";
import CreateNewElement from "./pages/CreateNewElement/CreateNewElement";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "./redux/pizzasSlice";
import { getAllDrinks } from "./redux/drinksSlice";

function App() {
  const dispatch = useDispatch();
  const isPizzasLoading = useSelector((state) => state.pizzas.isLoading);
  const isDrinksLoading = useSelector((state) => state.drinks.isLoading);
  
  useEffect(() => {
    dispatch(getAllPizzas());
    dispatch(getAllDrinks());
  }, [dispatch]);

  if (isDrinksLoading || isPizzasLoading) {
    return <h1>...Loading</h1>;
  }
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/create-new-item" element={<CreateNewElement />} />
      </Routes>
    </div>
  );
}

export default App;
