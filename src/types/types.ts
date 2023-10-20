export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface GameType {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface FetchGamesResponseType {
  count: number;
  results: GameType[];
}

export interface GenreType {
  id: number;
  name: string;
  image_background: string;
}

export interface FetchGenresResponseType {
  count: number;
  results: GenreType[];
}

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}
