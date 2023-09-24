export interface GameType {
  id: number;
  name: string;
  background_image: string;
}

export interface FetchGamesResponseType {
  count: number;
  results: GameType[];
}
