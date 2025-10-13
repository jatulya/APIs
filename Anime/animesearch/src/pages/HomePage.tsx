import { useState } from "react";
import { AnimeListView, Sidebar } from "../components";
import { CustomLoader, Header } from "../common/ui";
import ErrorPage from "./ErrorPage";

export const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<number | null>(null); // [setError]

 return (
  <div>
    <Header title="Anime Search" />
    <div className="flex min-h-screen">
      <Sidebar setLoading={setLoading} setError={setError} />
      <div className="flex-1">
        {error !== null ? (
          <ErrorPage statusCode={error} /> // Show error widget if error
        ) : loading ? (
          <CustomLoader /> // Show loader if loading
        ) : (
          <AnimeListView setLoading={setLoading} setError={setError} />
        )}
      </div>
    </div>
  </div>
);
};
