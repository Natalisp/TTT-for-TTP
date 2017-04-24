import React, { Component } from 'react';
import Board from './Board';


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      playerX: true,
    };
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
    this.setState({
      cells: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      layerX: true,
    });
  }

  render() {
    const winwin = checkWinner(this.state.cells);
    let currentSituation;
    if (winwin) {
      const winnerCells = winwin[0];
      const winner = winwin[1];
      currentSituation = winner + ' WON!';
    } else {
      currentSituation = (this.state.playerX ? 'X' : 'O') + ' TURN';
    }
    return (
      <div className="Board">
         <div className="Status">{currentSituation}</div>
        <Board cells={this.state.cells} getHandleClick={(i)=>this.handleClick(i)}/>
        <button onClick={this.clearBoard} >New Game</button>
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


export default Game;
