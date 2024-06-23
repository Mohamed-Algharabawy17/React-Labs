import React, { useContext, useState } from "react";
import ProductContext from "../ContextAPI/ProductContext";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const [error, setError] = useState(null);
  const { CreateProduct } = useContext(ProductContext);
  const Navigator = useNavigate();

  const [data, setData] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
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
      CreateProduct(data);
      Navigator("/products");
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header">
              <h1 className="text-center mb-0">Create Product</h1>
            </div>
            <div className="card-body">
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={data.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={data.description}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    value={data.price}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Image URL
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="image"
                    value={data.image}
                    onChange={handleChange}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="card-footer text-muted text-center">
              <div className="text-center">
                <button type="submit" className="btn btn-success">
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
