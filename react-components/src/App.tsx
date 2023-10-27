import './App.css';
import React from 'react';
import Loader from './components/Loader/Loader';
// import Search from './components/Search/Search';
import './components/Search/Search.css';
import './components/Results/Results.css';
import planet from './assets/planet.gif';
// import Results from './components/Results/Results';

type Planet = {
  name: string,
  diameter: string,
  climate: string,
  terrain: string,
  population: string,
}

class App extends React.Component {
  constructor( props: {} ){
    super( props );
    this.handleClick = this.handleClick.bind(this);
  }
 
  state: {url:string, items: Planet[], dataIsLoaded: boolean, value: string } = {
    url: `${localStorage.getItem('search')}` || 'https://swapi.dev/api/planets/?search=',
    items: [],
    dataIsLoaded: false,
    value: `${localStorage.getItem('input')}` ||''
  };

  async handleClick() {
    this.setState({dataIsLoaded: false});
    localStorage.setItem('search', this.state.url);
    localStorage.setItem('input', this.state.value);
    await fetch(this.state.url)
    .then((res) => res.json())
    .then((json) => {
        this.setState({
            items: json.results,
            dataIsLoaded: true,
        });
    });
  }

  async componentDidMount(): Promise<void> {
    await fetch(this.state.url)
    .then((res) => res.json())
    .then((json) => {
        this.setState({
            items: json.results,
            dataIsLoaded: true,
        });
    });
  }

  render(): React.ReactNode {
    const { items, dataIsLoaded } = this.state;
    if (!dataIsLoaded)
        return (
          <div className="app-container">
            <h1 className='head'>Star Wars Planets</h1>
            <div className="search-container">
              <input 
              className="search-input" 
              type="text"
              value={this.state.value}
              onChange={event => this.setState({url: `https://swapi.dev/api/planets/?search=${event.target.value}`, value: event.target.value})}>
              </input>
              <button 
              className="search-button" 
              onClick={this.handleClick}>Search</button>
            </div>
            <Loader></Loader>
          </div>
        );
    return (
      <div className="app-container">
        <h1 className='head'>Star Wars Planets</h1>
        <div className="search-container">
          <input 
          className="search-input" 
          type="text"
          value={this.state.value}
          onChange={event => this.setState({url: `https://swapi.dev/api/planets/?search=${event.target.value}`, value: event.target.value})}>
          </input>
          <button 
          className="search-button" 
          onClick={this.handleClick}>Search</button>
        </div>

        <div className="results-container">
          {items.map(item => (
            <li key={ item.name } className='results-item'>
                <h3 className='subhead'>
                  <img src={ planet } alt="planet" />
                  {item.name}
                </h3>
                <ul className='results-descripsion'>
                    <li>Diameter: {item.diameter}</li>
                    <li>Climate: {item.climate}</li>
                    <li>Terrain: {item.terrain}</li>
                    <li>Population: {item.population}</li>
                </ul>
            </li>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
