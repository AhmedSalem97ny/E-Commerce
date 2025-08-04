import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Authcontext } from "../context/Auth.context"; 

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const { token } = useContext(Authcontext); 

  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem("wishlist");
    const raw = stored ? JSON.parse(stored) : [];
    return raw.map((item) => ({
      ...item,
      id: item.id || item._id,
    }));
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  function addToWishlist(product) {
    if (!token) {
      toast.warn("Please log in to add items to your wishlist");
      return false; 
    }

    setWishlist((prev) =>
      prev.find((item) => item.id === product.id)
        ? prev
        : [...prev, { ...product, id: product.id || product._id }]
    );

    return true; 
  }

  function removeFromWishlist(productId) {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  }

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}



