import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse, GenreType } from "../types/types";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<GenreType>>("/genres")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default useGenres;
