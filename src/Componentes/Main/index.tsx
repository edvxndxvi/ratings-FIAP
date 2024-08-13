import "./index.css"
import AvaliacaoRatings from "../AvaliacaoRatings"
import estrela_contornada from "../../assets/svg/estrela-contornada.svg"
import capa from "../../assets/images/capa-gow.png"
import gameplay from "../../assets/images/gameplay-gow.png"

function Main(){
    return(
        <main>
            <div className="conteudo-main">
                <div className="titulo-main">
                    <h1 className="branco">GOD OF WAR: RAGNAROK</h1>
                    <div className="avaliacao-ratings">
                        <h2 className="branco">AVALIAÇÃO DA RATINGS</h2>
                        <AvaliacaoRatings name="9.6"/>
                    </div>
                    <div className="avaliacao-user">
                        <h2 className="branco">SUA AVALIAÇÃO</h2>
                        <div className="avaliar-button">
                            <img src={estrela_contornada} alt="Estrela Contornada Icon" />
                            <p className="branco">Avaliar</p>
                        </div>
                    </div>
                </div>
                <div className="imagens-main">
                    <div className="capa">
                        <img src={capa} alt="Capa God Of War: Ragnarok" />
                    </div>
                   <div className="gameplay">
                        <img src={gameplay} alt="Gameplay God Of War: Ragnarok" />
                   </div>
                </div>
            </div>
        </main>
    )
}

export default Main;