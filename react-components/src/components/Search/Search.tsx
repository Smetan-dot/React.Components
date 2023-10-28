import React from 'react';
import './Search.css';

interface propsType {
  handleClick: () => Promise<void>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: () => string;
}

class Search extends React.Component<propsType> {
  render(): React.ReactNode {
    return (
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          value={this.props.setValue()}
          onChange={this.props.handleChange}
        ></input>
        <button className="search-button" onClick={this.props.handleClick}>
          Search
        </button>
      </div>
    );
  }
}

export default Search;
