import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { FetchResponse, GameQuery, GameType } from "../types/types";

const apiClient = new APIClient<GameType>("/games");

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<GameType>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;
