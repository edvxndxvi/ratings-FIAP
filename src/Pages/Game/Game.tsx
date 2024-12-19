import './game.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { GameDetails } from '../../types/gameDetails';

import Header from '../../components/Header'
import GameDetail from '../../components/GameDetail'
import seta from "../../assets/svg/seta.svg"
import Footer from '../../components/Footer';

function Game() {
  const { id } = useParams();
  const [game, setGame] = useState<GameDetails | null>(null);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getGame = async () => {
        await axios({
            method: "GET",
            url: `https://api.rawg.io/api/games/${id}`,
            params: {
                key: API_KEY,
            },
        }).then((response) => {
            setGame(response.data);
            console.log(response.data)
        });

        setIsLoading(false);
    };

    getGame();
  }, [id, API_KEY]);

  if(isLoading){
    return(
      <div className="loading-container">
        <ReactLoading type={"spin"} color="#D5224E" height={50} width={50} />
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
            additionalPoster={game.background_image_additional}
            background={game.background_image}
          />

          <section className="descricao">
            <div className="dropdown">
              <img src={seta} alt="Seta Icon" />
              <h3 className="branco">DESCRIÇÃO</h3>
            </div>
            <p className='branco'>{game.description_raw || "Descrição indisponível"}</p>
          </section>
        </>
      )}

      </main>
      <Footer/>
    </>
  )
}

export default Game
