import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { GenreType } from "../types/types";

const apiClient = new APIClient<GenreType>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default useGenres;
