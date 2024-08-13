import "./index.css"
import seta from "../../assets/svg/seta.svg"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

function Dropdown(props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }){
    return(
        <div className="dropdown">
            <img src={seta} alt="Seta Icon" />
            <h3 className="branco">{props.name}</h3>
        </div>
    )
}

export default Dropdown;