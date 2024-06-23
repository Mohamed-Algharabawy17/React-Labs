import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../Store/Actions/ProductsAction";
import styles from "./EditProduct.module.css";

const EditProduct = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.products.productDetails);

  useEffect(() => {
    if (productDetails) {
      setData(productDetails);
    }
  }, [productDetails]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
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
      dispatch(updateProduct(id, data));
      navigate("/redux/products");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Edit Product</h1>
      {error && <div className={styles.error}>{error}</div>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.formLabel}>
            Title
          </label>
          <input
            type="text"
            className={styles.formControl}
            name="title"
            value={data.title}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.formLabel}>
            Description
          </label>
          <input
            type="text"
            className={styles.formControl}
            name="description"
            value={data.description}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price" className={styles.formLabel}>
            Price
          </label>
          <input
            type="number"
            className={styles.formControl}
            name="price"
            value={data.price}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="image" className={styles.formLabel}>
            Image
          </label>
          <input
            type="text"
            className={styles.formControl}
            name="image"
            value={data.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.button}>
          Edit Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
