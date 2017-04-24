import React, { Component } from 'react';
import Cell from './Cell';
import './App.css';

class Board extends Component {

  addCell(i) {
    return <Cell id={i} value={this.props.cells[i]} getGetHandleClick={() => this.props.getHandleClick(i)} />
  }

  render () {
    return (
      <div>
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
