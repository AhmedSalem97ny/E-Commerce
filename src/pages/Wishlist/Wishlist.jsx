import React from 'react';
import { useWishlist } from "../../context/Wishlist.context";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Wishlist() {
  const { wishlist } = useWishlist();
  console.log("wishlist", wishlist); // Add this line

  return (
    <div className="container py-8">
      <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {wishlist.map((product) => (
            <ProductCard key={product.id} productInfo={product} />
          ))}
        </div>
      )}
    </div>
  );
}
