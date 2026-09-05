import { useState } from "react";
import "./shopItem.css";

const ShopItem = ({ title, price, image }) => {
  const [count, setCount] = useState(1);

  const handlePlus = () => {
    setCount((count) => count + 1);
  };

  const handleMinus = () => {
    if (count > 1) setCount((count) => count - 1);
  };

  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img className="card-image" src={image} alt="fake item" />
      </div>

      <div className="card-title-wrapper">
        <p className="card-title">{title}</p>
      </div>

      <div className="card-price-wrapper">
        <p className="card-price">${price}</p>
      </div>

      <div className="card-count-block">
        <button className="card-count-btn" onClick={handleMinus}>-</button>
        <input
          type="number"
          min={1}
          value={count}
          disabled
          className="card-count-input"
        />
        <button className="card-count-btn" onClick={handlePlus}>+</button>
      </div>

      <div className="card-btn-block">
        <button className="card-add-btn">Add To Cart</button>
      </div>
    </div>
  );
};

export default ShopItem;
