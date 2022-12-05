import React from "react";
import { ProductCard } from "../../components/productCard/ProductCard";

import { useFetchProductsQuery } from "../../features/products/productsService";


import "./Shop.css";
export const Shop = () => {
  const { data, isLoading } = useFetchProductsQuery();


  return (
    <div>
      <div className="products-container">
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {          console.log(data)}
    </div>
  );
};
