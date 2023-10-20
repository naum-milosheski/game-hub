import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse, GameQuery, GameType } from "../types/types";

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<GameType>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<GameType>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGames;
    