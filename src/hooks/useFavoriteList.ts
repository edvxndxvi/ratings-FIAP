import { useEffect, useState } from "react";
import { Game } from "../types";
import { useLocalStorage } from "./useLocalStorage";

export function useFavoriteList(){
    const [games, setGames] = useState<Game[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null);
    const [isEmpty, setIsEmpty] = useState(false);
    const { getItem } = useLocalStorage();

    useEffect(() => {
        const getGames = () =>{
            setIsLoading(true)
            setIsEmpty(false)
            setError(null)

            try{
                const favoriteGames = getItem("favorites")

                if (favoriteGames === undefined){
                    setIsEmpty(true)
                }

                setGames(favoriteGames)
                
            } catch (error){
                console.log("Erro ao buscar jogos: " + error)
                setError("Ocorreu um erro ao carregar a lista de jogos favoritos.")
                setGames([])
            } finally {
                setIsLoading(false)
            }
        }   

        getGames()
    }, [getItem])

    return { games, isLoading, error, isEmpty }
}