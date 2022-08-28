import React from 'react';

class GenreMenu extends React.Component {

  state = {
    showMenu: false,
  }

    displayAllGenreCheckBoxes = () => {
    return this.props.genres.map(genre => <div className="col-sm-6"><div className="checkbox"><label><input onChange={(e) => this.props.updateGenreIdsFilter(e, genre)} type="checkbox" id={genre.name} name={genre.name}/> {genre.name}</label></div></div>)
    }

    toggleMenu = () => {
      this.setState({ showMenu: !this.state.showMenu })
    }

    render() {
      return <>
      <div className="checkbox-field-containter">
      <button  className="btn btn-info" onClick={this.toggleMenu}>Select Genre(s)</button>
        <div className="checkbox-field">
      {
        this.state.showMenu
        ? <div className="overflow-auto"><div className="row">{this.displayAllGenreCheckBoxes()}</div></div>
        : null
      }
          </div>
      </div>
    </>
  }
}

export default GenreMenu;