import { Link, useOutletContext } from "react-router";
import "./cart.css";
import CartItem from "../CartItem/CartItem.jsx";
import { useEffect, useState } from "react";

const CartPage = () => {
  const { cartItems, setCartItems } = useOutletContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const countTotal = () => {
      let t = 0;

      cartItems.forEach((item) => (t += item.total));

      setTotal(Math.floor(t * 100) / 100);
    };

    countTotal();
  }, [cartItems]);

  return (
    <section>
      {cartItems.length > 0 ? (
        <div className="cart-items-wrapper">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} setCartItems={setCartItems} />
          ))}

          <hr className="cart-hr" />

          <p className="cart-total">
            Total:
            <br />${total}
          </p>
        </div>
      ) : (
        <div className="empty-cart-wrapper">
          <h1>Cart is empty</h1>
          <Link to="/shop" className="link-btn">
            Go to shop
          </Link>
        </div>
      )}
    </section>
  );
};

export default CartPage;
