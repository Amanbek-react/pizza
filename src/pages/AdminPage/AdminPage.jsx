import { Link } from "react-router-dom";
import PizzaCard from "../../components/pizzaCard/PizzaCard";
import {useSelector} from "react-redux";

function AdminPage({ drinks }) {
  const pizzas = useSelector((state) => state.pizzas.data)
  return (
    <div className="container page">
      <h1>Admin Panel</h1>
      <h2 className="title">Пицца</h2>
      <Link to="/create-new-item" className="btn">+Add new Element</Link>
      <div className="cards_wrapper">
        {pizzas.map((item) => (
          <PizzaCard key={item.id} {...item} isAdmin={true} link="pizza" />
        ))}
      </div>
      <h2 className="title">Напитки</h2>
      <div className="cards_wrapper">
        {drinks.map((item) => (
          <PizzaCard key={item.id} {...item} isAdmin={true} link="drinks" />
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
