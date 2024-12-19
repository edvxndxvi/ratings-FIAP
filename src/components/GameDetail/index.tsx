import "./index.scss"
import estrela_contornada from "../../assets/svg/estrela-contornada.svg"
import StarRating from "../StarRating";

function GameDetail(props:{
    name: string,
    rate: number,
    poster: string,
    additionalPoster: string,
    background: string
}){
    return(
        <section className="mainGame" style={{
            background: `linear-gradient(rgba(14, 16, 21, 0.90), rgba(14, 16, 21, 0.90)), url(${props.background}) center center / cover no-repeat`,
            }}>
            <div className="conteudo-game">
                <div className="header-game">
                    <h1 className="branco">{props.name}</h1>
                    <div className="notas">
                        <div className="avaliacao">
                            <h2 className="branco">AVALIAÇÃO DA RATINGS</h2>
                            <StarRating rating={props.rate} />
                        </div>
                        <div className="avaliacao">
                            <h2 className="branco">SUA AVALIAÇÃO</h2>
                            <div className="avaliar-button">
                                <img src={estrela_contornada} alt="Estrela Contornada Icon" />
                                <p className="branco">Avaliar</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="imagens-game">
                    <div className="capa">
                        <img src={props.poster} alt={`Capa ${props.name}`} />
                    </div>
                   <div className="gameplay">
                        <img src={props.additionalPoster} alt={`Gameplay ${props.name}`} />
                   </div>
                </div>
            </div>
        </section>
    )
}

export default GameDetail;