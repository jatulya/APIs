import type { AnimeResponse } from "../types/response.types";

const API_URL = "https://api.jikan.moe/v4";

export const getTopAnime = async (): Promise<AnimeResponse> => {
  try {
    const response = await fetch(`${API_URL}/top/anime`);
    if (!response.ok) {
      throw response.status;
    }
    const data: AnimeResponse = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAnimebyName = async (query: string): Promise<AnimeResponse> => {
  try {
    const response = await fetch(
      `${API_URL}/anime?q=${query}&order_by=title&sort=asc&limit=10`
    );
    if (!response.ok) {
      throw response.status;
    }
    const data: AnimeResponse = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
