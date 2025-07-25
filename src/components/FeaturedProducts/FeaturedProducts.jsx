import React, { useContext, useEffect, useState } from "react";
import { getAllProducts } from "../../services/products-service";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import useProducts from "../../hooks/UseProducts";
import FeaturedProductsSkeleton from "../skeleton/FeaturedProductsSkeleton";

export default function FeaturedProducts() {
  const {products, isLoading,error, isError}= useProducts()

  if (isLoading) {
    return <FeaturedProductsSkeleton />;
  }
  return (
    <>
      <section className="mb-3">
        <div className="container">
          <h2 className="font-bold text-2xl mb-3">Featured Products</h2>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 xl-grid-cols-5 ">
            {products.map((product) => (
              <ProductCard key={product.id} productInfo={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
