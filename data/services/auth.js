// data/services/auth.js
const baseUrl = process.env.STRAPI_URL || "http://localhost:1338";

export async function registerUserService(userData) {
  let res;
  try {
    res = await fetch(`${baseUrl}/api/auth/local/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
      cache: "no-store",
    });
  } catch (networkErr) {
    console.error("Network error calling registerUserService:", networkErr);
    return { error: { message: "Unable to reach the server. Please try again." } };
  }

  try {
    return await res.json();
  } catch (parseErr) {
    console.error("Failed to parse registerUserService response:", parseErr);
    return { error: { message: "Unexpected response from the server." } };
  }
}

export async function loginUserService(userData) {
  let res;
  try {
    res = await fetch(`${baseUrl}/api/auth/local`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
      cache: "no-store",
    });
  } catch (networkErr) {
    console.error("Network error calling loginUserService:", networkErr);
    return { error: { message: "Unable to reach the server. Please try again." } };
  }

  try {
    return await res.json();
  } catch (parseErr) {
    console.error("Failed to parse loginUserService response:", parseErr);
    return { error: { message: "Unexpected response from the server." } };
  }
}