import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { useWishlist } from "../../context/Wishlist.context";
import { toast } from "react-toastify";

function Heart({ product }) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const isWishlisted = useMemo(
  () => wishlist.some((item) => item.id === product.id || item._id === product.id),
  [wishlist, product.id]
);


  if (process.env.NODE_ENV === "development") {
    console.log("Heart rendered for", product.id, "; wishlisted:", isWishlisted);
  }

 function handleClick(e) {
  e.stopPropagation();
  if (isWishlisted) {
    removeFromWishlist(product.id);
    toast.info("Product removed from wishlist");
  } else {
    const success = addToWishlist(product);
    if (success) {
      toast.success("Product added to wishlist");
    }
  }
}


  return (
    <button onClick={handleClick} aria-label="Toggle wishlist">
      <FontAwesomeIcon
        icon={isWishlisted ? solidHeart : regularHeart}
        className={`transition-colors duration-200 ${
          isWishlisted ? "text-red-500" : "text-gray-400"
        }`}
      />
    </button>
  );
}

export default React.memo(Heart);

