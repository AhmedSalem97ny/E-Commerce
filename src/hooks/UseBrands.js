// src/hooks/useBrands.js
import { useQuery } from "@tanstack/react-query";
import { getAllBrands, getBrandById } from "../services/brand-service";

export function useAllBrands({ limit, keyword }) {
  return useQuery({
    queryKey: ["brands", { limit, keyword }],
    queryFn: () => getAllBrands({ limit, keyword }),
  });
}

export function useBrandById(id) {
  return useQuery({
    queryKey: ["brand", id],
    queryFn: () => getBrandById(id),
    enabled: !!id, // only fetch if ID exists
  });
}


