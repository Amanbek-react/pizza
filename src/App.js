import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { useEffect, useState } from "react";
import AdminPage from "./pages/AdminPage/AdminPage";
import CreateNewElement from "./pages/CreateNewElement/CreateNewElement";
import { base_url } from "./constants/constants";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(base_url + "pizza"),
      fetch(base_url + "drinks"),
    ]).then((res) => {
      console.log(res);
      Promise.all(res.map((item) => item.json())).then((data) => {
        setLoading(false);
        setPizzas(data[0]);
        setDrinks(data[1]);
      });
    });
  }, []);

  if (isLoading) {
    return <h1>...Loading</h1>;
  }
  return (
    <div className="App">
      <Header />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              drinks={drinks}
              pizzas={pizzas}
            />
          }
        />

        <Route path="/admin" element={<AdminPage pizzas={pizzas} drinks={drinks} />} />
        <Route path="/create-new-item" element={<CreateNewElement />} />
      </Routes>
    </div>
  );
}

export default App;
