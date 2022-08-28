import React, {Component} from 'react';
import Search from './Search';
import GenreMenu from './GenreMenu';
import GamesList from './GamesList';
import StoreButtons from './StoreButtons';

class GamesContainer extends Component {

    state = {
        games: [],
        genres: [],
        filteredGenreIds: [],
        searchTerm: "",
        gogState: false,
        steamState: false,
      };
    
    componentDidMount() {
        fetch("http://localhost:3000/games")
          .then(res => res.json())
          .then(games => this.setState({ games }));
        fetch("http://localhost:3000/genres")
        .then(res => res.json())
        .then(genres => this.setState({ genres }));
    };

    toggleGogState = () => {
      this.setState({ 
        gogState: !this.state.gogState,
        steamState: false
      })
    }

    toggleSteamState = () => {
      this.setState({ 
        steamState: !this.state.steamState,
        gogState: false
      })
    }

    updateGenreIdsFilter = (e, genre) => {
      if (e.target.checked) {
        const newArray = [...this.state.filteredGenreIds, genre.id]
        this.setState({
          filteredGenreIds: newArray
        })
      }
      else {
        const newArray = this.state.filteredGenreIds.filter(filteredGenreId => genre.id !== filteredGenreId)
        this.setState({
          filteredGenreIds: newArray
        })
      }
    }

    updateSearchTerm = event => {
        this.setState({ searchTerm: event.target.value })
    }

    filteredByStore = (games) => { 
      if (this.state.steamState) {
        return games.filter(game => game.game_store_id === 1)
      } else if (this.state.gogState) {
        return games.filter(game => game.game_store_id === 2)
      } else {
        return games
      }
    }

    filteredByGenre = (games) => {
      return games.filter(game => {
      if (this.state.filteredGenreIds.length === 0) {
        return true
      }
      else {
        const gameGenreIds = game.genres.map(g => g.id)
        return this.state.filteredGenreIds.every( genreId => gameGenreIds.includes(genreId) )
      }
    })
  }

    filteredByTitle = (games) => games.filter(game => game.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    filteredGames = () => {
      const titlesFiltered = this.filteredByTitle(this.state.games)
      const genresFiltered = this.filteredByGenre(titlesFiltered)
      return this.filteredByStore(genresFiltered)
    }

    render() {
        return (
          <div className="app">
            <div className="top-bar">
                <GenreMenu genres={this.state.genres} updateGenreIdsFilter={this.updateGenreIdsFilter}/>
                <Search updateSearchTerm={this.updateSearchTerm} searchTerm={this.state.searchTerm} />
                <StoreButtons toggleGogState={this.toggleGogState} toggleSteamState={this.toggleSteamState} steamState={this.state.steamState} gogState={this.state.gogState}/>
            </div>
            <GamesList games={this.filteredGames()} />
          </div>
        );
    }
}

export default GamesContainer