"use server";

import { Response } from "@/modules/common/interfaces/response/response.api";
import { LoginResponse } from "../interfaces/auth.response";
import { apiFetcher } from "@/config/adapter/apiFetcher.adapter";
import { cookies } from "next/headers";
import { getUserInfo } from "./user-info";

export async function login(
  email: string,
  password: string
): Promise<Response<LoginResponse>> {
  try {
    const response = await apiFetcher.request<LoginResponse>("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      cache: "no-cache",
    });

    const cookieStore = await cookies();
    cookieStore.set("access_token", response.access_token, {
      httpOnly: true,
    });

    const user = await getUserInfo();
    
    if (!user.success) {
      return {
        success: false,
        data: null,
        error: user.error,
      };
    }

    cookieStore.set("user", JSON.stringify(user.data), {
      httpOnly: true,
    });

    return {
      success: true,
      data: response,
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      error: error as { message: string} | null,
    };
  }
}
