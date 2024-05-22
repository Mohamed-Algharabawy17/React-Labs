
import { useEffect, useState } from "react";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
      
  }, []);

  return products;
};

export default useFetchProducts;
