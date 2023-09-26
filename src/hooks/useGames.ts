import { GameQuery, GameType, GenreType, Platform } from "../types/types";
import useData from "./useData";

const useGames = (gameQuery: GameQuery) =>
  useData<GameType>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
