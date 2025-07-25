import { apiClient } from "./api-client";

export async function CreateOrder({
  paymentMethod,
  cartId,
  shippingAddress,
}) {
  try {
    const options = {
      method: "POST",

      data: {
        shippingAddress,
      },
    };

    if (paymentMethod === "cod") {
      options.url = `orders/${cartId}`;
    } else if (paymentMethod === "online") {
      options.url = `/orders/checkout-session/${cartId}?url=${location.origin}`;
    }


const response = await apiClient.request(options);
return response


  } catch (error) {
    throw error
  }
}
