import { apiFetcher } from "@/config/adapter/apiFetcher.adapter";
import { ProductResponse } from "../interfaces/product.interfaces";

export async function getProduct(slug: string) {
    const url = `/products/slug/${slug}`;

    try {
      const response = await apiFetcher.request<ProductResponse>(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
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

export async function getProductById(id: number) {
  const url = `/products/${id}`;

    try {
      const response = await apiFetcher.request<ProductResponse>(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
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