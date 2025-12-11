import { useEffect, useState } from "react";
import { Game } from "../types";
import { fetchGames } from "../api/rawg";
import { useSearch } from "../context/searchContext";
import { filterInappropriete } from "../utils/filterInappropriate";
import { useInfiniteScroll } from "./useInfiniteScroll";

export function useGameList() {
    const [games, setGames] = useState<Game[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { searchQuery } = useSearch();
    const { currentPage, observerTarget, setCurrentPage } = useInfiniteScroll()

    useEffect(() => {
        setCurrentPage(1)
        setGames([])
    }, [searchQuery, setCurrentPage])

    useEffect(() => {
        const getGames = async () => {
            setIsLoading(true)
            setError(null);

            try {
                const rawGames = await fetchGames(searchQuery, currentPage);
                const cleanGames = filterInappropriete(rawGames)
                setGames((prevGames) => { 
                    if(currentPage === 1 && prevGames.length === 0){
                        return cleanGames 
                    } 
                    const uniqueNewGames = cleanGames.filter(
                        newGame => !prevGames.some(existingGame => existingGame.id === newGame.id)
                    );
                    const resultado = [...prevGames, ...uniqueNewGames];
                    return resultado;
                })
            } catch (error) {
                console.error("Erro ao buscar jogos: " + error)
                setError("Ocorreu um erro ao carregar a lista de jogos.")
                setGames([])
            } finally {
                setIsLoading(false);
            }
        }

        getGames()
    }, [searchQuery, currentPage])

    return { games, isLoading, error, observerTarget };
}