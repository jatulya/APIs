import { useEffect, useState } from "react";
import { Header, Hyperlink } from "../common/ui";
import type { AnimeData } from "../interfaces/types/data.types";
import { fetchTopAnime } from "../interfaces/services/services";
import type { SubPageProps } from "../interfaces/types/prop.types";

function Sidebar({ setLoading, setError }: SubPageProps) {
  const [animeList, setAnimeList] = useState<AnimeData[]>([]);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchTopAnime()
      .then((data) => {
        setAnimeList(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err as number);
        setLoading(false);
      });
  }, []); // Empty dependency array = run only once on mount

  return (
    <aside className="w-84 ">
      <Header
        variant="secondary"
        title="Top Anime"
        claassName="items-left-justify"
      />
      <nav className="col-flex items-left-justify ml-8 mr-3">
        {animeList.map((anime) => (
          <Hyperlink key={anime.mal_id} href="#" title={anime.title} />
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
