import SearchProvider from "./context/searchContext"
import { AppRoutes } from "./routes"

export function App(){
    return(
        <SearchProvider>
            <AppRoutes/>
        </SearchProvider>
    )
}