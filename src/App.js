import React, { Component } from 'react';
import Title from './components/Header';
import Solar from './components/SolarSystem';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Solar />
      </div>
    );
  }
}

export default App;
