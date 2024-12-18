import "./index.css"
import logo from "../../assets/svg/ratings-logo.svg"
import search_icon from "../../assets/svg/search-icon.svg"
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <nav>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo Ratings" />
                    </Link>
                </div>
                <div className="pesquisar">
                    <img src={search_icon} alt="Search Icon" />
                    <input type="text" placeholder="Search" />
                </div>
                <button>LOGIN</button>
            </nav>
        </header>
    )
}

export default Header;