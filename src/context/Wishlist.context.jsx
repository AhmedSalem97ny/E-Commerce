import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
 const [wishlist, setWishlist] = useState(() => {
  const stored = localStorage.getItem("wishlist");
  const raw = stored ? JSON.parse(stored) : [];
  // Normalize all items to have .id
  return raw.map((item) => ({
    ...item,
    id: item.id || item._id,
  }));
});


  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  function addToWishlist(product) {
   setWishlist((prev) =>
  prev.find((item) => item.id === product.id) ? prev : [...prev, { ...product, id: product.id || product._id }]
);
  }

  function removeFromWishlist(productId) {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  }

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
