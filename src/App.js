import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { useEffect, useState } from "react";
import AdminPage from "./pages/AdminPage/AdminPage";
import CreateNewElement from "./pages/CreateNewElement/CreateNewElement";
import { base_url } from "./constants/constants";
import { useDispatch } from "react-redux";
import { pizzasActions } from "./redux/pizzasSlice";

function App() {
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([fetch(base_url + "pizza"), fetch(base_url + "drinks")]).then(
      (res) => {
        Promise.all(res.map((item) => item.json())).then((data) => {
          setLoading(false);
          dispatch(pizzasActions.addPizzas(data[0]));
          setDrinks(data[1]);
        });
      }
    );
  }, []);

  if (isLoading) {
    return <h1>...Loading</h1>;
  }
  return (
    <div className="App">
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage drinks={drinks} />} />
        <Route path="/admin" element={<AdminPage drinks={drinks} />} />
        <Route path="/create-new-item" element={<CreateNewElement />} />
      </Routes>
    </div>
  );
}

export default App;
