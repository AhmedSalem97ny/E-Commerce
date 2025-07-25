import { apiClient } from "./api-client";

export async function getAllProducts({
  page,
  keyword,
  priceGreaterThan,
  PriceLessThan,
  SortedBy,
  category,
  brand,
} = {}) {
  try {
    const options = {
      url: `/products?${page ? `page=${page}` : ""}${
        keyword ? `&keyword=${keyword}` : ""
      }${priceGreaterThan ? `&price[gte]=${priceGreaterThan}` : ""}${
        PriceLessThan ? `&price[lte]=${PriceLessThan}` : ""
      }${SortedBy ? `&sort=${SortedBy}` : ""}${
        category ? `&category[in]=${category}` : ""
      }${brand ? `&brand=${brand}` : ""}`,
      method: "GET",
    };

    console.log(options.url);

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getProductById({ id }) {
  try {
    const options = {
      url: `/products/${id}`,
      method: "GET",
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
