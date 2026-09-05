import { Link, NavLink } from "react-router";
import "./navbar.css";
import IconModule from '@mdi/react';
import logo from '../../assets/logo.png';
import { mdiCartVariant } from "@mdi/js";

const NavBar = () => {
  const Icon = IconModule.default;
  
    return (
      <nav>
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>

        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navlink active" : "navlink"
              }
              to="/"
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
            >
              Cart
              <Icon path={mdiCartVariant} size={1} />
              <span className="cart-count">0</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default NavBar;