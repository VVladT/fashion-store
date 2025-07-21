import { Response } from "@/modules/common/interfaces/response/response.api";
import { Category } from "../model/category.interface";
import { apiFetcher } from "@/config/adapter/apiFetcher.adapter";
import { CategoryResponse } from "../interfaces/category.response";

export async function getCategories(): Promise<Response<Category[]>> {
  try {
    const response = await apiFetcher.request<CategoryResponse[]>(
      "/categories",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      }
    );

    return {
      data: response,
      success: true,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      success: false,
      error: error as { message: string } | null,
    };
  }
}
