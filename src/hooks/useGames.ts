import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { FetchGamesResponseType, GameType } from "../types/types";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState<GameType[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponseType>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
