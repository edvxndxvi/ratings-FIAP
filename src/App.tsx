import { FavoriteProvider } from "./context/favoriteContext"
import SearchProvider from "./context/searchContext"
import { AppRoutes } from "./routes"

export function App(){
    return(
        <SearchProvider>
            <FavoriteProvider>
                <AppRoutes/>
            </FavoriteProvider>
        </SearchProvider>
    )
}