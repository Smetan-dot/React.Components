import React from 'react';
import './Results.css';
import planet from '../../assets/planet.gif';

export type Planet = {
  name: string;
  diameter: string;
  climate: string;
  terrain: string;
  population: string;
};

interface propsType {
  items: Planet[];
}

class Results extends React.Component<propsType> {
  render(): React.ReactNode {
    const items = this.props.items;

    return (
      <div className="results-container">
        {items.map((item) => (
          <li key={item.name} className="results-item">
            <h3 className="subhead">
              <img src={planet} alt="planet" />
              {item.name}
            </h3>
            <ul className="results-descripsion">
              <li>Diameter: {item.diameter}</li>
              <li>Climate: {item.climate}</li>
              <li>Terrain: {item.terrain}</li>
              <li>Population: {item.population}</li>
            </ul>
          </li>
        ))}
      </div>
    );
  }
}

export default Results;
