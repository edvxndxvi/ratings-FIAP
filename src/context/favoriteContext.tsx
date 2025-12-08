import { createContext, ReactNode, useContext, useState } from "react";

interface FavoriteContextType{
    favorites: number[]
    toggleFavorite: (gameId: number) => void
}
const FavoriteContext = createContext<FavoriteContextType | null>(null);

interface FavoriteProviderProps{
    children: ReactNode;
}

export function FavoriteProvider({ children }: FavoriteProviderProps) {
    const [ favorites, setFavorites] = useState<number[]>([])

    function toggleFavorite(gameId: number){
        setFavorites(prevFavorites => {
            if(prevFavorites.includes(gameId)){
                return prevFavorites.filter(id => id !== gameId);
            }else{
                return [...prevFavorites, gameId]
            }
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