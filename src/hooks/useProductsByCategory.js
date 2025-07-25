import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_CONFIG } from "../config/index";

export default function useProductsByCategory(categoryId) {
  return useQuery({
    queryKey: ["products-by-category", categoryId],
    queryFn: async () => {
      const res = await axios.get(`${API_CONFIG.baseURL}/products?category=${categoryId}`);
      return res.data.data;
    },
    enabled: !!categoryId, // Only run when categoryId is truthy
  });
}
