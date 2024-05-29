import React, { useContext, useEffect, useState } from "react";
import logo from "../../Assets/logo.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const [expandbar, setExpandbar] = useState(false);
  const location = useLocation();
  let p = getTotalCartItems();
  useEffect(() => {
    setExpandbar(false);
  }, [location]);
  const handleClick = () => {
    setExpandbar(true);
  };
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src={logo} /> <h2>ShopZone</h2>
      </div>
      <div className="toggleBar">
        <button onClick={handleClick}>
          <MenuIcon className="toggleBar__icon" />
        </button>
      </div>
      <ul className={expandbar ? "navbar__false" : "navbar__middle"}>
        <li
          className={menu === "shop" ? "navbar__middle__active" : ""}
          onClick={() => setMenu("shop")}
        >
          <NavLink to="/" style={{ textDecoration: "none", color: "red" }}>
            Shop
          </NavLink>
        </li>
        <li
          className={menu === "men" ? "navbar__middle__active" : ""}
          onClick={() => setMenu("men")}
        >
          <NavLink to="/mens" style={{ textDecoration: "none", color: "red" }}>
            Men
          </NavLink>
        </li>
        <li
          className={menu === "women" ? "navbar__middle__active" : ""}
          onClick={() => setMenu("women")}
        >
          <NavLink
            to="/womens"
            style={{ textDecoration: "none", color: "red" }}
          >
            {" "}
            Women
          </NavLink>
        </li>
        <li
          className={menu === "kid" ? "navbar__middle__active" : ""}
          onClick={() => setMenu("kid")}
        >
          <NavLink to="/kids" style={{ textDecoration: "none", color: "red" }}>
            Kid
          </NavLink>
        </li>
      </ul>

      <div className="navbar__right">
        <div className="navbar__right__button">
          {localStorage.getItem("auth-token") ? (
            <button
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.reload("/");
              }}
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              style={{ textDecoration: "none", color: "red" }}
            >
              <button>Login</button>
            </NavLink>
          )}
        </div>
        <NavLink to="/cart" style={{ textDecoration: "none", color: "red" }}>
          {" "}
          <AddShoppingCartIcon
            className="navbar__right__cart"
            style={{ fontSize: "25px" }}
          />
        </NavLink>
        <div className="navbar__right__count">{p}</div>
      </div>
    </div>
  );
};

export default Navbar;
