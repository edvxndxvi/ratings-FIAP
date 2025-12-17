import "./index.scss";
import ReactLoading from 'react-loading';
import GameCard from "../GameCard";
import { useGameList } from "../../hooks/useGameList";

function GameList(){
    const { games, isLoading, error, observerTarget, notFound } = useGameList();


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
            {isLoading && games.length === 0 && (
                <div className="state-container">
                    <ReactLoading type="spin" color="#D5224E" height={50} width={50} />
                </div>
            )}
            
            {notFound && (
                <div className="state-container">
                    <h2>Ops! Nenhum jogo encontrado.</h2>
                </div>
            )}

            {games.length > 0 && (
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
                        {isLoading ? (
                            <ReactLoading type="spin" color="#D5224E" height={50} width={50} />
                        ) : (
                            <div style={{ height: '20px' }} /> 
                        )}
                    </div>
                </>
            )}
        </>
    )
}

export default GameList;    