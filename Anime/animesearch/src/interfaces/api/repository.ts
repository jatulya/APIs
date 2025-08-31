import type { AnimeResponse } from "../types/response.types";

const API_URL = "https://api.jikan.moe/v4";

export const getTopAnime = async (): Promise<AnimeResponse> => {
  try {
    const response = await fetch(`${API_URL}/top/anime`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: AnimeResponse = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch top anime: ${(error as Error).message}`);
  }
};