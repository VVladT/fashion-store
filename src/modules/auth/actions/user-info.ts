import { Response } from "@/modules/common/interfaces/response/response.api";
import { UserInfoResponse } from "../interfaces/auth.response";
import { apiFetcher } from "@/config/adapter/apiFetcher.adapter";
import { User } from "../models/auth.model";

export async function getUserInfo(): Promise<Response<User>> {
  try {

    const response = await apiFetcher.request<UserInfoResponse>("/auth/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });
  
    if (!response) {
      return {
        success: false,
        data: null,
        error: { message: "Failed to fetch user info" },
      };
    }
  
    return {
      success: true,
      data: {
        id: response.id,
        email: response.email,
        name: response.name,
        role: response.role,
        avatar: response.avatar,
      },
      error: null,
    };
  } catch {
    return {
        success: false,
        data: null,
        error: { message: "Failed to fetch user info" },
      };
  }

}
