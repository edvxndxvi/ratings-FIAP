import axios from "axios"
import { Game, GameDetails } from "../types";

const API_KEY = import.meta.env.VITE_API_KEY;;
const URL = "https://api.rawg.io/api/games"

export async function fetchGames(searchQuery: string, currentPage: number): Promise<Game[]> {
    const response = await axios({
        method: 'GET',
        url: URL,
        params: {
            key: API_KEY,
            ordering: '+rating',
            page: {currentPage},
            page_size: 40,
            ...(searchQuery && { search: searchQuery })
        }
    });
console.log(response.data.results)
    return response.data.results;
}

export async function fetchGamesById(id: string): Promise<GameDetails> {
    const response = await axios({
        method: 'GET',
        url: `${URL}/${id}`,
        params: {
            key: API_KEY
        }
    });

    console.log(response.data)
    return response.data;
}