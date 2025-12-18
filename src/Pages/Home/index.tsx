import ReactLoading from "react-loading";
import GameList from "../../components/GameList";
import { useGameList } from "../../hooks/useGameList";

function Home() {
  const { games, observerTarget, isLoading, error, notFound } = useGameList();

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
      {notFound && (
          <div className="state-container">
              <h2>Ops! Nenhum jogo encontrado.</h2>
          </div>
      )}

      {isLoading && games.length === 0 && (
          <div className="state-container">
              <ReactLoading type="spin" color="#D5224E" height={50} width={50} />
          </div>
      )}

      <GameList  
        games={games}
        observerTarget={observerTarget}
        isLoading={isLoading}
      />
    </>
  );
}

export default Home;
