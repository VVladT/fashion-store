"use server";

import { Response } from "@/modules/common/interfaces/response/response.api";
import { LoginResponse } from "../interfaces/auth.response";
import { apiFetcher } from "@/config/adapter/apiFetcher.adapter";

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

    return {
      success: true,
      data: response,
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      error: error,
    };
  }
}
