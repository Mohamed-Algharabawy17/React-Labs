import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createProduct } from "../../Store/Actions/ProductsAction";
import styles from "./CreateProduct.module.css";

const CreateProduct = () => {
  const [error, setError] = useState(null);
  const Navigator = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.title === "" ||
      data.description === "" ||
      data.price === 0 ||
      data.image === ""
    ) {
      setError("Please fill all the fields");
    } else {
      dispatch(createProduct(data));
      Navigator("/redux/products");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create New Product</h1>
      {error && <div className={styles.error}>{error}</div>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.formLabel}>
            Title
          </label>
          <input
            type="text"
            className={styles.formControl}
            id="title"
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.formLabel}>
            Description
          </label>
          <textarea
            className={styles.formControl}
            id="description"
            rows="4"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price" className={styles.formLabel}>
            Price
          </label>
          <input
            type="number"
            className={styles.formControl}
            id="price"
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="image" className={styles.formLabel}>
            Image URL
          </label>
          <input
            type="text"
            className={styles.formControl}
            id="image"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.button}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
