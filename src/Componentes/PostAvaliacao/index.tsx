import "./index.css";
import AvalicaoDestaque from "../AvaliacaoDestaque";
import estrela_preenchida from "../../assets/svg/estrela-preenchida.svg";
import like from "../../assets/svg/like.svg";
import dislike from "../../assets/svg/dislike.svg";
import opcoes from "../../assets/svg/3-pontinhos.svg";
import setaBaixo from "../../assets/svg/seta-baixo.svg";
import { useState } from "react";

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

    const [contadorLike, setContadorLike] = useState(props.like);
    const [contadorDislike, setContadorDislike] = useState(props.dislike);
    const [curtido, setCurtido] = useState(false);
    const [disliked, setDisliked] = useState(false);

    const cliqueBotaoLike = () => {
        if (curtido) {
            setContadorLike(contadorLike - 1);
        } else {
            setContadorLike(contadorLike + 1);
            if (disliked) {
                setContadorDislike(contadorDislike - 1);
                setDisliked(false);
            }
        }
        setCurtido(!curtido);
    };

    const cliqueBotaoDislike = () => {
        if (disliked) {
            setContadorDislike(contadorDislike - 1);
        } else {
            setContadorDislike(contadorDislike + 1);
            if (curtido) {
                setContadorLike(contadorLike - 1);
                setCurtido(false);
            }
        }
        setDisliked(!disliked);
    };

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
                    <a href="#!" className="rosa">{props.user}</a>
                    <p className="cinza">{props.data}</p>
                </div>
            </div>
            <div className="texto-avaliacao branco">
                <h4>{props.tituloAvaliacao}</h4>
                {props.temSpoiler ? (
                    <div className="spoilerDropdown">
                        <p className="vermelho">Warning: Spoilers!</p>
                        <img src={setaBaixo} alt="Seta apontando para baixo" />
                    </div>
                ) : (
                    <p dangerouslySetInnerHTML={{ __html: props.textoAvaliacao }} />
                )}
            </div>
            <div className="interacao-avaliacao">
                <div className="reacao-avaliacao">
                    <div className="like-avaliacao" onClick={cliqueBotaoLike}>
                        <img 
                            src={like} 
                            alt="Like Icon" 
                            style={{ filter: curtido ? "invert(28%) sepia(100%) saturate(7483%) hue-rotate(328deg) brightness(96%) contrast(120%)" : "none" }}/>
                        <p className="branco">{contadorLike}</p>
                    </div>
                    <div className="dislike-avaliacao" onClick={cliqueBotaoDislike}>
                        <img 
                            src={dislike} 
                            alt="Dislike Icon" 
                            style={{ filter: disliked ? "invert(28%) sepia(100%) saturate(7483%) hue-rotate(328deg) brightness(96%) contrast(120%)" : "none" }}/>
                        <p className="branco">{contadorDislike}</p>
                    </div>
                </div>
                <a href="#!">
                    <img src={opcoes} alt="Opções Icon" className="opcoes-avaliacao"/>
                </a>
            </div>
          </div>
    )
}

export default PostAvaliacao;