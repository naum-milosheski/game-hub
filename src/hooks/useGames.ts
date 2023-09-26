import { GameType, GenreType, Platform } from "../types/types";
import useData from "./useData";

const useGames = (
  selectedGenre: GenreType | null,
  selectedPlatform: Platform | null
) =>
  useData<GameType>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
