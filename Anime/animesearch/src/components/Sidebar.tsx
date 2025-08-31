import { useEffect, useState } from "react";
import { Header, Hyperlink } from "../ui";
import type { AnimeData } from "../interfaces/types/data.types";
import { fetchTopAnime } from "../interfaces/services/services";


function Sidebar() {
  const [animeList, setAnimeList] = useState<AnimeData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchTopAnime()
      .then((data) => {
        setAnimeList(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Failed to load top anime');
        setLoading(false);
      });
  }, []); // Empty dependency array = run only once on mount

  if (loading) return <div>Loading...</div>;
  if (error)   return <div>Error: {error}</div>;

  return (
    <aside className="w-84 ">
      <Header variant="secondary" title="Top Anime" claassName="items-left-justify"/>
      <nav className="col-flex items-left-justify ml-8 mr-3">
        {animeList.map((anime) => (
          <Hyperlink
            key={anime.mal_id}
            href='#'
            title={anime.title}
          />
        ))}     
      </nav>
    </aside>
  );
}

export default Sidebar;
