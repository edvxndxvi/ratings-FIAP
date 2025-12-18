import "./index.scss"
import logoFooter from "../../assets/svg/ratings-logo-footer.svg"
import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer className="container">
            <div className="conteudo-footer container">
                <div className="logo-footer">
                    <Link to="#">
                        <img src={logoFooter} alt="Logo Ratings" width={120} />
                    </Link>
                </div>
                <div className="navegacao-footer">
                    <ul>
                        <li className="titulo-lista-footer">COMPANY</li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="">Partnerships</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                    <ul>
                        <li className="titulo-lista-footer">COMPANY</li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="">Partnerships</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                    <ul>
                        <li className="titulo-lista-footer">COMPANY</li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="">Partnerships</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;