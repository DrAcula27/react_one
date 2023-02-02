import React from "react";
import "./index.css";

const Square = (props) => {
  let { whichSquare } = props;
  return (
    <button
      className="square"
      onClick={() => {
        console.log("click");
      }}
    >
      Square {whichSquare}
    </button>
  );
};

export default Square;
