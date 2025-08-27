import { useState, type ChangeEvent } from "react";
import { CustomSearchBar } from "../ui";

function AnimeListView() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
  };
  
  return (
    <main>
      <div>
        <CustomSearchBar
        value={query}
        onChange={(e :ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
        onSubmit={handleSearch}
        placeholder="Type your favorite Anime here..."
      />
</div>
    </main>
  )
}

export default AnimeListView
