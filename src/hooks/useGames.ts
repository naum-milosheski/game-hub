import { GameType } from "../types/types";
import useData from "./useData";

const useGames = () => useData<GameType>("/games");

export default useGames;
