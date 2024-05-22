import { useState } from "react";
import Paginator from "../components/pagination/Paginator";
import Product from "../components/product/Product";
import { IProduct } from "../interfaces";
import useFetchProducts from "../hooks/FetchProducts";

const Products = () => {

  /**
  * States
  */
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const products = useFetchProducts();

  /**
  * Handlers
  */

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const renderProduct = () => {
    return currentProducts.map((product: IProduct) => (
      <Product product={product} key={product.id} />
    ));
  };

  return (
    <>
      {products.length === 0 && <h1 className="mb-10 mt-10">Loading...</h1>} 
      <div className="grid grid-cols-3">{renderProduct()}</div>
      <Paginator
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default Products;
