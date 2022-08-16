import Slider from "react-slick";
import PizzaCard from "../../components/pizzaCard/PizzaCard";
import SliderCard from "../../components/sliderCard/SliderCard";

const sliderCards = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg",
  },
  {
    id: 2,
    img: "https://cdn.loveandlemons.com/wp-content/uploads/2022/01/pizza-topping-ideas.jpg",
  },
  {
    id: 3,
    img: "https://assets.bonappetit.com/photos/5cd32ef32c3537178c3c8f03/6:9/w_1630,h_2445,c_limit/BA-Perfect-Pizza.jpg",
  },
  {
    id: 4,
    img: "https://www.acouplecooks.com/wp-content/uploads/2022/04/Greek-Pizza-with-Feta-009-1.jpg",
  },
  {
    id: 5,
    img: "https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail-500x500.png",
  },
  {
    id: 6,
    img: "https://www.wholesomeyum.com/wp-content/uploads/2017/04/wholesomeyum-Fathead-Pizza-Crust-Recipe-Low-Carb-Keto-Pizza-4-Ingredients-17.jpg",
  },
  {
    id: 7,
    img: "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg",
  },
  {
    id: 8,
    img: "https://cdn.loveandlemons.com/wp-content/uploads/2022/01/pizza-topping-ideas.jpg",
  },
];

function HomePage({ drinks, pizzas }) {
  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <div className="container page">
      <Slider {...settings}>
        {sliderCards.map((item) => (
          <SliderCard key={item.id} img={item.img} />
        ))}
      </Slider>
      <h1 className="title">Пицца</h1>

      <div className="cards_wrapper">
        {pizzas.map((pizza) => (
          <PizzaCard
            key={pizza.id}
            id={pizza.id}
            title={pizza.title}
            description={pizza.description}
            price={pizza.price}
          />
        ))}
      </div>

      <h2 className="title">Напитки</h2>

      <div className="cards_wrapper">
        {drinks.map((drink) => (
          <PizzaCard
            key={"drink" + drink.id}
            img={drink.img}
            title={drink.title}
            description={drink.description}
            price={drink.price}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
