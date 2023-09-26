import { GenreType } from "../types/types";
import useData from "./useData";

const useGenres = () => useData<GenreType>("genres");

export default useGenres;
