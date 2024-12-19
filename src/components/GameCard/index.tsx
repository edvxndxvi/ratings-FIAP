import "./index.scss";
import { Game } from "../../types/game";
import StarRating from "../StarRating";

export interface Props{
    game: Game;
}

function GameCard(props: Props){
    const game = props.game
    return(
        <li className="game-card">
            <div className="game-poster">
                <img src={game.background_image} alt={game.name} />
            </div>

            <div className="game-infos">
                <p className="branco">{game.name}</p>
                <StarRating rating={game.rating} />
            </div>
        </li>
    )
}

export default GameCard;    