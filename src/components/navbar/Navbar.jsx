import { useState } from "react";
import BasketModal from "../basketModal/BasketModal";
import css from "./Navbar.module.css";
import {useSelector} from "react-redux"; 

function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);
  const basket = useSelector((state) => state.basket.data)
  const onBasketOpen = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className={`container ${css.wrapper}`}>
      <div>Пицца</div>
      <button onClick={onBasketOpen} className="btn">
        Корзина | {basket.length}
      </button>
      <BasketModal basket={basket} opened={isModalOpen} onBasketOpen={onBasketOpen} />
    </div>
  );
}

export default Navbar;
