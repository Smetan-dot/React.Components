import './App.css';
import React from 'react';
import Search from './components/Search/Search';
import Results from './components/Results/Results';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="app-container">
        <Search></Search>
        <Results></Results>
      </div>
    );
  }
}

export default App;
