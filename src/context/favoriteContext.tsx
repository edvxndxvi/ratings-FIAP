import { createContext, ReactNode, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { GameDetails } from "../types";

interface FavoriteContextType{
    favorites: GameDetails[]
    toggleFavorite: (game: GameDetails) => void
}
const FavoriteContext = createContext<FavoriteContextType | null>(null);

interface FavoriteProviderProps{
    children: ReactNode;
}

export function FavoriteProvider({ children }: FavoriteProviderProps) {
    const [ favorites, setFavorites] = useState<GameDetails[]>([])
    const {setItem} = useLocalStorage();

    function toggleFavorite(game: GameDetails){
        let newList: GameDetails[] = [] 
        setFavorites(prevFavorites => {
            const isFavorite = prevFavorites.some(fav => fav.id === game.id)

            if(isFavorite){
                newList = prevFavorites.filter(fav => fav.id !== game.id);
            }else{
                newList = [...prevFavorites, game]
            }

            setItem("favorites", newList)
            return newList
        })
    }

    return(
        <FavoriteContext.Provider value={{favorites, toggleFavorite}}>
            {children}
        </FavoriteContext.Provider>
    )
}

export function useFavorite(){
    const context = useContext(FavoriteContext)
    if(!context){
        throw new Error("useSearch não esta dentro do SearchProvider");
    }
    return context;
}

export default FavoriteContext;