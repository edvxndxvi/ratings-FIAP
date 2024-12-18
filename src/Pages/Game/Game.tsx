import './game.scss'
import Header from '../../components/Header'
import Main from '../../components/MainGame'
import seta from "../../assets/svg/seta.svg"
import capa from '../../assets/images/capa-gow.png';
import gameplay from '../../assets/images/gameplay-gow.png';
import fundo from '../../assets/images/main-background.png';
import Footer from '../../components/Footer';

function Game() {
  return (
    <>
      <Header/>
      <main>

        <Main
          titulo="GOD OF WAR: RAGNAROK"
          nota={9.6}
          imagemCapa={capa}
          imagemGameplay={gameplay}
          imagemFundo={fundo}
        />
          
        <section className="descricao">
          <div className="dropdown">
              <img src={seta} alt="Seta Icon" />
              <h3 className="branco">DESCRIÇÃO</h3>
          </div>
          <p className='branco'>Kratos and his son Atreus face the oncoming Norse apocalypse, Ragnarok.</p>
        </section>

      </main>
      <Footer/>
    </>
  )
}

export default Game
