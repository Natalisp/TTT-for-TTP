import React, { Component } from 'react';
import Cell from './Cell';
import './App.css';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      cells: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
    }
  }

  handleClick(i) {
    const cells = this.state.cells.slice();
    cells[i] = 'X';
    this.setState({cells: cells});
  }

  addCell(i) {
    return <Cell value={this.state.cells[i]} onClick={() => this.handleClick(i)} />
  }

  render () {
    return (
      <div className="Board">
        <div className="Board-Row">
          {this.addCell(0)}
          {this.addCell(1)}
          {this.addCell(2)}
        </div>
        <div className="Board-Row">
          {this.addCell(3)}
          {this.addCell(4)}
          {this.addCell(5)}
        </div>
        <div className="Board-Row">
          {this.addCell(6)}
          {this.addCell(7)}
          {this.addCell(8)}
        </div>
      </div>
  )
 }
}

export default Board;
