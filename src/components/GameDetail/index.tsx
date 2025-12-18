import "./index.scss"
import estrela_contornada from "../../assets/svg/estrela-contornada.svg"
import estrela_preenchida from "../../assets/svg/estrela-preenchida.svg"
import StarRating from "../StarRating";
import { useFavorite } from "../../context/favoriteContext";
import { GameDetails } from "../../types";

function GameDetail(game : GameDetails){
    const { favorites, toggleFavorite } = useFavorite();
    const isFavorite = favorites.some(fav => fav.id === game.id);

    return(
        <section className="mainGame" style={{
            background: `linear-gradient(rgba(14, 16, 21, 0.95), rgba(14, 16, 21, 0.95)), url(${game.background_image}) center center / cover no-repeat`,
            }}>
            <div className="conteudo-game container">
                <div className="header-game">
                    <h1 className="branco">{game.name}</h1>
                    <div className="notas">
                        <div className="avaliacao">
                            <h2 className="branco">AVALIAÇÃO DA RATINGS</h2>
                            <StarRating rating={game.rating} />
                        </div>
                        <div className="avaliacao">
                            <h2 className="branco">ADICIONAR À LISTA</h2>
                            <div className="avaliar-button" onClick={() => toggleFavorite({...game})}>
                                <img src={isFavorite ? estrela_preenchida : estrela_contornada} alt="Estrela Contornada Icon" />
                                <p className="branco">{isFavorite ? "Desfavoritar" : "Favoritar"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="imagens-game">
                    <div className="capa">
                        <img src={game.background_image} alt={`Capa ${game.name}`} />
                    </div>
                   <div className="gameplay">
                        <img src={game.background_image_additional} alt={`Gameplay ${game.name}`} />
                   </div>
                </div>
            </div>
        </section>
    )
}

export default GameDetail;