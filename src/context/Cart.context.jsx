import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addProductToCart, getCartItems, removeItemFromCart, updateProductQuantity } from "../services/cart-service";

export const CartContext = createContext(null);

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function CartProvider({ children }) {
  const [cartInfo, setCartInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  async function handleAddingProductToCart({ id }) {
    try {
      setIsLoading(true);
      const response = await addProductToCart({ id });
      if (response.success) {
        setIsLoading(false);

        toast.success(response.data.message);
        await handleFetchCartItems();
        setCartInfo(response.data);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setError(error);
    }
  }

  async function handleFetchCartItems() {
    try {
      setIsLoading(true);
      const response = await getCartItems();
      if (response.success) {
        setIsLoading(false);
        setCartInfo(response.data);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setError(error);
    }
  }

  async function handleRemoveFromCart({id}) {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        iconColor: "#d33",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });

       if(result.isConfirmed){
        const toastId= toast.loading("Deleting Item")
       const response= await removeItemFromCart({id})
       if(response.success){
        toast.dismiss(toastId)
        setCartInfo(response.data)
       }
       }

    } catch (error) {
      throw error
    }
  }


async function handleupdateProductQuantity({id, count}) {
    try {
      const toastId = toast.loading("Updating Quantity");
      const response = await updateProductQuantity({id, count});
      if (response.success) {
       toast.dismiss(toastId);
        setCartInfo(response.data);
      }
    } catch (error) {
      
      setIsError(true);
      setError(error);
    }
  }

  useEffect(() => {
    handleFetchCartItems();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartInfo,
        setCartInfo,
       refreshCart: handleFetchCartItems,
        isError,
        isLoading,
        error,
        handleAddingProductToCart,
        handleRemoveFromCart,
        handleupdateProductQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
