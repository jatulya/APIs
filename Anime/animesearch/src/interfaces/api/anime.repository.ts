import type { AnimeResponse } from "../types/response.types"

const API_URL = import.meta.env.VITE_API_URL;
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

export const getAnimesByGenres = async (genres: string): Promise<AnimeResponse> => {
  try {
    const response = await fetch(
      `${API_URL}/anime?q=&genres=${genres}&order_by=title&sort=asc&limit=10`
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