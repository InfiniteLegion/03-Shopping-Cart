import { mdiDelete } from '@mdi/js';
import './cartItem.css';
import IconModule from '@mdi/react';

const CartItem = ({ item, setCartItems }) => {
  const Icon = IconModule.default;

  const handleDelete = () => {
    setCartItems((prev) => prev.filter((i) => i.id !== item.id));
  }

  const handleUpdate = (type) => {
    setCartItems((prev) =>
      prev.map((i) => {
        if (i.id !== item.id) return i;
        if (type === "increase") {
          const newQuantity = i.quantity + 1;
          const newTotal = newQuantity * i.price;
          return { ...i, quantity: newQuantity, total: newTotal };
        }
        if (type === "decrease" && item.quantity > 1) {
          const newQuantity = i.quantity - 1;
          const newTotal = newQuantity * i.price;
          return { ...i, quantity: newQuantity, total: newTotal };
        }
        return i;
      }),
    );
  }

  return (
    <div className="cart-item">
      <div className="cart-item-image-wrapper">
        <img src={item.image} alt="item image" className="cart-item-image" />
      </div>

      <div className="cart-item-info-wrapper">
        <p className="cart-item-title">{item.title}</p>

        <p className="cart-item-price">${item.price}</p>
      </div>

      <div className="cart-item-quantity-wrapper">
        <button
          className="cart-item-quantity-btn"
          onClick={() => handleUpdate("decrease")}
        >
          -
        </button>
        <input
          type="number"
          disabled
          className="cart-item-quantity-input"
          value={item.quantity}
        />
        <button
          className="cart-item-quantity-btn"
          onClick={() => handleUpdate("increase")}
        >
          +
        </button>
      </div>

      <div className="cart-item-sum-wrapper">
        <p className="cart-item-sum">${item.total}</p>
      </div>

      <div className="cart-item-remove-wrapper">
        <button className="cart-item-remove-btn" onClick={handleDelete}>
          <Icon size={1.5} path={mdiDelete} title="Remove" color="#eb2424" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;