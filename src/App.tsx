import './App.css';
import React from 'react';
import Loader from './components/Loader/Loader';
import Search from './components/Search/Search';
import Results, { Planet } from './components/Results/Results';

class App extends React.Component {
  constructor(props: object) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setValue = this.setValue.bind(this);
  }
  12;
  22;

  state: {
    url: string;
    items: Planet[];
    dataIsLoaded: boolean;
    value: string;
  } = {
    url: this.checkSearch(),
    items: [],
    dataIsLoaded: false,
    value: this.checkValue(),
  };

  checkSearch(): string {
    const url = localStorage.getItem('search');
    if (url !== null) return url;
    return 'https://swapi.dev/api/planets/?search=';
  }

  checkValue(): string {
    const input = localStorage.getItem('input');
    if (input !== null) return input;
    return '';
  }

  async handleClick() {
    this.setState({ dataIsLoaded: false });
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

  handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      url: `https://swapi.dev/api/planets/?search=${event.target.value}`,
      value: event.target.value,
    });
  }

  setValue() {
    return this.state.value;
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
    const dataIsLoaded = this.state.dataIsLoaded;
    if (!dataIsLoaded)
      return (
        <div className="app-container">
          <h1 className="head">Star Wars Planets</h1>
          <Search
            handleClick={this.handleClick}
            handleChange={this.handleChange}
            setValue={this.setValue}
          ></Search>
          <Loader></Loader>
        </div>
      );
    return (
      <div className="app-container">
        <h1 className="head">Star Wars Planets</h1>
        <Search
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          setValue={this.setValue}
        ></Search>
        <Results items={this.state.items}></Results>
      </div>
    );
  }
}

export default App;
