import React, { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductContext from "../ContextAPI/ProductContext";
import styles from "./ProductDetails.module.css";

export default function ProductDetails() {
  const { productDetails, getProductById, deleteProduct } =
    useContext(ProductContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductById(id);
  }, [id, getProductById]);

  const handleDelete = (id) => {
    navigate("/products");
    deleteProduct(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h1 className={styles.cardHeaderTitle}>Product Details</h1>
        </div>
        <div className={styles.cardBody}>
          {productDetails ? (
            <div className={styles.productDetails}>
              <div className={styles.productImageContainer}>
                <img
                  src={productDetails.image}
                  alt={productDetails.title}
                  className={styles.productImage}
                />
              </div>
              <div className={styles.productInfo}>
                <h2 className={styles.productTitle}>{productDetails.title}</h2>
                <p className={styles.productDescription}>
                  {productDetails.description}
                </p>
                <p className={styles.productPrice}>${productDetails.price}</p>
                <div className={styles.buttonGroup}>
                  <button className={`${styles.button} ${styles.addButton}`}>
                    Add to Cart
                  </button>
                  <Link
                    to={`/products/${productDetails.id}/edit`}
                    className={`${styles.button} ${styles.editButton}`}
                  >
                    Edit
                  </Link>
                  <button
                    className={`${styles.button} ${styles.deleteButton}`}
                    onClick={() => handleDelete(productDetails.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.loading}>
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
