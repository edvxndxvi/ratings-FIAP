import "./index.scss"
import logo from "../../assets/svg/ratings-logo.svg"
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput";

function Header(){
    return(
        <header>
            <nav>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo Ratings" />
                    </Link>
                </div>
                <SearchInput onSearchChange={(query) => console.log(query)}/>
                <button>LOGIN</button>
            </nav>
        </header>
    )
}

export default Header;