import { useQuery } from "@tanstack/react-query";
import { FetchResponse, GenreType } from "../types/types";
import useData from "./useData";
import apiClient from "../services/api-client";

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
