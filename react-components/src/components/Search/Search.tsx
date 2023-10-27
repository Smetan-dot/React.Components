import React from 'react';
import './Search.css';

class Search extends React.Component {
  
  render(): React.ReactNode {
    return (
        <div className="search-container">
        <input 
        className="search-input" 
        type="text"
        onChange={event => this.setState({url: `https://swapi.dev/api/planets/?search=${event.target.value}`})}>
        </input>
        <button 
        className="search-button" 
        >Search</button>
      </div>
    );
  }
}

export default Search;
