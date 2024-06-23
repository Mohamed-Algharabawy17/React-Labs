import React, { useContext } from "react";
import ProductContext from "../ContextAPI/ProductContext";
import styles from "./Products.module.css";
import { Link } from "react-router-dom";

export default function Products() {
  const { products } = useContext(ProductContext);

  return (
    <div className={styles.productsContainer}>
      <h1 className={styles.title}>Our Products</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products ? (
          products.map((product) => (
            <div className="col" key={product.id}>
              <div className={`card h-100 shadow-sm ${styles.card}`}>
                <img
                  src={product.image}
                  className={`card-img-top ${styles.cardImg}`}
                  alt={product.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className={`card-title ${styles.cardTitle}`}>
                    {product.title}
                  </h5>
                  <p className={`card-text ${styles.cardText}`}>
                    {product.description}
                  </p>
                  <p className={`card-text fw-bold ${styles.cardPrice}`}>
                    ${product.price}
                  </p>
                  <Link
                    to={`/products/${product.id}`}
                    className={`btn btn-primary mt-auto ${styles.viewDetails}`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center w-100">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
