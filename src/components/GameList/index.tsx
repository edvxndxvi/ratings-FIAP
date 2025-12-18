import "./index.scss";
import ReactLoading from 'react-loading';
import GameCard from "../GameCard";
import { Game } from "../../types";

interface GameListProps{
    games: Game[],
    observerTarget?: React.RefObject<HTMLDivElement>,
    isLoading: boolean
}

function GameList({games, observerTarget, isLoading}: GameListProps){
    const initialLoading = isLoading && games.length === 0
    const scrollingLoading = isLoading && games.length > 0

    return(
        <>
            <ul className="game-list">
                {games.map((game) => 
                    <GameCard
                        key={game.id}
                        game={game}
                    />
                )}
            </ul>
            
            {observerTarget && !initialLoading  &&(
                <div ref={observerTarget} id="sentinela">
                    {scrollingLoading ? (
                        <ReactLoading type="spin" color="#D5224E" height={50} width={50} />
                    ) : (
                        <div style={{ height: '20px' }} /> 
                    )}
                </div>
            )}
        </>
    )
}

export default GameList;    