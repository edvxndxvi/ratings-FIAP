import "./index.css"
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
        <main style={{
            background: `linear-gradient(rgba(14, 16, 21, 0.90), rgba(14, 16, 21, 0.90)), url(${props.imagemFundo}) center center / cover no-repeat`,
            }}>
            <div className="conteudo-main">
                <div className="titulo-main">
                    <h1 className="branco">{props.titulo}</h1>
                    <div className="avaliacao-ratings">
                        <h2 className="branco">AVALIAÇÃO DA RATINGS</h2>
                        <div className="nota-avaliacao">
                            <img src={estrela_preenchida} alt="Estrela Preenchida Icon" />
                            <p className="branco">{props.nota}<span className="cinza">/10</span></p>
                        </div>
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
                        <img src={props.imagemCapa} alt="Capa God Of War: Ragnarok" />
                    </div>
                   <div className="gameplay">
                        <img src={props.imagemFundo} alt="Gameplay God Of War: Ragnarok" />
                   </div>
                </div>
            </div>
        </main>
    )
}

export default Main;