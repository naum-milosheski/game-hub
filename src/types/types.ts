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
}

export interface FetchGamesResponseType {
  count: number;
  results: GameType[];
}
