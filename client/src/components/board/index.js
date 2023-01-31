import React from "react";
import Square from "../square";
import "./index.css";

const Board = () => {
  return (
    <div className="board">
      <h1>Board</h1>
      <div className="square-container">
        <Square whichSquare="1" />
        <Square whichSquare="2" />
        <Square whichSquare="3" />
        <Square whichSquare="4" />
        <Square whichSquare="5" />
        <Square whichSquare="6" />
        <Square whichSquare="7" />
        <Square whichSquare="8" />
        <Square whichSquare="9" />
      </div>
    </div>
  );
};

export default Board;
