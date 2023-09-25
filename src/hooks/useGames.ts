import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { FetchGamesResponseType, GameType } from "../types/types";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState<GameType[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchGamesResponseType>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
