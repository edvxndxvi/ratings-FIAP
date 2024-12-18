import "./index.scss"
import estrela_preenchida from "../../assets/svg/estrela-preenchida.svg"
import estrela_contornada from "../../assets/svg/estrela-contornada.svg"

function Main(props:{
    titulo: string,
    nota: number,
    imagemCapa: string,
    imagemGameplay: string,
    imagemFundo: string
}){
    return(
        <section className="mainGame" style={{
            background: `linear-gradient(rgba(14, 16, 21, 0.90), rgba(14, 16, 21, 0.90)), url(${props.imagemFundo}) center center / cover no-repeat`,
            }}>
            <div className="conteudo-game">
                <div className="header-game">
                    <h1 className="branco">{props.titulo}</h1>
                    <div className="notas">
                        <div className="avaliacao">
                            <h2 className="branco">AVALIAÇÃO DA RATINGS</h2>
                            <div className="nota-avaliacao">
                                <img src={estrela_preenchida} alt="Estrela Preenchida Icon" />
                                <p className="branco">{props.nota}<span className="cinza">/10</span></p>
                            </div>
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
                        <img src={props.imagemCapa} alt={`Capa ${props.titulo}`} />
                    </div>
                   <div className="gameplay">
                        <img src={props.imagemGameplay} alt={`Gameplay ${props.titulo}`} />
                   </div>
                </div>
            </div>
        </section>
    )
}

export default Main;