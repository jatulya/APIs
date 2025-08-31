// types/anime.ts
export interface AnimeImageVariant {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface AnimeImage {
  jpg: AnimeImageVariant;
  webp: AnimeImageVariant;
}

export interface AnimeTrailer {
  youtube_id: string;
  url: string;
  embed_url: string;
}

export interface Title {
  type: string;
  title: string;
}

export interface Producer {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Genre extends Producer {}

export interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

export interface AirPropDate {
  day: number;
  month: number;
  year: number;
}

export interface AirProp {
  from: AirPropDate;
  to: AirPropDate;
  string: string;
}

export interface Aired {
  from: string;
  to: string;
  prop: AirProp;
}



