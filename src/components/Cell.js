import React, { Component } from 'react';
import './App.css';

class Cell extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
      winner: false,
    };
  }

  render () {
    return (
      <div className={this.props.class} id={this.props.id} onClick={()=> this.props.onClick()}>
      {this.props.value}
      </div>
    )
  }
}

export default Cell;
