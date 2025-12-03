import axios from "axios"
import { Game, GameDetails } from "../types";

const API_KEY = import.meta.env.VITE_API_KEY;;
const URL = "https://api.rawg.io/api/games"

export async function fetchGames(querySearch: string): Promise<Game[]> {
    const response = await axios({
        method: 'GET',
        url: URL,
        params: {
            key: API_KEY,
            ordering: '+rating',
            page_size: 40,
            search: {querySearch}
        }
    });

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