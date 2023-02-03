import React from "react";
import "./index.css";

const Moves = (props) => {
  return (
    <div className="game-info">
      <h4>Previous Moves</h4>
      <ol>{props.moves}</ol>
    </div>
  );
};

export default Moves;
