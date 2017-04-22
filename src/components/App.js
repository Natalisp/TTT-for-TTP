import React, { Component } from 'react';
import './App.css';
import Board from './Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Let's play</h2>
        </div>
          <Board />
      </div>
    );
  }
}

export default App;
