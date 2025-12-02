import './game.scss'
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import Header from '../../components/Header'
import GameDetail from '../../components/GameDetail'
import seta from "../../assets/svg/seta.svg"
import Footer from '../../components/Footer';
import { useGameDetail } from '../../hooks/useGameDetail';
import { removeEspanol } from '../../utils/removeEspanolDesc';

function Game() {
  const { id } = useParams();
  const { game, isLoading, error} = useGameDetail(id || "");
  
  if(isLoading){
    return(
      <div className="state-container">
        <ReactLoading type={"spin"} color="#D5224E" height={50} width={50} />
      </div>
    )
  }

  if(error){
    return(
      <div className="state-container">
        <h2>Ops! Algo deu errado.</h2>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <>
      <Header/>
      <main>

      {game && (
        <>
          <GameDetail
            name={game.name}
            rate={game.rating}
            poster={game.background_image}
            gameplay={game.background_image_additional}
            background={game.background_image}
          />

          <section className="descricao">
            <div className="dropdown">
              <img src={seta} alt="Seta Icon" />
              <h3 className="branco">DESCRIÇÃO</h3>
            </div>
            <p className='branco'>{removeEspanol(game.description_raw) || "Descrição indisponível"}</p>
          </section>
        </>
      )}

      </main>
      <Footer/>
    </>
  )
}

export default Game
