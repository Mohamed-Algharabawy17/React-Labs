import React, { useState } from "react";
import Product from "../components/product/Product";
import useFetchProducts from "../hooks/FetchProducts";
import { IProduct } from "../interfaces";


const FilterProduct = () => {
  const products = useFetchProducts();

  /**
  * States
  */
  const [priceFilter, setPriceFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  /**
  * Handlers
  */
  const handlePriceFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriceFilter(e.target.value);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const renderProduct = () => {
    let filteredProducts = products;

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product: IProduct) => {
        return product.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }

    if (priceFilter) {
      filteredProducts = filteredProducts.filter((product: IProduct) => {
        return product.price <= parseInt(priceFilter);
      });
    }

    if(filteredProducts.length === 0) return (<h1 className="mb-10 mt-10">No product found</h1>);
    return filteredProducts.map((product: IProduct) => (
      <Product product={product} key={product.id} />
    ));
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-5">Filter Products</h1>
      <form>
        <input
          type="text"
          placeholder="Search product"
          className="border p-2 rounded-lg w-full my-5"
          onChange={handleSearchInputChange}
        />

        <select
          className="border p-2 rounded-lg w-full my-5"
          onChange={handlePriceFilterChange}
        >
          <option value="">Filter by price</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
        </select>
      </form>
      {products.length === 0 && <h1 className="mb-10 mt-10">Loading...</h1>} 
      <div className="grid grid-cols-3">{renderProduct()}</div>
    </>
  );
};

export default FilterProduct;
