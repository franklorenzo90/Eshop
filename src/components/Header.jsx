import React from "react";
import { NavLink } from "react-router-dom";

//custom hooks
import { useAuth } from "../custom-hooks/useAuth";

// My components
import { useCart } from "../custom-hooks/useCart";
import Cart from "./Cart";

import logo from "../public/eshop.png";

function Header() {
  const { isLoggued, logout } = useAuth();

  const { emptyCart } = useCart();

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <NavLink
          className="navbar-brand disabled w-auto"
          to="/home"
          aria-disabled="true"
        >
          <img
            src={logo}
            alt="Eshop logo"
            style={{ width: "40px", height: "40px" }}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-5">
            <li className="nav-item">
              <NavLink
                className="link"
                aria-current="page"
                to="/cartview"
                activeClassName="link-active"
              >
                <i className="far fa-eye me-2"></i>
                See my cart
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="me-5">
          <Cart />
        </div>

        {isLoggued && (
          <button
            className="btn border-warning borderless link"
            onClick={() => {
              emptyCart();
              logout();
            }}
          >
            <i className="fas fa-sign-out-alt me-2"></i>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Header;
