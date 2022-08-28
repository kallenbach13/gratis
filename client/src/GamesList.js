import React from 'react';
import Game from './Game';

const GameList = (props) => {

  let displayAllGames = () => {
    return props.games.map(game => <Game game={game} key={game.id} />)
  }

return (
    <>
    <p>Showing {props.games.length} Results</p>
    <div className="game-list">
      <div className="row">
        {displayAllGames()}
      </div>
    </div>
    </>
  );
}

export default GameList;