import { Link, NavLink } from "react-router";
import "./navbar.css";
import IconModule from '@mdi/react';
import logo from '../../assets/logo.png';
import { mdiCartVariant, mdiClose, mdiMenu } from "@mdi/js";
import { useEffect, useState } from "react";

const NavBar = ({ cartItems }) => {
  const Icon = IconModule.default;
  const [cartCounter, setCartCounter] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const countItems = () => {
      let count = 0;

      cartItems.forEach((item) => (count += item.quantity));

      setCartCounter(count);
    };

    countItems();
  }, [cartItems]);

  return (
    <nav>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>

      <button
        className="burger-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <Icon path={isOpen ? mdiClose : mdiMenu} size={1.2} />
      </button>

      <ul className={isOpen ? "nav-list open" : "nav-list"}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navlink active" : "navlink"
            }
            to="/"
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navlink active" : "navlink"
            }
            to="/shop"
            onClick={closeMenu}
          >
            Shop
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navlink active" : "navlink"
            }
            to="/cart"
            onClick={closeMenu}
          >
            Cart
            <Icon path={mdiCartVariant} size={1} />
            <span className="cart-count">{cartCounter}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;