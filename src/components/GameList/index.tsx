import "./index.scss";
import ReactLoading from 'react-loading';
import GameCard from "../GameCard";
import { useGameList } from "../../hooks/useGameList";


function GameList(){
    const { games, isLoading, error, observerTarget } = useGameList();

    if(isLoading){
        return(
            <div className="state-container">
                <ReactLoading type={"spin"} color="#D5224E" height={50} width={50} />
            </div>
        )
    }

    if(error){
        return(
            <div className="state-container">
                <h2>Ops! Algo deu errado.</h2>
                <p>{error}</p>
            </div>
        )
    }

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
            <div ref={observerTarget} id="sentinela">
                <ReactLoading type="spin" color="#D5224E" height={50} width={50} />
            </div>
        </>
    )
}

export default GameList;    