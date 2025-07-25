// src/services/brand-service.js
import { apiClient } from "./api-client";

// Get all brands (with optional query params like limit or keyword)
export async function getAllBrands({ limit, keyword } = {}) {
  const params = {};
  if (limit) params.limit = limit;
  if (keyword) params.keyword = keyword;

  const response = await apiClient.get("/brands", { params });
  return response.data;
}

// Get a specific brand by ID
export async function getBrandById(id) {
  const response = await apiClient.get(`/brands/${id}`);
  return response.data;
}
