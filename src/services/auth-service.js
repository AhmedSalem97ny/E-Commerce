import { apiClient } from "./api-client";

// 1. Signup
export async function sendDataToSignup(values) {
  try {
    const options = {
      method: "POST",
      url: `/auth/signup`,
      data: {
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.password,
        rePassword: values.rePassword,
      },
    };
    const response = await apiClient.request(options);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
}

// 2. Login
export async function sendDataToLogin(values) {
  try {
    const options = {
      method: "POST",
      url: `/auth/signin`,
      data: {
        email: values.email,
        password: values.password,
      },
    };
    const response = await apiClient.request(options);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// 3. Forgot Password
export function forgotPassword(email) {
  return apiClient.post("/auth/forgotPasswords", { email });
}

// 4. Verify code
export function verifyResetCode(resetCode) {
  return apiClient.post("/auth/verifyResetCode", { resetCode });
}

// 5. Reset password
export function resetPassword({ email, newPassword }) {
  return apiClient.put("/auth/resetPassword", {
    email,
    newPassword,
  });
}






