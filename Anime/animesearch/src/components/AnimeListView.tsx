import { useState, type ChangeEvent } from "react";
import { CustomSearchBar } from "../ui";
import { searchAnime } from "../interfaces/services/services";
import type { AnimeData } from "../interfaces/types/data.types";
import AnimeCard from "./AnimeCard";
import type { LoadingProps } from "../interfaces/types/prop.types";

function AnimeListView({ setLoading }: LoadingProps) {
  const [query, setQuery] = useState<string>("");
  const [animeList, setAnimeList] = useState<AnimeData[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Start loader
    const temp = await searchAnime(query);
    setAnimeList(temp);
    setLoading(false);
  };

  return (
    <main>
      <div>
        <CustomSearchBar
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          onSubmit={handleSearch}
          placeholder="Type your favorite Anime here..."
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {animeList.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </main>
  );
}

export default AnimeListView;
