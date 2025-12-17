import "./index.scss"
import estrela_contornada from "../../assets/svg/estrela-contornada.svg"
import estrela_preenchida from "../../assets/svg/estrela-preenchida.svg"
import StarRating from "../StarRating";
import { useFavorite } from "../../context/favoriteContext";

function GameDetail(props:{
    id: number,
    name: string,
    rate: number,
    poster: string,
    gameplay: string,
    background: string
}){
    const { favorites, toggleFavorite } = useFavorite();

    const isFavorite = favorites.includes(props.id);

    return(
        <section className="mainGame" style={{
            background: `linear-gradient(rgba(14, 16, 21, 0.95), rgba(14, 16, 21, 0.95)), url(${props.background}) center center / cover no-repeat`,
            }}>
            <div className="conteudo-game container">
                <div className="header-game">
                    <h1 className="branco">{props.name}</h1>
                    <div className="notas">
                        <div className="avaliacao">
                            <h2 className="branco">AVALIAÇÃO DA RATINGS</h2>
                            <StarRating rating={props.rate} />
                        </div>
                        <div className="avaliacao">
                            <h2 className="branco">ADICIONAR À LISTA</h2>
                            <div className="avaliar-button" onClick={() => toggleFavorite(props.id)}>
                                <img src={isFavorite ? estrela_preenchida : estrela_contornada} alt="Estrela Contornada Icon" />
                                <p className="branco">{isFavorite ? "Desfavoritar" : "Favoritar"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="imagens-game">
                    <div className="capa">
                        <img src={props.poster} alt={`Capa ${props.name}`} />
                    </div>
                   <div className="gameplay">
                        <img src={props.gameplay} alt={`Gameplay ${props.name}`} />
                   </div>
                </div>
            </div>
        </section>
    )
}

export default GameDetail;