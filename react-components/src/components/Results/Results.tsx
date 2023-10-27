import React from 'react';
import './Results.css';

type Planet = {
    name: string,
    diameter: string,
    climate: string,
    terrain: string,
    population: string,
}

class Results extends React.Component {
    state: {items: Planet[], DataisLoaded: boolean} = {
      items: [],
      DataisLoaded: false,
    };

    async componentDidMount(): Promise<void> {
        await fetch('https://swapi.dev/api/planets/')
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json.results,
                DataisLoaded: true,
            });
        });
    }

  render(): React.ReactNode {
    const { items, DataisLoaded } = this.state;
    if (!DataisLoaded)
        return (
            <h2> Pleses wait some time.... </h2>
    );
    return (
      <div className="results-container">
        {items.map(item => (
            <li key={ item.name } className='results-item'>
                <h3>{item.name}</h3>
                <ul>
                    <li>Diameter: {item.diameter}</li>
                    <li>Climate: {item.climate}</li>
                    <li>Terrain: {item.terrain}</li>
                    <li>Population: {item.population}</li>
                </ul>
            </li>
        ))}
      </div>
    )
  }
}

export default Results;
