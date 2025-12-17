import "./index.scss"
import logo from "../../assets/svg/ratings-logo.svg"
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput";

function Header(){
    return(
        <header>
            <nav>
                <div className="conteudo-header">
                    <Link to="/">
                        <img src={logo} alt="Logo Ratings" width={120}/>
                    </Link>
                    <SearchInput/>
                    <Link to="/favorites" className="link">Favoritos</Link>
                </div>
                <button>LOGIN</button>
            </nav>
        </header>
    )
}

export default Header;