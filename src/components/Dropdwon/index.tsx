import "./index.css"
import seta from "../../assets/svg/seta.svg"

interface DropdownProps {
    name: string
}

function Dropdown({name}: DropdownProps){
    return(
        <div className="dropdown">
            <img src={seta} alt="Seta Icon" />
            <h3 className="branco">{name}</h3>
        </div>
    )
}

export default Dropdown;