import "./index.css";
import AvalicaoDestaque from "../AvaliacaoDestaque";
import estrela_preenchida from "../../assets/svg/estrela-preenchida.svg";
import like from "../../assets/svg/like.svg";
import dislike from "../../assets/svg/dislike.svg";
import opcoes from "../../assets/svg/3-pontinhos.svg";
import setaBaixo from "../../assets/svg/seta-baixo.svg";

function PostAvaliacao(props: {
    notaUser: number;
    user: string;
    data: string;
    tituloAvaliacao: string;
    temSpoiler: boolean,
    textoAvaliacao: string;
    like: number;
    dislike: number;
}){
    return(
        <div className="avaliacao">
            <div className="header-avaliacao">
              <div className="dado-avaliacao">
                <AvalicaoDestaque/>
                <div className="classificacao">
                    <img src={estrela_preenchida} alt="Estrela Preenchida Icon" />
                    <p className="branco">{props.notaUser}<span className="cinza">/10</span></p>
                    </div>
                </div>
                <div className="dado-post-avaliacao">
                    <a href="#" className="rosa">{props.user}</a>
                    <p className="cinza">{props.data}</p>
                </div>
            </div>
            <div className="texto-avaliacao">
                <h4 className="branco">{props.tituloAvaliacao}</h4>
                {props.temSpoiler ? (
                    <div className="spoilerDropdown">
                        <p className="vermelho">Warning: Spoilers!</p>
                        <img src={setaBaixo} alt="Seta apontando para baixo" />
                    </div>
                ) : (
                    <p className="branco" dangerouslySetInnerHTML={{ __html: props.textoAvaliacao }} />
                )}
            </div>
            <div className="interacao-avaliacao">
                <div className="reacao-avaliacao">
                    <div className="like-avaliacao">
                        <img src={like} alt="Like Icon" />
                        <p className="branco">{props.like}</p>
                    </div>
                    <div className="dislike-avaliacao">
                        <img src={dislike} alt="Dislike Icon" />
                        <p className="branco">{props.dislike}</p>
                    </div>
                </div>
                <a href="#">
                    <img src={opcoes} alt="Opções Icon" />
                </a>
            </div>
          </div>
    )
}

export default PostAvaliacao;