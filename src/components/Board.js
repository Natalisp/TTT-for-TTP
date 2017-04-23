import React, { Component } from 'react';
import Cell from './Cell';
import Button from './Button';
import './App.css';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      cells: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      playerX: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.initState = this.state;
    this.clearBoard = this.clearBoard.bind(this);
  }

  handleClick(i) {
    const cells = this.state.cells.slice();
    cells[i] = this.state.playerX ? 'X' : 'O';
    this.setState({
      cells: cells,
      playerX: !this.state.playerX,
    });
  }

  clearBoard() {
    this.setState(this.initState)
  }

  addCell(i) {
    return <Cell id={i} class="Cell" value={this.state.cells[i]} onClick={() => this.handleClick(i)} />
  }

  render () {
    const winwin = checkWinner(this.state.cells);
    let currentSituation;
    if (winwin) {
      const winnerCells = winwin[0];
      const winner = winwin[1];
      currentSituation = winner + ' WON!';
    } else {
      currentSituation = (this.state.playerX === 'X' ? 'X' : 'O') + ' TURN';
    }

    return (
      <div className="Board">
      <div>{currentSituation}</div>
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
          <button onClick={this.clearBoard} type="button">Start Again</button>
      </div>
  )
 }
}

function checkWinner(cells) {

  var winningCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for(var i = 0; i < winningCombo.length; i++) {
    if (cells[winningCombo[i][0]] !== " " && cells[winningCombo[i][0]] === cells[winningCombo[i][1]] && cells[winningCombo[i][1]] === cells[winningCombo[i][2]]) {
      return [winningCombo[i], cells[winningCombo[i][0]]] ;
    }
   }
   return null;
  }

export default Board;
