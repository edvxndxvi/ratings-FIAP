import GameList from '../../components/GameList';
import { useFavoriteList } from '../../hooks/useFavoriteList';

function Favorites() {
    const { games, isLoading, error, isEmpty } = useFavoriteList();

    if (error) {
        return (
            <div className="state-container">
                <h2>Ops! Algo deu errado.</h2>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <>
            {isEmpty && (
                <div className="state-container">
                    <h2>Nenhum jogo favoritado ainda.</h2>
                </div>
            )}

            {games && <GameList games={games} isLoading={isLoading} />}
        </>
    );
}

export default Favorites;
