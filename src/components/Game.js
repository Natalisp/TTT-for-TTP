import React, { Component } from 'react';
import Board from './Board';


class Game extends Component {
  constructor(props) {
    super(props);
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
    this.setState(this.initState);
  }

  render() {
    const winwin = checkWinner(this.state.cells);
    let currentSituation;
    let congrats = "";
    if (winwin) {
      const winnerCells = winwin[0];
      const winner = winwin[1];
      congrats = winner + ' WON!';
    } else {
      currentSituation = (this.state.playerX ? 'X' : 'O') + ' TURN';
    }
    return (
      <div className="Board">
         <div className="Status">{currentSituation}</div>
         <div className="Congrats">{congrats}</div>
        <Board cells={this.state.cells} getHandleClick={(i)=>this.handleClick(i)}/>
        <button onClick={this.clearBoard} style={{width: 280, marginTop: 20, marginLeft: -20, backgroundColor: "#85CEBA"}} >New Game</button>
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
