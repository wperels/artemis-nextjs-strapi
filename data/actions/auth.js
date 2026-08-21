// data/actions/auth.js
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { registerUserService, loginUserService } from "@/data/services/auth";

const cookieConfig = {
  maxAge: 60 * 60 * 24 * 7,
  path: "/",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
};

export async function registerUserAction(prevState, formData) {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!username || !email || !password) {
    return { success: false, message: "All fields are required." };
  }

  const responseData = await registerUserService({ username, email, password });

  if (!responseData || responseData.error) {
    return { success: false, message: responseData?.error?.message || "Registration failed." };
  }

  (await cookies()).set("jwt", responseData.jwt, cookieConfig);
  redirect("/");
}

export async function loginUserAction(prevState, formData) {
  const identifier = formData.get("identifier");
  const password = formData.get("password");

  if (!identifier || !password) {
    return { success: false, message: "Email/username and password are required." };
  }

  const responseData = await loginUserService({ identifier, password });

  if (!responseData || responseData.error) {
    return { success: false, message: responseData?.error?.message || "Invalid credentials." };
  }

  (await cookies()).set("jwt", responseData.jwt, cookieConfig);
  redirect("/");
}

export async function logoutAction() {
  (await cookies()).delete("jwt", { path: "/" });
  redirect("/scavenger-hunt");
}