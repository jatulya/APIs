import type { Genre } from "../types/models.types";

const API_URL = import.meta.env.VITE_API_URL;
export const fetchGenres = async (): Promise<Genre[]> => {
  try {
    const response = await fetch(`${API_URL}/genres/anime`);
    if (!response.ok) {
      throw { status: response.status };
    }
    const data = await response.json();
    console.log(data);
    const genres = data.data.map((g: any) => ({
      mal_id: g.mal_id,
      name: g.name,
      type: g.type,
      url: g.url,
    }));
    
    console.log(genres);
    return genres;
  } catch (error: any) {
    console.error("Failed to fetch genres:", error);
    throw { status: error.status || 500 };
  }
};