import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/products-service";  
import { createContext } from "react";


export default function useProducts() {
  const { data:products, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
   select: (data) => data.data.data,
  });

  return {
    products,
    isLoading,
    isError,
    error,
  };
}