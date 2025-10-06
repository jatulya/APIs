import { useState } from "react";
import { AnimeListView, Sidebar } from "../components";
import { CustomLoader, Header } from "../common/ui";

export const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div>
      <Header title="Anime Search" />
      <div className="flex min-h-screen">
        <Sidebar setLoading={setLoading} />
        <div className="flex-1">
          {loading ? (
            <CustomLoader /> // Replace with your loader component
          ) : (
            <AnimeListView setLoading={setLoading} />
          )}
        </div>
      </div>
    </div>
  );
};
