import React from 'react';
import './Search.css';

class Search extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="search-container">
        <input className="search-input" type="text"></input>
        <button className="search-button">Search</button>
      </div>
    );
  }
}

export default Search;
