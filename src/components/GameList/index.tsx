import { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import GameCard from "../GameCard";
import { Game } from "../../types/game";
import ReactLoading from 'react-loading';


function GameList(){
    const [games, setGames] = useState<Game[]>([]);
    const API_KEY = import.meta.env.VITE_API_KEY;;
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getGames = async () => {
            await axios({
                method: "GET",
                url: "https://api.rawg.io/api/games",
                params: {
                    key: API_KEY,
                    ordering: "+rating",
                    page_size: 15,
                },
            }).then((response) => {
                setGames(response.data.results);
            });

            setIsLoading(false);
        };

        getGames();
    }, [API_KEY]);
    
    if(isLoading){
        return(
            <div className="loading-container">
                 <ReactLoading type={"spin"} color="#D5224E" height={50} width={50} />
            </div>
        )
    }


    return(
        <ul className="game-list">
            {games.map((game) => 
                <GameCard
                    key={game.id}
                    game={game}
                />
            )}
        </ul>
    )
}

export default GameList;    