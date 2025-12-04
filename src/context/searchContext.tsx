import { createContext, useContext, useState, ReactNode } from "react";

interface SearchContextType {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const SearchContext = createContext<SearchContextType | null>(null);

interface SearchProviderProps {
    children: ReactNode;
}

export function SearchProvider({children}: SearchProviderProps){
    const [searchQuery, setSearchQuery] = useState('');

    return(
        <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
            {children}
        </SearchContext.Provider>
    )
}

export function useSearch() {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearch não esta dentro do SearchProvider");
    }
    return context;
}

export default SearchProvider