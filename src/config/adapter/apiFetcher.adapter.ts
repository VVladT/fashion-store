import { FetchAdapter } from "./http/fetch.adapter";

export const apiFetcher = new FetchAdapter(
  process.env.API_URL ?? "https://api.escuelajs.co/api/v1"
);
