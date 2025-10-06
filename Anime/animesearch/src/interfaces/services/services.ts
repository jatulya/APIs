import { getAnimebyName, getTopAnime } from "../api/repository";
import type { AnimeData } from "../types/data.types";

export const fetchTopAnime = async (): Promise<AnimeData[]> => {
  try {
    const result = await getTopAnime();
    return result.data.slice(0, 5);
  } catch (error) {
    throw new Error(`Service error: ${(error as Error).message}`);
  }
};

export const searchAnime = async (query: string): Promise<AnimeData[]> => {
  try {
    const result = await getAnimebyName(query);
    return result.data;
  } catch (error) {
    // console.log(error);
    throw new Error(`Service error: ${(error as Error).message}`);
  }
};
