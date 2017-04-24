import React from 'react';

const Cell = (props) => {
  return <div style={{color: "#85CEBA"}} className="Cell" onClick={() => props.getGetHandleClick()}> {props.value} </div>
}

export default Cell;
