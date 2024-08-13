import "./index.css"
import mais from "../../assets/svg/mais.svg"

function AvaliarButton(){
    return(
        <a href="#" className="vermelho">
            <img src={mais} alt="Mais Icon" />
            Avaliar
        </a>
    )
}

export default AvaliarButton;