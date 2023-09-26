import { GameType, GenreType } from "../types/types";
import useData from "./useData";

const useGames = (selectedGenre: GenreType | null) =>
  useData<GameType>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
