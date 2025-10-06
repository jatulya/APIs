import React from "react";
import type { AnimeCardProps } from "../interfaces/types/prop.types";

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  return (
    <article className="box col-flex anime-card">
      <a href={anime.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={anime.images.jpg.image_url} alt="Anime Image" />
        </figure>
        <h3 className="text-dark">{anime.title}</h3>
      </a>
    </article>
  );
};

export default AnimeCard;
