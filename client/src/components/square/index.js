import React from "react";
import "./index.css";

const Square = (props) => {
  let { whichSquare } = props;
  return (
    <div className="square">
      <p>Square {whichSquare}</p>
    </div>
  );
};

export default Square;
