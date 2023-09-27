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
  genre: GenreType | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
