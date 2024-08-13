import "./index.css"
import logo from "../../assets/svg/ratings-logo.svg"
import menu_hamburguer from "../../assets/svg/menu-burger.svg"
import search_icon from "../../assets/svg/search-icon.svg"

function Header(){
    return(
        <header>
            <nav>
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="Logo Ratings" />
                    </a>
                </div>
                <div className="menu-hamburguer">
                    <a href="#" className="branco">
                        <img src={menu_hamburguer} alt="Menu Hamburguer" />
                        MENU
                    </a>
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