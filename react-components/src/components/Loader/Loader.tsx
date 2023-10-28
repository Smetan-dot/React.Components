import './Loader.css';
import React from 'react';

class Loader extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="loader-container">
        <div className="loader-item"></div>
        <div className="loader-item"></div>
        <div className="loader-item"></div>
        <div className="loader-item"></div>
      </div>
    );
  }
}

export default Loader;
