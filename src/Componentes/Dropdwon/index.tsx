import "./index.css"
import seta from "../../assets/svg/seta.svg"

function Dropdown(){
    return(
        <div className="dropdown">
            <img src={seta} alt="Seta Icon" />
            <h3 className="branco">ENREDO</h3>
        </div>
    )
}

export default Dropdown;