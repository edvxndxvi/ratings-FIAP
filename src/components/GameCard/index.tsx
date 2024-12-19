import "./index.scss";
import { Game } from "../../types/game";
import StarRating from "../StarRating";
import { Link } from "react-router-dom";

export interface Props{
    game: Game;
}

function GameCard(props: Props){
    const game = props.game
    return(
        <li className="game-card">
            <Link to={`/game/${game.id}`} className="game-poster">
                <img src={game.background_image} alt={game.name} />
            </Link>

            <div className="game-infos">
                <p className="branco">{game.name}</p>
                <StarRating rating={game.rating} />
            </div>
        </li>
    )
}

export default GameCard;    