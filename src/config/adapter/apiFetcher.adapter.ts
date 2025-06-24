import { cookies } from "next/headers";
import { FetchAdapter } from "./http/fetch.adapter";

export const apiFetcher = new FetchAdapter(
  process.env.API_URL ?? "https://api.escuelajs.co/api/v1",
  async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;
    return token || null;
  }
);