import { useState } from "react";
import "./shopItem.css";

const ShopItem = ({ id, title, price, image, setCartItems, setCartCounter }) => {
  const [quantity, setQuantity] = useState(1);

  const handlePlus = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const handleMinus = () => {
    if (quantity > 1) setQuantity((quantity) => quantity - 1);
  };

  const handleAdd = () => {
    const total = price * quantity;
    const newItem = { id: id, title: title, price: price, image: image, quantity: quantity, total: total };

    setCartItems((prev) => {
      const oldItem = prev.find((i) => i.id === id);
      if (oldItem) {
        return prev.map((i) =>
          i.id === newItem.id
            ? { ...i, quantity: i.quantity + newItem.quantity }
            : i,
        );
      } else {
        return [...prev, newItem];
      }
    });
    setCartCounter((prev) => prev + quantity);
    setQuantity(1);
  }
  
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
          value={quantity}
          disabled
          className="card-count-input"
        />
        <button className="card-count-btn" onClick={handlePlus}>+</button>
      </div>

      <div className="card-btn-block">
        <button className="card-add-btn" onClick={handleAdd}>Add To Cart</button>
      </div>
    </div>
  );
};

export default ShopItem;
