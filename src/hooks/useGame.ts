import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { GameType } from "../types/types";

const apiClient = new APIClient<GameType>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
