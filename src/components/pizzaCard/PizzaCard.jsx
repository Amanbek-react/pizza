import { basketActions } from "../../redux/basketSlice";
import css from "./PizzaCard.module.css";
import { useDispatch } from "react-redux";
import Api from "../../api/Api";

function PizzaCard({ title, description, price, img, id, isAdmin, link }) {
  const dispatch = useDispatch();
  const handleReduxClick = () => {
    dispatch(
      basketActions.addToBasket({
        title,
        description,
        price,
        img,
        id,
      })
    );
  };
  const handleDelete = () => {
    if (link === "pizza") {
      Api.deletePizza(id).then(() => {
        window.location.reload();
      });
    } else {
      Api.deleteDrink(id).then(() => {
        window.location.reload();
      });
    }
  };

  return (
    <div className={css.wrapper}>
      <div className={css.imageWrapper}>
        <img
          src={
            img ||
            "https://cdn.picpng.com/pizza/pizza-pizza-icon-pizza-slice-56532.png"
          }
          alt={title}
        />
      </div>
      <div className={css.title}>{title}</div>
      <div className={css.description}>{description}</div>
      <div className={css.footer}>
        <div className={css.price}>от {price} сом</div>
        {!isAdmin && (
          <button onClick={handleReduxClick} className="btn">
            Выброть
          </button>
        )}
      </div>
      {isAdmin && (
        <div>
          <button onClick={handleDelete} className="btn">
            Delete
          </button>
          <button className="btn">Change</button>
        </div>
      )}
    </div>
  );
}

export default PizzaCard;
