export interface GameType {
  id: number;
  name: string;
}

export interface FetchGamesResponseType {
  count: number;
  results: GameType[];
}
