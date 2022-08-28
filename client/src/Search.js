import React from 'react';

const Search = (props) => {

  let searchString = () => {
    if (props.searchTerm !== "") {
    return <p>Searching for "{props.searchTerm}"</p>
    }
  }

  return (
    <div className="filter">
      <input
        id="search-bar"
        className="form-control"
        type="text"
        placeholder="Search Titles..."
        onChange={(event) => {props.updateSearchTerm(event)}}
      />
      <p>{searchString()}</p>
    </div>
  );
}

export default Search;