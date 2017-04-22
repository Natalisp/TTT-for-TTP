import React, { Component } from 'react';
import Cell from './Cell';
import './App.css';

class Board extends Component {
  render () {
    return (
      <div className="Board">
        <Cell />
        <Cell />
        <Cell />

        <Cell />
        <Cell />
        <Cell />

        <Cell />
        <Cell />
        <Cell />

    </div>
  )
 }
}

export default Board;
