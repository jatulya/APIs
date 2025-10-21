import {
  getAnimebyName,
  getTopAnime,
} from "../api/anime.repository";
import type { AnimeData } from "../types/data.types";

export const fetchTopAnime = async (): Promise<AnimeData[]> => {
  try {
    const result = await getTopAnime();
    return result.data.slice(0, 5);
  } catch (error) {
    throw error;
  }
};

export const searchAnime = async (query: string): Promise<AnimeData[]> => {
  try {
    const result = await getAnimebyName(query);
    return result.data;
  } catch (error) {
    throw error;
  }
};

