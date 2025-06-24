import { Response } from "@/modules/common/interfaces/response/response.api";
import { Product } from "../model/product.model";
import { apiFetcher } from "@/config/adapter/apiFetcher.adapter";
import { ProductResponse } from "../interfaces/product.interfaces";

interface QueryParams {
  title?: string;
  price?: number;
  price_min?: number;
  price_max?: number;
  categoryId?: number;
  categorySlug?: string;
}

export async function getProducts(
  queryParams: QueryParams
): Promise<Response<Product[]>> {
  const queryString = new URLSearchParams(
    Object.entries(queryParams)
      .filter(([, value]) => value !== undefined)
      .reduce<Record<string, string>>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {})
  ).toString();
  const url = `/products?${queryString}`;

  try {
    const response = await apiFetcher.request<ProductResponse[]>(url, {
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
      data: [],
      success: false,
      error: error,
    };
  }
}
