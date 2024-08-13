import "./index.css"
import estrela_preenchida from "../../assets/svg/estrela-preenchida.svg"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

function Classificacao(props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }){
    return(
        <div className="classificacao">
            <img src={estrela_preenchida} alt="Estrela Preenchida Icon" />
            <p className="branco">{props.name}<span className="cinza">/10</span></p>
        </div>
    )
}

export default Classificacao;