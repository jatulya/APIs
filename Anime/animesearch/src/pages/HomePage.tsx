import { AnimeListView, Sidebar } from "../components";
import { Header } from "../ui";

export const HomePage = () => {
  return (
    <div>
      <Header title="Anime Search" />
      <div className="flex min-h-screen ">
        <Sidebar />
        <div className="flex-1">
          <AnimeListView />
        </div>
      </div>
    </div>
  );
};
