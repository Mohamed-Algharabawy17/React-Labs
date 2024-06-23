/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const CountCartproducts = useSelector((state) => state.products.countCart);

  useEffect(() => {
    setCartCount(CountCartproducts);
  }, [CountCartproducts]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-link active"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ContextAPI
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/products"
                    className="dropdown-item"
                    aria-current="page"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/create"
                    className="dropdown-item"
                    aria-current="page"
                  >
                    Create Product
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Redux
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/redux/products"
                    className="dropdown-item"
                    aria-current="page"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/redux/create"
                    className="dropdown-item"
                    aria-current="page"
                  >
                    Create Product
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <button className="btn btn-outline-light mt-2">
            <FontAwesomeIcon icon={faShoppingCart} className="me-1" />
            {cartCount > 0 && (
              <span className={`${styles.cartCount} bg-primary text-white`}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}