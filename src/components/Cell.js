import React from 'react';

const Cell = (props) => {
  return <div style={{color: "black"}} className="Cell" onClick={() => props.getGetHandleClick()}> {props.value} </div>
}

export default Cell;
