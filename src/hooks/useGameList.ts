import { useEffect, useState } from "react";
import { Game } from "../types/game";
import { fetchGames } from "../api/rawg";

export function useGameList() {
    const [games, setGames] = useState<Game[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError ] = useState<string | null>(null);

    useEffect(() => {
        const getGames = async () => {
            setIsLoading(true)
            setError(null);

            try{
                const data = await fetchGames();
                setGames(data)
            }catch(error){
                console.error("Erro ao buscar jogos: " + error)
                setError("Ocorreu um erro ao carregar a lista de jogos.")
                setGames([])
            } finally{
                setIsLoading(false);
            }
        }

        getGames()
    }, [])

    return { games, isLoading, error };
}