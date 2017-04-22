import React, { Component } from 'react';
import './App.css';

class Cell extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }

  render () {
    return (
      <div className="Cell" onClick={()=> this.props.onClick()}>
      {this.props.value}
      </div>
    )
  }
}

export default Cell;
