import { useEffect, useState } from "react";
import { fetchGamesById } from "../api/rawg";
import { GameDetails } from "../types";

export function useGameDetail(id: string) {
    const [game, setGame] = useState<GameDetails | null>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        if (!id) return;
        const getGame = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const data = await fetchGamesById(id);
                setGame(data)
            } catch (error) {
                console.error("Erro ao buscar detalhes do jogo: " + error);
                setError("Ocorreu um erro ao carregar detalhes do jogos.")
            } finally {
                setIsLoading(false)
            }
        }

        getGame()
    }, [id])

    return { game, isLoading, error }
}
